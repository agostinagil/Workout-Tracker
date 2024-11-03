import { FormEvent, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Login = ({ setIsOpen }: LoginProps) => {
  const { state, login } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const user = state.users.find(
      (u) => u.username === username && u.password === password
    );

    const userId = user ? user.id : null;

    if (userId) {
      login(userId);
      setIsOpen(false);
      navigate("/dashboard");
    }
  };

  return (
    <div className="w-2/3 h-full">
      <h3 className="font-bold text-2xl my-4 text-center">Welcome!</h3>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          className="input-form mx-auto my-2 px-4 py-2"
        />
        <input
          type="text"
          placeholder="Password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="input-form mx-auto my-2 px-4 py-2"
        />
        <button
          className="min-w-full sm:w-2/4 mx-auto mt-6 mb-8 text-gray-800 font-bold bg-btnBorder hover:bg-second hover:border-btnBorder"
          onClick={(e) => handleLogin(e)}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
