import { FormEvent, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import Visible from "../../Icons/Visible";
import NoVisible from "../../Icons/NoVisible";
import Input from "../Inputs/Input";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const { createUser, state } = useAuthContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const userExists = state.users.find((u) => u.username === username);

    if (userExists) {
      setUsernameError("This username isn't available");
      return;
    } else {
      const newUser = {
        username: username,
        email: email,
        password: password,
        id: "",
        isLoggedIn: false,
      };
      createUser(newUser);
      setSuccessful(true);
      setUsername("");
    }
  };

  const clearUsernameError = () => setUsernameError("");
  const clearEmailError = () => setEmailError("");
  const clearPassError = () => setPassError("");

  return (
    <div className={` ${successful ? "w-full py-20" : "w-full px-4  h-full"}`}>
      {successful ? (
        <h3 className="font-bold text-primary mx-auto text-center text-4xl px-16 py-16 ">
          Registration successful!
        </h3>
      ) : (
        <>
          <h6 className="font-bold text-2xl my-4 text-center">
            Create account
          </h6>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <Input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              classes="input-form mx-auto my-2 px-4 py-2"
              value={username}
              onChange={setUsername}
              setError={setUsernameError}
              clearError={clearUsernameError}
            />
            {usernameError && (
              <p className="text-xs text-primary">{usernameError}</p>
            )}
            <Input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              classes="input-form  mx-auto my-2 px-4 py-2"
              value={email}
              onChange={setEmail}
              setError={setEmailError}
              clearError={clearEmailError}
            />
            {emailError && <p className="text-xs text-primary">{emailError}</p>}
            <div className="relative mx-auto my-2 w-full">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                name="password"
                classes="input-form w-full px-4 py-2 pr-10 "
                value={password}
                onChange={setPassword}
                setError={setPassError}
                clearError={clearPassError}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 bg-transparencies-100 flex items-center pr-4 hover:text-third"
              >
                {showPassword ? <Visible /> : <NoVisible />}
              </button>
            </div>
            {passError && <p className="text-xs text-primary">{passError}</p>}
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
