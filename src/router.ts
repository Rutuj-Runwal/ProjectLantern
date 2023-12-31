import { Router } from "express";
import {
  handleInputValidation,
  handleInputValidations,
} from "./util/validation";
import { ProductSchema, UpdateSchema } from "../prisma/zod";
const router = Router();

// Product Routes
router.get("/product", (req, res) => {
  res.status(200).json({ message: "Get all products!" });
});

router.get("/product:id", (req, res) => {
  res.json({ message: "Get prodcut with id!" });
});

router.post(
  "/product",
  handleInputValidation(ProductSchema, "name"),
  (req, res) => {
    res.json({ message: "Add a product" });
  }
);

router.put(
  "/product:id",
  handleInputValidation(ProductSchema, "name"),
  (req, res) => {
    res.json({ message: "Update product with id" });
  }
);

router.delete("/product:id", (req, res) => {
  res.json({ message: "Delete prodcut with id" });
});

// Update routes
router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post(
  "/update",
  handleInputValidations(UpdateSchema, [
    "title",
    "body",
    "status",
    "version",
    "asset",
  ]),
  (req, res) => {
    res.json({ message: "Added update to db" });
  }
);

router.put(
  "/update/:id",
  handleInputValidations(UpdateSchema, [
    "title",
    "body",
    "status",
    "version",
    "asset",
  ]),
  (req, res) => {
    res.json({ message: "update set" });
  }
);

router.delete("/update/:id", (req, res) => {});

// UpdatePoint Routes
router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", (req, res) => {});

router.put("/updatepoint/:id", (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
