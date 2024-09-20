import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div
      className="error-page"
      style={{ textAlign: "center", padding: "50px" }}
    >
      <h1>404</h1>
      <p>Страница не найдена</p>
      <img
        width={"250px"}
        src="https://avatars.mds.yandex.net/i?id=b585e3a42d982dc35fbb6db4eb10d33481d2aab80f872444-12980679-images-thumbs&n=13"
        alt="404 Error"
      />
    </div>
  );
};

export default ErrorPage;
