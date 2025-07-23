import { TbLogout } from "react-icons/tb";
import { BiLogIn } from "react-icons/bi";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useFirebaseAuth();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    logout();
  }

  return (
    <div className="logout">
      <span>
        {user ? (
          <TbLogout onClick={handleLogout} />
        ) : (
          <BiLogIn onClick={() => navigate("/login")} />
        )}
      </span>
    </div>
  );
};

export default Logout;
