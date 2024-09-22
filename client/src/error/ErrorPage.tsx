import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className="error-page" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <img
        src="https://a.d-cd.net/soo-bvhEXNqkN-gmUZ-gIn3sQJU-960.jpg"
        alt="404 Error"
      />
    </div>
  );
};

export default ErrorPage;
