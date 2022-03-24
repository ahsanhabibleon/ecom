import { errorTypes } from "../../Pages/SignIn/SignIn.types";

export interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  id?: string;
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
  disabled?: boolean;
  label?: string;
  error?: errorTypes;
  required?: boolean;
  autoComplete?: string;
  pattern?: string;
  title?: string;
}
