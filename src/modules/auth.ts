import jwt from "jsonwebtoken";

export const createJWT = (user: any) => {
  const token = jwt.sign(
    { username: user.username, id: user.id },
    process.env.JWT_SEC as string
  );
  return token;
};
