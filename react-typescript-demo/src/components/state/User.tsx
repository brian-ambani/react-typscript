import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogIn = () => {
    setUser({
      name: "Bruce Wayne",
      email: "bruce@wayne.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>

      <div>User name:{user.name}</div>
      <div>User email:{user.email}</div>
    </div>
  );
};
