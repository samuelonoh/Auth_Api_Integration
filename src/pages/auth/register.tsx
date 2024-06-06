import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState(true)
  const navigate = useNavigate();

  const handleRegister = async () => {
    const item = { name, password, email };
    console.log(item);

    if (!name || !password || !email || !number) {
        setErrors(false)
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/user", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
        localStorage.setItem("user-data", JSON.stringify(data));
        navigate("/dashboard");
        toast.success("Registration successful");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Error registering user");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center space-y-6 border-2 border-black py-20 px-10 rounded-md"
    >
      <p className="font-bold text-3xl underline">Signup</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`w-[300px] h-[50px] outline-none border-2 ${
          errors ? "border-black" : "border-red-500"
        } mt-32 rounded-lg px-5`}
        placeholder="Name"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`w-[300px] h-[50px] outline-none border-2 ${
          errors ? "border-black" : "border-red-500"
        } mt-32 rounded-lg px-5`}
        placeholder="Password"
        required
      />
      <div className="flex w-[300px] h-[50px] gap-5 mt-32">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-[50%] outline-none border-2 ${
            errors ? "border-black" : "border-red-500"
          } rounded-lg px-5`}
          placeholder="Email"
          required
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={`w-[50%] outline-none border-2 ${
            errors ? "border-black" : "border-red-500"
          } rounded-lg px-5`}
          placeholder="Phone number"
          required
        />
      </div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={`w-[300px] h-[50px] outline-none border-2 ${
          errors ? "border-black" : "border-red-500"
        } mt-32 rounded-lg px-5`}
        placeholder="Address"
      />

      <Button
        onClick={handleRegister}
        title="Register"
        type="button"
        className="bg-black p-3 font-bold text-lg text-white rounded-lg"
      />
      <p className="text-sm font-medium ">
        Verify your Email and phone number{" "}
        <Link to={"/verify"} className="underline text-blue-600">
          here
        </Link>
      </p>
    </div>
  );
}
