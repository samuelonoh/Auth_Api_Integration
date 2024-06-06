import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const userData = localStorage.getItem("user-data");

  useEffect(() => {
    if (!userData || userData === "") {
      navigate("/login");
    }
  }, [navigate, userData]);
  const userName = userData ? JSON.parse(userData).name : "User";

  return (
    <div>
      <p className="font-bold text-7xl">Welcome, {userName}</p>
    </div>
  );
}