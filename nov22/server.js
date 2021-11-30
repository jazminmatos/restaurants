const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const database = require('./db.json')

const server = express(); // create our web server
const port = 3000; // local address of our server
// const {check, validationResult} = require('express-validator');

// serve static assets from the public/ folder
server.use(express.static('public'))

//Configures handlebars library to work well w/ Express + Sequelize model
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

//Tell this express app we're using handlebars
server.engine('handlebars', handlebars)
server.set('view engine', 'handlebars')

server.use(express.urlencoded({ extended: true }));
// support the parsing of incoming requests with json payloads
server.use(express.json());

const {Restaurant, Menu, MenuItem} = require('./index')

const seedDb = async () => {
    const dbPromises = database.data.map(item => Restaurant.create(item))
    await Promise.all(dbPromises)
    console.log('db has been populated')
}
seedDb()

// Test
server.get('/', (req, res) => {
    console.log("hello")
    res.send('Hi')
})

// Assignment #1: flipcoin
// server.get('/flipcoin', (req, res) => {
//     console.log("Coin Flip")
//     const random = (Math.floor(Math.random() * 2) === 0)
//     console.log(random)
//     res.send(random ? "<p>heads</p>" : "<p>tails</p>")
// })

// Assignment #2: restaurants
// server.get('/restaurants', async (req, res) => {
//     let restaurants = await Restaurant.findAll()
//     console.log(restaurants)
//     res.json({restaurants})
// })

// November 23rd Assignment:
// server.get('/restaurants/:id', async (req, res) => {
//     let id = req.params.id 
//     let restaurant = await Restaurant.findByPk(id, {include: Menu, MenuItems})
//     res.json({restaurant})
// })

// November 29th Assignment:
server.get('/web/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll()
    res.render('restaurants', { restaurants })
})

// this route returns HTML for a single restaurant
server.get('/web/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.render('restaurant', { restaurant })
})

server.listen(port, () => {
    console.log('We solved it!')
})