export const checkValidData = (name, email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );

  const isNameValid = /^[a-zA-Z]{3,}$/.test(name);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email id is not valid.";
  if (!isNameValid) return "Invalid name";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
};
