import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={css.notFoundPage}>
      <p className={css.notFoundText}>Page you visited doesn&apos;t exist!</p>
      <p className={css.redirectedText}>
        You will be redirected to home in {5 - timer} seconds!
      </p>
      <Link className={css.linkToHome} to="/">
        Go home
      </Link>
    </div>
  );
};

export default NotFoundPage;
