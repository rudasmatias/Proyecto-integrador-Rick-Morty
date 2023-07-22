//promises
/* const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id} `)
    .then((response) => response.data)
    .then((data) => {
      let obj = {
        id: data.id,
        name: data.name,
        image: data.image,
        gender: data.gender,
        species: data.species,
        status: data.status,
        origin: data.origin,
      };
      res
        .writeHead(200, { "Content-type": "aplication/json" })
        .end(JSON.stringify(obj));
    })
    .catch((error) =>
      res.writeHead(500, { "Content-type": "text/plain" }).end(error.message)
    );
};

module.exports = getCharById;
 */

const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  //res.send("hola, estoy en getchar");

  try {
    const { id } = req.params;

    const { name, gender, image, origin, species, status } = (
      await axios(`${URL}${id}`)
    ).data;

    const character = {
      id,
      name,
      gender,
      image,
      status,
      origin,
      species,
    };

    return character
      ? res.status(200).json(character)
      : res.status(404).send("Character not found");

    /*     .then(({ data }) => {
      const { id, status, name, species, origin, image, gender } = data;
      const character = { id, status, name, species, origin, image, gender };

      return character
        ? res.status(200).json(character)
        : res.status(404).send("Not found");
    }); */
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;
