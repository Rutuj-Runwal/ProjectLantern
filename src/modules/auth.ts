import jwt from "jsonwebtoken";

export const createJWT = (user: any) => {
  const token = jwt.sign(
    { username: user.username, id: user.id },
    process.env.JWT_SECRET as string
  );
  return token;
};

// Middleware to verfiy user JWT
export const protect = (req: any, res: any, next: any) => {
  // Get Authorization Bearer
  const bearer = req.headers.authorization;

  const token = bearer.split(" ")[1]; // Get JWT token: "Bearer token"

  if (!token) {
    res.status(401).json({ message: "Not Authorized" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = payload;
    next();
  } catch (e) {
    res.status(401).json({ message: "Not Authorized" });
  }
};
