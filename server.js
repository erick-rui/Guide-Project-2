const express = require("express");
//const dao = require("./mongo-dao");
const app = express();

app.use(express.json());

const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);

app.get("/api/planets", (req, res) => {
  console.log("Test object");
  return;
});
/** 
app.get("/books/:isbn", (req, res) => {
  dao.findBook(req.params.isbn, (book) => {
    if (!book) {
      res.status(404).end();
    } else {
      res.send(book);
    }
  });
});

app.delete("/books/:isbn", (req, res) => {
  dao.deleteBook(req.params.isbn, (ok) => {
    if (!ok) {
      res.status(404).end();
    } else {
      res.end();
    }
  });
});

app.put("/books/:isbn", (req, res) => {
  dao.updateBook(req.params.isbn, req.body, (ok) => {
    if (!ok) {
      res.status(404).end();
    } else {
      res.end();
    }
  });
});

app.post("/books", (req, res) => {
  dao.addBook(req.body, (ok) => {
    if (!ok) {
      res.status(500).end();
    } else {
      res.end();
    }
  });
});
*/
