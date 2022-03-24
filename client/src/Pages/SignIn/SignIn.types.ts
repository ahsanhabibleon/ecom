export type SignInPropTypes = {
  formType: string;
};
export type currentUserTypes = {
  email: string | null;
  name?: string | null;
  password: string | null;
  confirmPassword?: string | null;
  token?: string;
  _id?: string;
  isAdmin?: boolean;
};

export type errorTypes = {
  status?: string;
  type?: string;
  message?: string;
  response?: {
    data?: {
      message: string;
    };
  };
};
