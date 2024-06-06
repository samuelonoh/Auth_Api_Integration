import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";

export default function Verification() {
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const navigate = useNavigate();
  const userData = localStorage.getItem("user-data");

  const handleVerification = () => {
    if (userData && userData !== "") {
      const user = JSON.parse(userData);
      if (user.email === email && user.number === number) {
        toast.success("Logged in successfully");
        navigate("/dashboard");
      } else {
        toast.error("Incorrect useremail or number");
      }
    } else {
      toast.error("No registered user data found. Please sign up.");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 border-2 border-black py-20 px-10 rounded-md">
      <p className="font-bold text-3xl underline">Verification</p>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[300px] h-[50px] outline-none border-2 border-black rounded-lg px-5 mt-32"
        placeholder="Email"
        required
      />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-[300px] h-[50px] outline-none border-2 border-black rounded-lg px-5"
        placeholder="Phone number"
        required
      />
      <Button
        onClick={handleVerification}
        title="Verify"
        type="button"
        className="bg-black p-3 font-bold text-lg text-white rounded-lg"
      />
    </div>
  );
}
