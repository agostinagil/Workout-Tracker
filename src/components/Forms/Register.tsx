import { FormEvent, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import Visible from "../../Icons/Visible";
import NoVisible from "../../Icons/NoVisible";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    setSuccessful(true);
  };
  return (
    <div className={` ${successful ? "w-full py-20" : "w-2/3 h-full"} `}>
      {successful ? (
        <h3 className="font-bold text-primary mx-auto text-4xl px-16 py-16 ">
          Registration successful!
        </h3>
      ) : (
        <>
          <h6 className="font-bold text-2xl my-4 text-center">
            Create account
          </h6>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="input-form mx-auto my-2 px-4 py-2"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              className="input-form  mx-auto my-2 px-4 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative mx-auto my-2 w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="password"
                className="input-form w-full px-4 py-2 pr-10 "
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 bg-transparencies-100 flex items-center pr-4 hover:text-third"
              >
                {showPassword ? <Visible /> : <NoVisible />}
              </button>
            </div>
            <button
              type="submit"
              className="min-w-full sm:w-2/4 mx-auto mt-6 mb-8 text-gray-800 font-bold bg-btnBorder hover:bg-second hover:border-btnBorder"
            >
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default RegisterForm;
