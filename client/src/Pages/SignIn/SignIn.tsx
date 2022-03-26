import { Link, useLocation, useNavigate } from "react-router-dom";
import { currentUserTypes, errorTypes, SignInPropTypes } from "./SignIn.types";
import "./SignIn.scss";
import Button from "../../Molicules/Button";
import { useRef, useState } from "react";
import { useDispatcher } from "../../store/dispatch";
import { useSelect } from "../../store/selector";
import Input from "../../Molicules/Input";
// import { getError } from "../../utils";

const SignIn: React.FC<SignInPropTypes> = ({ formType = "sign-in" }) => {
  // const navigate = useNavigate();
  // const { search } = useLocation();
  // const redirectInUrl = new URLSearchParams(search).get("redirect");
  // const redirect = redirectInUrl ? `/${redirectInUrl}` : "/";

  // console.log({ redirectInUrl });
  //data from store
  const { currentUser } = useSelect();
  const { setCurrentUser } = useDispatcher();

  //useRef hook
  const fullnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  //useState hook
  const [error, setError] = useState({} as errorTypes);

  //function to handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValues: currentUserTypes = {
      name: fullnameRef.current?.value || null,
      email: emailRef.current?.value || null,
      password: passwordRef.current?.value || null,
      confirmPassword: confirmPasswordRef.current?.value || null,
    };

    if (formType === "sign-up") {
      if (
        formValues.password !== formValues.confirmPassword ||
        formValues.password === "" ||
        formValues.confirmPassword === ""
      ) {
        setError({
          status: "error",
          message: "Passwords do not match",
          type: "password",
        });
        return;
      } else {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_BASE}/api/users/signup`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: formValues.name,
                email: formValues.email,
                password: formValues.password,
              }),
            }
          )
            .then((res) => res.json())
            .catch((err) => console.log(err));

          if (response?.status === "error") {
            setError(response);
          } else {
            setError({} as errorTypes);
            setCurrentUser(response[0]);
            setTimeout(() => {
              window.location.href = "/sign-in";
            }, 1000);
          }
        } catch (error) {
          console.log({ error });
        }
      }
    } else {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE}/api/users/signin`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formValues.email,
              password: formValues.password,
            }),
          }
        )
          .then((res) => res.json())
          .catch((err) => console.log({ err }));

        if (response?.status === "error") {
          setError(response);
        } else {
          setError({} as errorTypes);
          setCurrentUser(response.data);
          // setTimeout(() => {
          //   navigate(redirect || "/");
          // }, 1000);
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit} autoComplete="off">
        {formType === "sign-in" ? (
          <>
            <h1>Sign In</h1>
            <Input
              type="email"
              label="Email"
              id="email"
              name="email"
              ref={emailRef}
              required
              placeholder="Enter your email"
              error={error}
            />

            <Input
              type="password"
              label="Password"
              id="password"
              name="password"
              ref={passwordRef}
              required
              placeholder="Enter your email"
              error={error}
            />
            <div className="form-group">
              <Button type="submit" text="Sign In" large full />
            </div>
            <div>
              Don't have an account yet?{" "}
              <Link to="/sign-up">Create an Account</Link>
            </div>
          </>
        ) : (
          <>
            <h1>Sign Up</h1>
            <Input
              type="text"
              label="Full Name"
              id="full-name"
              name="full-name"
              ref={fullnameRef}
              required
              placeholder="Enter your full name"
              error={error}
            />
            <Input
              type="email"
              label="Email"
              id="email"
              name="email"
              ref={emailRef}
              required
              placeholder="Enter your email"
              error={error}
            />
            <Input
              type="password"
              label="Password"
              id="password"
              name="password"
              ref={passwordRef}
              required
              placeholder="Enter password"
              error={error}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />

            <Input
              type="password"
              label="Confirm Password"
              id="confirm-password"
              name="confirm-password"
              ref={confirmPasswordRef}
              required
              placeholder="Confirm password"
              error={error}
            />

            <div className="form-group">
              <Button type="submit" text="Sign Up" large full />
            </div>
            <div>
              Already have an account? <Link to="/sign-in">Sign In</Link>
            </div>
          </>
        )}

        {currentUser?.token && (
          <p className="color-success">
            You are logged in as {currentUser.name}
          </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;
