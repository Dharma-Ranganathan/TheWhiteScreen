import { TbLogout } from "react-icons/tb";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

const Logout = () => {
  const { logout } = useFirebaseAuth();

  function handleLogout() {
    logout();
  }

  return (
    <div className="logout" onClick={handleLogout}>
      <span>
        <TbLogout />
      </span>
    </div>
  );
};

export default Logout;
