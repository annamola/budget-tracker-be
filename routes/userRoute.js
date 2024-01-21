import express from "express";

// const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/user/{id}", bookController.getAllBooks);
// router.post("/books", bookController.createBook);

// module.exports = router;
