import { FormEvent, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { createUser } = useAuthContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
      id: "",
      isLoggedIn: false,
    };
    createUser(newUser);
  };
  return (
    <div className=" w-2/3 h-full ">
      <h6 className="font-bold text-2xl my-4 text-center">Create account</h6>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className="input-form mx-auto my-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          className="input-form  mx-auto my-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
          className="input-form  mx-auto my-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="min-w-full sm:w-2/4 mx-auto mt-6 mb-6 bg-btnBorder"
        >
          enviar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
