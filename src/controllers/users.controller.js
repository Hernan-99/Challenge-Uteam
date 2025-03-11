const MOVIES_MAX_USERS = 5;

const data = {
  users: require("../models/users.model.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const getAllUsers = (req, res) => {
  const sortedUsers = [...data.users].sort((a, b) => {
    if (a["last-name"].toLowerCase() !== b["last-name"].toLowerCase()) {
      return a["last-name"].localeCompare(b["last-name"]);
    }
    return a["first-name"].localeCompare(b["first-name"]);
  });

  res.json(sortedUsers);
};

const createUser = (req, res) => {
  const {
    "first-name": firstname,
    "last-name": lastname,
    birthdate,
    "has-insurance": hasinsurance,
    "favourite-movies": favouritemovies,
  } = req.body;

  const newUser = {
    id: data.users[data.users.length - 1].id + 1 || 1,
    "first-name": firstname,
    "last-name": lastname,
    birthdate: birthdate,
    "has-insurance": hasinsurance,
    "favourite-movies": favouritemovies || [],
  };

  if (!firstname || !lastname || !birthdate || hasinsurance === undefined) {
    return res.status(400).json({
      message: "firstname, lastname, birthdate and hasinsurance are required",
    });
  }

  if (newUser["favourite-movies"].length > MOVIES_MAX_USERS)
    res.status(400).json({ message: "Exceeded limit for movies" });

  data.setUsers([...data.users, newUser]);
  res.status(201).json(data.users);
};

const updateAllDataUser = (req, res) => {
  const { id } = req.params;
  const {
    "first-name": firstname,
    "last-name": lastname,
    birthdate,
    "has-insurance": hasinsurance,
    "favourite-movies": favouritemovies,
  } = req.body;
  const user = data.users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: `User id ${id} not found` });
  }

  if (firstname) user["first-name"] = firstname;
  if (lastname) user["last-name"] = lastname;
  if (birthdate) user.birthdate = birthdate;
  if (hasinsurance !== undefined) user["has-insurance"] = hasinsurance;
  if (favouritemovies) user["favourite-movies"] = favouritemovies;

  const filterArr = data.users.filter((user) => user.id !== parseInt(id));

  const unsortedArr = [...filterArr, user];
  data.setUsers(
    unsortedArr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );
  res.json(data.users);
};

const updateParcialDataUser = (req, res) => {
  const { id } = req.params;
  const {
    "first-name": firstname,
    "last-name": lastname,
    birthdate,
    "has-insurance": hasinsurance,
    "favourite-movies": favouritemovies,
  } = req.body;
  const user = data.users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: `User id ${id} not found` });
  }

  if (firstname) user["first-name"] = firstname;
  if (lastname) user["last-name"] = lastname;
  if (birthdate) user.birthdate = birthdate;
  if (hasinsurance !== undefined) user["has-insurance"] = hasinsurance;
  if (favouritemovies) user["favourite-movies"] = favouritemovies;

  res.json(data.users);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const user = data.users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(400).json({ message: `User id ${id} not found` });
  }

  const filterArr = data.users.filter((user) => user.id !== parseInt(id));

  data.setUsers([...filterArr]);
  res.json(data.users);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = data.users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(400).json({ message: `User id ${id} not found` });
  }

  res.json(user);
};

const getUserByName = (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ message: "Name is required" });

  const foundUser = data.users.filter((user) =>
    user["first-name"].toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
  res.json(foundUser);
};

module.exports = {
  getAllUsers,
  createUser,
  updateAllDataUser,
  updateParcialDataUser,
  deleteUser,
  getUserById,
  getUserByName,
};
