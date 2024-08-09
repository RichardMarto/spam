import { test } from '@japa/runner'

test.group('SpamsController', () => {
  test('store', async ({ client, assert }) => {
    const toBeCreated = {
      content: 'Thats a saple content.',
      phone_number: '+55(11)999999999',
    }
    const response = await client.post('/spams').json(JSON.stringify(toBeCreated))
    const spam = response.body()
    response.assertStatus(200)
    assert.exists(spam.id)
    assert.equal(toBeCreated.phone_number, spam.phone_number)
    assert.equal(toBeCreated.content, spam.content)
  })
})
