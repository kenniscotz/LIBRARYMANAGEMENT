import bookModel from "../model/bookModel.js";

export const createBook = async (req, res) => {
  try {
    const { title, author, description, published_date, status, genre } =
      req.body;
    const passwordHashed = hashedPassword(password);

    // Create a new book
    const book = await Book.create({
      title,
      author,
      description,
      published_date,
      status,
      genre,
    });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({
      message: `Error creating book`,
    });
  }
};

export const getBookWithID = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const book = await Book.findByPk(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: `Error fetching book with id`,
    });
  }
};

export const getBook = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
    });
  }
};

export const deleteBook = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const bookIndex = user.findIndex((book) => book.id === id);
    if (bookIndexIndex === -1) {
      return res.status(404).json({
        message: "User not found",
      });
      book.splice(bookIndex, 1);
      res.json({
        message: "Book deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Error delete" });
  }
};
