const {sequelize} = require('../sequelize_index');
const {Restaurant} = require('../Model/Restaurant')
const {Menu} = require('../Model/Menu')


describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({ name: 'Ronalds', image: 'https://loginportal.funnyjunk.com/pictures/Gangsta_6a651e_120671.jpg' })
        expect(restaurant.id).toBe(1)
    })

    // test('restaurants have menus', async () => {
    //     const restaurant = await Restaurant.create({name: 'Ronalds', image: 'https://loginportal.funnyjunk.com/pictures/Gangsta_6a651e_120671.jpg'})
    //     const menu = await Menu.create({title: 'set 1'});
    //     console.log("inside test:", menu)
    //     await restaurant.addMenu(menu);
    //     const menus = await restaurant.getMenus();
    //     expect(menus[0].title).toBe('set 1');
    // })
})