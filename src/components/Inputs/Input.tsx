import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  classes: string;
  value: string;
  onChange: (value: string) => void;
  setError: (error: string) => void;
  clearError: () => void;
}

const Input = ({
  type,
  placeholder,
  id,
  name,
  classes,
  value,
  onChange,
  setError,
  clearError,
}: InputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    clearError();

    if (!newValue.trim()) {
      setError(
        `The field ${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      );
    } else {
      setError("");
    }
  };

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        className={classes}
        //input stores its value in the state (in form component)
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
};

export default Input;
