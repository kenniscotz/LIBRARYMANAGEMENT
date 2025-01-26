import bookModel from "../model/authorModel.js";

export const getAuthorWithName = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const author = await Author.findByPk(id);
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({
      message: `Error fetching author`,
    });
  }
};
