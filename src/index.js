const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares nativos
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/", require("./routes/users.route.js"));
app.use("/", require("./routes/movies.route.js"));

app.listen(PORT, () => {
  `Srvidor corriento en el puerto ${PORT}`;
});
