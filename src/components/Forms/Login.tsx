import { FormEvent, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../Inputs/Input";

interface LoginProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Login = ({ setIsOpen }: LoginProps) => {
  const { state, login } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const user = state.users.find((u) => u.username === username);

    if (username.length === 0) {
      setUserError("The field username is required");
    }

    if (password.length === 0) {
      setPassError("The field password is required");
    }

    if (!user) {
      setPassword("");
      setUserError("Username doesn't exist");
      return;
    }
    if (user.password !== password) {
      setPassError("Incorrect password");
      setPassword("");
      return;
    }

    setPassError("");
    setUserError("");

    const userId = user.id;

    if (userId) {
      login(userId);
      setIsOpen(false);
      navigate("/dashboard");
    }
  };
  const clearUserError = () => setUserError("");
  const clearPassError = () => setPassError("");

  return (
    <div className="w-2/3 h-full">
      <h3 className="font-bold text-2xl my-4 text-center">Welcome!</h3>
      <form className="flex flex-col" onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          classes="input-form mx-auto my-2 px-4 py-2"
          // send the state so that the input stores the value in it
          value={username}
          onChange={setUsername}
          setError={setUserError}
          clearError={clearUserError}
        />
        {userError && <p className="text-xs text-primary">{userError}</p>}

        <Input
          type="text"
          placeholder="Password"
          id="password"
          name="password"
          classes="input-form mx-auto my-2 px-4 py-2"
          value={password}
          onChange={setPassword}
          setError={setPassError}
          clearError={clearPassError}
        />
        {passError && <p className="text-xs text-primary">{passError}</p>}

        <button
          className="min-w-full sm:w-2/4 mx-auto mt-6 mb-8 text-gray-800 font-bold bg-btnBorder hover:bg-second hover:border-btnBorder"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
