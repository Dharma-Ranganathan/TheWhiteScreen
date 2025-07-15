import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to={"/"}>
        <h3>The White Screen</h3>
      </Link>
    </div>
  );
};

export default Logo;
