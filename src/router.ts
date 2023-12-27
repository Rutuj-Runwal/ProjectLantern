import { Router } from "express";
const router = Router();

// Product Routes
router.get("/product", (req, res) => {
  res.status(200).json({ message: "Get all products!" });
});

router.get("/product:id", (req, res) => {
  res.json({ message: "Get prodcut with id!" });
});

router.post("/product", (req, res) => {
  res.json({ message: "Add a product" });
});

router.put("/product:id", (req, res) => {
  res.json({ message: "Update prdoct with id" });
});

router.delete("/product:id", (req, res) => {
  res.json({ message: "Delete prodcut with id" });
});

// Update routes
router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post("/update", (req, res) => {});

router.put("/update/:id", (req, res) => {});

router.delete("/update/:id", (req, res) => {});

// UpdatePoint Routes
router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", (req, res) => {});

router.put("/updatepoint/:id", (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
