const { Favorite } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    //await Favorit.destroy() --> asi solo eliminamos toda la base de datos!!

    await Favorite.destroy({
      where: {
        id,
      },
    });

    const allFavorites = await Favorite.findAll();
    return res.json(allFavorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
