const {sequelize} = require('../sequelize_index')
const {Restaurant, Menu, MenuItem} = require('../index')

describe('Restaurant', () => {

    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })

    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'https://loginportal.funnyjunk.com/pictures/Gangsta_6a651e_120671.jpg'})
        const menu = await Menu.create({title: 'set 1'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        expect(menus[0].title).toBe('set 1');
    })

    test('menus have menuItems', async () => {
        const menu = await Menu.create({title: 'set 1'});
        const menuItem = await MenuItem.create({name: 'dino nuggets', price: 4});
        await menu.addMenuItem(menuItem);
        const menuItems = await menu.getMenuItems();
        expect(menuItems[0].name).toBe('dino nuggets');
    })
})