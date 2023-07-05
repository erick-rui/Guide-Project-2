const mongodb = require("mongodb");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "swapi";
const collectionName = "films";
let collection;
let db;

async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);
  //collection = db.collection(collectionName);
}
startup();

module.exports.getAllFilms = function (callback) {
  let collection = db.collection("films");
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((films) => callback(films));
};

module.exports.getAllCharacters = function (callback) {
  let collection = db.collection("characters");
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((characters) => callback(characters));
};

module.exports.getAllPlanets = function (callback) {
  let collection = db.collection("planets");
  let dataPromise = collection.find({}).toArray();
  dataPromise.then((planets) => callback(planets));
};

module.exports.findCharacter = function (id, callback) {
  let collection = db.collection("characters");
  let dataPromise = collection.findOne({ id: +id });
  dataPromise.then((character) => callback(character));
};

module.exports.findFilm = function (id, callback) {
  let collection = db.collection("films");
  let dataPromise = collection.findOne({ id: +id });
  dataPromise.then((film) => callback(film));
};

module.exports.findPlanet = function (id, callback) {
  let collection = db.collection("planets");
  let dataPromise = collection.findOne({ id: +id });
  dataPromise.then((planet) => callback(planet));
};

module.exports.findFilmCharacters = function (id, callback) {
  let collection = db.collection("filmsCharacters");
  let dataPromise = collection.find({ film_id: +id }).toArray();
  dataPromise.then((characters) => callback(characters));
};

module.exports.findFilmPlanets = function (id, callback) {
  let collection = db.collection("filmsPlanets");
  let dataPromise = collection.find({ film_id: +id }).toArray();
  dataPromise.then((planets) => callback(planets));
};

module.exports.findCharacterFilms = function (id, callback) {
  let collection = db.collection("filmsCharacters");
  let dataPromise = collection.find({ character_id: +id }).toArray();
  dataPromise.then((films) => callback(films));
};

module.exports.findPlanetFilms = function (id, callback) {
  let collection = db.collection("filmsPlanets");
  let dataPromise = collection.find({ planet_id: +id }).toArray();
  dataPromise.then((planets) => callback(planets));
};

module.exports.findPlanetCharacters = function (id, callback) {
  let collection = db.collection("characters");
  let dataPromise = collection.find({ homeworld: +id }).toArray();
  dataPromise.then((planets) => callback(planets));
};
