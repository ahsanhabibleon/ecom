import { useRef, useState } from "react";
import Button from "../../Molicules/Button";
import Input from "../../Molicules/Input";
import { useDispatcher } from "../../store/dispatch";
import { useSelect } from "../../store/selector";
import { currentUserTypes, errorTypes } from "../SignIn/SignIn.types";
import "./UserProfile.scss";

const UserProfile: React.FC = () => {
  const { currentUser } = useSelect();
  const { setCurrentUser } = useDispatcher();

  const { token, name, email, isAdmin, _id } = currentUser;

  const fullnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [formDisabled, setFormDisabled] = useState(true);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [error, setError] = useState({} as errorTypes);

  const updateUserInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValues: currentUserTypes = {} as currentUserTypes;
    if (passwordRef.current?.value && !confirmPasswordRef.current?.value) {
      setError({
        status: "error",
        message: "Please confirm your password",
        type: "password",
      });
      return;
    } else if (
      passwordRef.current?.value !== confirmPasswordRef.current?.value
    ) {
      setError({
        status: "error",
        message: "Passwords do not match",
        type: "password",
      });
      return;
    } else {
      fullnameRef.current?.value &&
        (formValues.name = fullnameRef.current?.value);
      emailRef.current?.value && (formValues.email = emailRef.current?.value);
      passwordRef.current?.value &&
        confirmPasswordRef.current?.value &&
        passwordRef.current?.value === confirmPasswordRef.current?.value &&
        (formValues.password = passwordRef.current?.value);

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE}/api/users/update`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...currentUser, ...formValues }),
        }
      )
        .then((res) => res.json())
        .catch((err) => console.log({ err }));

      if (response?.status === "error") {
        let error = null;
        if (response.type === "email") {
          error = { ...response, message: "Email already exists" };
        }
        setError(error);
      } else {
        setError({} as errorTypes);
        setCurrentUser(response);
        setUpdateStatus(true);
        setTimeout(() => {
          setFormDisabled(true);
          setUpdateStatus(false);
        }, 2000);
      }
    }
  };
  return (
    <div className="user-profile">
      <h1>
        User Profile of {name}{" "}
        <i
          onClick={() => {
            setFormDisabled(false);
            setUpdateStatus(false);
          }}
          className="fa-regular fa-pen-to-square"
        ></i>
      </h1>

      <form onSubmit={updateUserInfo}>
        <Input
          type="text"
          label="Full Name"
          id="full-name"
          name="full-name"
          ref={fullnameRef}
          placeholder={name || ""}
          disabled={formDisabled}
          //   error={error}
        />
        <Input
          type="email"
          label="Email"
          id="email"
          name="email"
          ref={emailRef}
          placeholder={email || ""}
          disabled={formDisabled}
          error={error}
        />
        <Input
          type="password"
          label="New Password"
          id="password"
          name="password"
          ref={passwordRef}
          placeholder="********"
          //   error={error}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          disabled={formDisabled}
        />

        <Input
          type="password"
          label="Confirm New Password"
          id="confirm-password"
          name="confirm-password"
          ref={confirmPasswordRef}
          placeholder="********"
          disabled={formDisabled}
          error={error}
        />

        <div>
          <Button type="submit" text="Update" large disabled={formDisabled} />
        </div>
        {updateStatus && (
          <p className="color-success">Profile updated successfully.</p>
        )}
      </form>
    </div>
  );
};

export default UserProfile;
