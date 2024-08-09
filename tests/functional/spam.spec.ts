import { test } from '@japa/runner'
import Spam from 'App/Models/Spam'

test.group('SpamsController', () => {
  test('store', async ({ client, assert }) => {
    const toBeCreated = {
      content: 'Thats a saple content.',
      phone_number: '+55(11)999999999',
    }
    const response = await client.post('/spams').json(JSON.stringify(toBeCreated))
    const spam = response.body()
    const queriedSpams = Spam.query().where(toBeCreated)
    response.assertStatus(200)
    assert.exists(spam.id)
    assert.equal(toBeCreated.phone_number, spam.phone_number)
    assert.equal(toBeCreated.content, spam.content)
    assert.notEmpty(queriedSpams)
    
  })
  test('show', async ({ client, assert }) => {
    const phoneNumber = '+55(11)999999999'
    const response = await client.get(`/spams/${phoneNumber}`)
    const body = response.body()
    console.log('body', body)
    console.log('phoneNumber', phoneNumber)
    assert.isTrue(body.is_spam)
    assert.equal(phoneNumber, body.phone_number)
  })
})
