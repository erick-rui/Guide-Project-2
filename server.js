const express = require("express");
const dao = require("./mongo-dao");
const app = express();

app.use(express.json());

const port = 4000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);

app.get("/api/films", (req, res) => {
  dao.getAllFilms(function (data) {
    res.send(data);
  });
});

app.get("/api/characters", (req, res) => {
  dao.getAllCharacters(function (data) {
    res.send(data);
  });
});

app.get("/api/planets", (req, res) => {
  dao.getAllPlanets(function (data) {
    res.send(data);
  });
});

app.get("/api/characters/:id", (req, res) => {
  dao.findCharacter(req.params.id, (character) => {
    if (!character) {
      res.status(404).end();
    } else {
      res.send(character);
    }
  });
});

app.get("/api/planets/:id", (req, res) => {
  dao.findPlanet(req.params.id, (planet) => {
    if (!planet) {
      res.status(404).end();
    } else {
      res.send(planet);
    }
  });
});

app.get("/api/films/:id", (req, res) => {
  dao.findFilm(req.params.id, (film) => {
    if (!film) {
      res.status(404).end();
    } else {
      res.send(film);
    }
  });
});

app.get("/api/films/:id/characters", (req, res) => {
  dao.findFilmCharacters(req.params.id, (characters) => {
    if (!characters) {
      res.status(404).end();
    } else {
      res.send(characters);
    }
  });
});

app.get("/api/films/:id/planets", (req, res) => {
  dao.findFilmPlanets(req.params.id, (planets) => {
    if (!planets) {
      res.status(404).end();
    } else {
      res.send(planets);
    }
  });
});

app.get("/api/characters/:id/films", (req, res) => {
  dao.findCharacterFilms(req.params.id, (films) => {
    if (!films) {
      res.status(404).end();
    } else {
      res.send(films);
    }
  });
});

app.get("/api/planets/:id/films", (req, res) => {
  dao.findPlanetFilms(req.params.id, (films) => {
    if (!films) {
      res.status(404).end();
    } else {
      res.send(films);
    }
  });
});

app.get("/api/planets/:id/characters", (req, res) => {
  dao.findPlanetCharacters(req.params.id, (characters) => {
    if (!characters) {
      res.status(404).end();
    } else {
      res.send(characters);
    }
  });
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
