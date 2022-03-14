import { useRef } from "react";
import Input from "../../Molicules/Input";
import { AppProps } from "./Header.types";
const Header = (props: AppProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    text,
    isLoggedIn,
    onClick,
    person: { firstName, lastName },
  } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          type="text"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          id="input"
          ref={inputRef}
          placeholder="Type something"
          value="Hello"
        />
        <button onClick={onClick}>
          {firstName} {lastName} is{" "}
          {isLoggedIn ? "Logged in!" : "not logged in!"}!
        </button>
        <div>{text}</div>
      </header>
    </div>
  );
};

export default Header;
