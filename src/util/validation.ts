// Input validation middleware using zod

export const handleInputValidation =
  (ZOD_SCHEMA: any, field: string) => (req: any, res: any, next: any) => {
    const userInput: any = {};
    userInput[field] = req.body[field];
    const validation = ZOD_SCHEMA.safeParse(userInput);
    if (validation.success) {
      req.body.validation = validation;
      next();
    } else {
      res.status(403).json({ message: validation.error.issues[0].message });
      return;
    }
  };
