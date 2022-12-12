import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <a>
        <Link to="/">Home</Link>
      </a>
      <a>
        <Link to="/input">Input</Link>
      </a>
    </>
  );
}
