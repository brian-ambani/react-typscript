import { useState } from "react";
import { Button } from "../proptypes/eventInputProps/Button";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogIn = () => {
    setUser({
      name: "Bruce Wayne",
      email: "bruce@wayne.com",
    });
  };
  const handleLogOut = () => setUser(null);

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>Logout</button>

      <div>User name:{user?.name}</div>
      <div>User email:{user?.email}</div>
    </div>
  );
};
