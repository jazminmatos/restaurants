const path = require("path");
const fs = require("fs").promises;

//access to our model and database
const { db } = require("./sequelize_index");
const { Restaurant, Menu, MenuItem } = require("./Model");

//define our seed function
const seed = async () => {
  //clear out our table
  await db.sync({ force: true });

  //find the path to our json file
  const seedPath = path.join(__dirname, "db.json");

  const buffer = await fs.readFile(seedPath);
  const { restuarants, menus, menuItems } = JSON.parse(String(buffer));

  //will create each row for our Music Table
  const restuarantPromises = restuarants.map((restaurant) =>
    Restaurant.create(restaurant)
  );
  const menuPromises = menus.map((menu) => Menu.create(menu));
  const menuItemPromises = menuItems.map((item) => MenuItem.create(item));

  await Promise.all(restuarantPromises);
  await Promise.all(menuPromises);
  await Promise.all(menuItemPromises);

  console.log("restuarant data has been successfully populated into our table");
};

//export this seed function
module.exports = seed;
