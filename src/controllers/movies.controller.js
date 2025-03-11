const PELIS_MAX_USUARIOS = 5;

const data = {
  usuarios: require("../models/users.model.json"),
  setUsuarios: function (data) {
    this.usuarios = data;
  },
};

const getMoviesByUser = (req, res) => {
  const { id } = req.params;
  const usuario = data.usuarios.find((user) => user.id === parseInt(id));

  if (!usuario) {
    return res.status(404).json({ message: `User id ${id} not found` });
  }

  res.json(usuario["favourite-movies"]);
};

const createMovieToUser = (req, res) => {
  const { id } = req.params;
  const { title, genre } = req.body;

  if (!title || !genre) {
    return res.status(400).json({ message: `Title an genre are required` });
  }

  const usuario = data.usuarios.find((user) => user.id === parseInt(id));

  if (!usuario) {
    return res.status(404).json({ message: `User id ${id} not found` });
  }

  if (usuario["favourite-movies"].length >= PELIS_MAX_USUARIOS) {
    return res
      .status(400)
      .json({ message: "Alcanzaste el maximo de peliculas" });
  }
  usuario["favourite-movies"].push({ title, genre });
  res.json(usuario);
};

const deleteMovieFromUser = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const usuario = data.usuarios.find((user) => user.id === parseInt(id));

  if (!usuario) {
    return res.status(404).json({ message: `User id ${id} not found` });
  }

  usuario["favourite-movies"] = usuario["favourite-movies"].filter(
    (movie) => movie.title !== title
  );

  res.json(usuario);
};

module.exports = { getMoviesByUser, createMovieToUser, deleteMovieFromUser };
