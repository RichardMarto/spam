import { test } from '@japa/runner'
import Spam from 'App/Models/Spam'
import SpamFactory from 'Database/factories/SpamFactory'

test.group('SpamsController', () => {
  test('store', async ({ client, assert }) => {
    const toBeCreated: Spam = await SpamFactory.create()
    console.log(toBeCreated.phoneNumber)
    const response = await client.post('/spams').json(JSON.stringify(toBeCreated))
    const spam = response.body()
    response.assertStatus(200)
    assert.exists(spam.id)
    assert.equal(toBeCreated.phoneNumber, spam.phone_number)
    assert.equal(toBeCreated.content, spam.content)
  })
})
