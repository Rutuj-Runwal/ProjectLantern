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

export const handleInputValidations =
  (ZOD_SCHEMA: any, fields: Array<string>) =>
  (req: any, res: any, next: any) => {
    const userInput: any = {};
    for (var indx in fields) {
      userInput[fields[indx]] = req.body[fields[indx]];
    }

    const validation = ZOD_SCHEMA.safeParse(userInput);

    if (validation.success) {
      req.body.validation = validation;
      next();
    } else {
      const validationIssues = validation.error.issues;
      // Build error log
      const data: any = {};
      console.log(validationIssues);
      for (var indx in validationIssues) {
        data[validationIssues[indx].path[0]] = validationIssues[indx].message;
      }

      res.status(403).json({ message: data });

      return;
    }
  };
