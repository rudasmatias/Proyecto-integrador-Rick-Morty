let myFavorites = [];
const postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const deleteCharacter = myFavorites.filter(
    (character) => Number(character.id) !== Number(id)
  );
  myFavorites = deleteCharacter;
  console.log(myFavorites);
  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
