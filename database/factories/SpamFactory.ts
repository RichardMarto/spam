import Spam from 'App/Models/Spam'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Spam, ({ faker }) => {
  return {
    'phoneNumber': faker.phone.number(),
    'content': faker.lorem.text()
  }
}).build()
