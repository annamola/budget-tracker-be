// const Book = require("../models/bookModel");

// exports.getAllBooks = async (req, res) => {
//   const books = await Book.find();
//   res.json(books);
// };

// exports.createBook = async (req, res) => {
//   const newBook = new Book(req.body);
//   await newBook.save();
//   res.json(newBook);
// };

export async function findUserById(client, id) {
  const result = await client
    .db("budget")
    .collection("user_info")
    .findOne({ _id: id });

  if (result) {
    console.log(`Found a user in the collection with the id '${id}':`);
    console.log(result);
    return result;
  } else {
    console.log(`No user found with the id '${id}'`);
  }
}

// async function createUser(client, newUser) {
//   const result = await client
//     .db("budget")
//     .collection("user_info")
//     .insertOne(newListing);
//   console.log(
//     `New listing created with the following id: ${result.insertedId}`
//   );
// }
