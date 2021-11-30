const {sequelize} = require('../sequelize_index');
const {Menu} = require('../Model/Menu')
const {Restaurant} = require('../Model/Restaurant')


describe('Menu', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Menu', async () => {
        const restaurant = await Restaurant.create({ name: "Mama", image: "ms.com/logo"})
        const menu = await Menu.create({ title: 'Breakfast'})
        expect(menu.id).toBe(1)
    })

    test('Menus have restaurant_id', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        const menu = await Menu.create({title: 'set 1'});
        console.log("inside test:", menu)
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        expect(menus[0].title).toBe('set 1');
    })
})