import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Book from "./models/books.js";
import Category from "./models/category.js";
import { requireAuth, requireRole } from "./middleware/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/booksdb";
mongoose.connect(mongoURI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// ================ CATEGORY ENDPOINTS ================

// GET all categories
app.get("/categories", requireAuth, async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Error fetching categories" });
  }
});

// GET category by ID
app.get("/categories/:id", requireAuth, async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: "Error fetching category" });
  }
});

// CREATE category (ADMIN only)
app.post("/categories", requireAuth, requireRole("ADMIN"), async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: "Error creating category" });
  }
});

// UPDATE category (ADMIN only)
app.put("/categories/:id", requireAuth, requireRole("ADMIN"), async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: "Error updating category" });
  }
});

// DELETE category (ADMIN only)
app.delete("/categories/:id", requireAuth, requireRole("ADMIN"), async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting category" });
  }
});

// ================ BOOK ENDPOINTS ================

// GET all books (with category details)
app.get("/books", requireAuth, async (req, res) => {
  try {
    const books = await Book.find().populate("category");
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching books" });
  }
});

// GET books by category
app.get("/books/category/:categoryId", requireAuth, async (req, res) => {
  try {
    const books = await Book.find({ category: req.params.categoryId }).populate("category");
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching books" });
  }
});

// GET book by ID
app.get("/books/:id", requireAuth, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("category");
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Error fetching book" });
  }
});

// ADD a book (ADMIN only)
app.post("/books", requireAuth, requireRole("ADMIN"), async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    await book.populate("category");
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Error creating book" });
  }
});

// UPDATE a book (ADMIN only)
app.put("/books/:id", requireAuth, requireRole("ADMIN"), async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("category");
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Error updating book" });
  }
});

// DELETE a book (ADMIN only)
app.delete("/books/:id", requireAuth, requireRole("ADMIN"), async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting book" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});