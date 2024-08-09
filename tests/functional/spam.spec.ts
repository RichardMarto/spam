import { test } from '@japa/runner'
import Spam from 'App/Models/Spam'

test.group('SpamsController', () => {
  const phoneNumber = '+55(11)999999999'
    const toBeCreated = {
    content: 'That\'s a sample content.',
    phone_number: phoneNumber,
  }
  test('create_withoutAnExistingContact', async ({ client, assert }) => {
    const response = await client.post('/spams').json(JSON.stringify(toBeCreated))
    const body = response.body()
    const queriedSpams = Spam.query().where(toBeCreated)
    response.assertStatus(200)
    assert.exists(body.id)
    assert.equal(toBeCreated.content, body.content)
    assert.notEmpty(queriedSpams)
  })
  test('create_withAnExistingContact', async ({ client, assert }) => {
    const response = await client.post('/spams').json(JSON.stringify(toBeCreated))
    const body = response.body()
    const queriedSpams = Spam.query().where(toBeCreated)
    response.assertStatus(200)
    assert.exists(body.id)
    assert.equal(toBeCreated.content, body.content)
    assert.notEmpty(queriedSpams)
  })
  test('show', async ({ client, assert }) => {
    const response = await client.get(`/spams/${phoneNumber}`)
    const body = response.body()
    assert.isTrue(body.is_spam)
    assert.equal(phoneNumber, body.phone_number)
  })
})
