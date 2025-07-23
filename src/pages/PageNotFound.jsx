import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PageNotFound.css";
import { useEffect } from "react";

const PageNotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // updating the document title
  useEffect(() => {
    document.title = "404 | The White Screen";
  }, []);

  return (
    <div className="page-not-found">
      <h3>
        PAGE NOT FOUND WITH THIS - <span>{location.pathname}</span>
      </h3>
      <button onClick={() => navigate("/")}>Go Back To Home Page</button>
    </div>
  );
};

export default PageNotFound;
