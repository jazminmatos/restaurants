const {sequelize} = require('../sequelize_index')
const {Customer} = require('../Model/customer')

describe('Customer', () => {
    beforeAll(async () => {
        await sequelize.sync({force: true})
    })

    test('can create a customer', async () => {
        const customer = await Customer.create({name: 'Hernan'})
        expect(customer.id).toBe(1)
    })
})