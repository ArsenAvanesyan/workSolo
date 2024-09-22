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
        src="https://shatura.gazteploenergetika.ru/images/2023/404.png"
        alt="404 Error"
      />
    </div>
  );
};

export default ErrorPage;
