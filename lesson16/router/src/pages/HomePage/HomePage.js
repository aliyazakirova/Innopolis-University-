import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1> im homepage</h1>
      <Link to="./contacts"> go to contacts page </Link>
      <Link to="./catalog"> go to catalog page </Link>
    </>
  );
};
