import Contact from 'App/Models/Contact'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Contact, ({ faker }) => {
  return {
    id: faker.number.int,
    phoneNumber: faker.phone.number
  }
}).build()
