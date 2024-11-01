import { useContext } from "react";
import { dataUser } from "../App.jsx";
function AppHeader() {
  const { username } = useContext(dataUser);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {username}</h2>
    </div>
  );
}

export default AppHeader;
