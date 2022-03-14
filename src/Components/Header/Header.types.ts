import { loggedInType } from "../../App.types";

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export interface AppProps {
  text: string;
  isLoggedIn: loggedInType;
  onClick: () => void;
  person: Person;
}

export interface HeaderPropTypes {
  handleCartOpen: () => void;
  totalNumberOfItems: number;
}
