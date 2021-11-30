const {sequelize} = require('../sequelize_index');
const {MenuItem} = require('../Model/MenuItem')

describe('MenuItem', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a MenuItem', async () => {
        const MenuItem = await MenuItem.create({ title: 'Breakfast' })
        expect(MenuItem.id).toBe(1)
    })
})