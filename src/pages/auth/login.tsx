import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  const userData = localStorage.getItem("user-data");

const handleLogin = () => {
  if (userData && userData !== "") {
    const user = JSON.parse(userData);
    if (user.name === name && user.password === password) {
      toast.success("Logged in successfully");
      navigate("/dashboard");
    } else {
      toast.error("Incorrect username or password");
    }
  } else {
    toast.error("No registered user data found. Please sign up.");
    navigate("/");
  }
};

  return (
    <div className="flex flex-col items-center justify-center space-y-6 border-2 border-black py-20 px-10 rounded-md">
      <p className="font-bold text-3xl underline">Login</p>

      <input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-[300px] h-[50px] outline-none border-2 border-black rounded-lg px-5 mt-32"
        placeholder="name"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-[300px] h-[50px] outline-none border-2 border-black rounded-lg px-5"
        placeholder="Phone password"
        required
      />
      <Button
        onClick={handleLogin}
        title="Login"
        type="button"
        className="bg-black p-3 font-bold text-lg text-white rounded-lg"
      />
    </div>
  );
}
