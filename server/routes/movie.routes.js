const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const MovieService = require("../services/Movie.services");

router.get("/", async (req, res) => {
  try {
    const movie = await MovieService.getAllMovies();
    res.status(200).json({ message: "success", movie });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await MovieService.getMovieByPk(id);
    res.status(200).json({ message: "success", movie });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", verifyAccessToken, async (req, res) => {
  try {
    const { title, info, img } = req.body;
    const { id } = res.locals.user;
    if (title.trim() === "" || info.trim() === "" || img.trim() === "") {
      res.status(400).json({ message: "Заполните все поля" });
      return;
    }
    const movie = await MovieService.createMovie({
      userId: id,
      title,
      info,
      img,
    });
    if (movie) {
      res.status(201).json({ message: "success", movie });
      return;
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put("/:id", verifyAccessToken, async (req, res) => {
  try {
    const { id: userId } = res.locals.user;
    const { id } = req.params;
    const { title, info, img } = req.body;
    if (title.trim() === "" || info.trim() === "" || img.trim() === "") {
      res.status(400).json({ message: "Заполните все поля" });
      return;
    }
    const movie = await MovieService.updateMovie(id, userId, {
      title,
      info,
      img,
    });
    if (movie) {
      res.status(200).json({ message: "success", movie });
      return;
    }
    res.status(400).json({ message: "Такого фильма нет" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete("/:id", verifyAccessToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { id: userId } = res.locals.user;
    const movie = await MovieService.deleteMovie(id, userId);
    if (movie) {
      res.status(200).json({ message: "success", movie });
      return;
    }
    res.status(400).json({ message: "Такого фильма нет" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
