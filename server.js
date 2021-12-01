// Express stuff
const express = require("express");
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const server = express(); // create our web server
const port = 3000; // local address of our server
const handlebars = expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
});

// Import models
const { Restaurant, Menu, MenuItem } = require("./Model");

// Import seed
const seed = require("./seed");

// serve static assets from the public/ folder
server.use(express.static("public"));

//Configures handlebars library to work well w/ Express + Sequelize model

//Tell this express app we're using handlebars
server.engine("handlebars", handlebars);
server.set("view engine", "handlebars");

server.use(express.urlencoded({ extended: true }));
// support the parsing of incoming requests with json payloads
server.use(express.json());

seed();

// Test
server.get("/", (req, res) => {
  console.log("hello");
  res.send("Hi");
});

// November 29th Assignment:
/* ----- READ ----- */
// Get all restaurants
server.get("/restaurants", async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.render("restaurants", { restaurants });
});

server.post("/restaurants", async (req, res) => {
  const test = await Restaurant.create(req.body)
  console.log(test)
  res.redirect(`/restaurants/${test.id}`)
});

// this route returns HTML for a single restaurant
// Get one restaurant
server.get("/restaurants/:id", async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);
  res.render("restaurant", { restaurant });
});

// Get menus from restaurant
server.get("/restaurants/:id/menus", async (req, res) => {
  const id = req.params.id;
  const menus = await Menu.findAll({
    where: {
      restaurant_id: id,
    },
  });

  const restaurant = await Restaurant.findByPk(id);

  res.render("menus", { menus, restaurant });
});

// Get selected menu from restaurant
server.get("/restaurants/:id/menus/:menuid", async (req, res) => {
  const id = req.params.id;
  const menuid = req.params.menuid;
  const menu = await Menu.findByPk(menuid);

  const menuItems = await MenuItem.findAll({
    where: {
      menu_id: menuid,
    },
  });
  const restaurant = await Restaurant.findByPk(id);

  res.render("menuitem", { menu, menuItems, restaurant });
});

server.listen(port, () => {
  console.log("We solved it!");
});
