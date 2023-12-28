import { PrismaClient } from "@prisma/client";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";

const prisma = new PrismaClient();

export const createNewUser = async (req: any, res: any) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    // Check if username already exists - username is unique property in DB
    const user = await prisma.user.findFirstOrThrow({
      where: {
        username: username,
      },
    });
    res.status(401).json({
      message: "Username already exists!",
      suggestion: "Create a unique username.",
    });
    return;
  } catch (exp) {
    // Username is unique - Create new user

    // Hash password
    const hashedPass = await hashPassword(password);

    // Create user in DB
    const created_user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPass,
      },
    });

    // Generate JWT
    const token = createJWT(created_user);
    res.status(200).json({ token: token });
    return;
  }
};
