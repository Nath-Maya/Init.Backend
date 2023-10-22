import { Router } from "express";

const router = Router();
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/", (req, res) => {
  res.render("profile", {
    user: req.session.user,
  });
});

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> 582d8496433bb31670af15cd79ecc297bf6cdeaf
