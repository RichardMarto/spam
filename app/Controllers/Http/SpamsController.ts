import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Spam from 'App/Models/Spam'

export default class SpamsController {
    public async store({request}: HttpContextContract) {
    const body = request.body()
    const createSpam = {
        'content': body.content,
        'phoneNumber': body.phoneNumber
    }
    const tobeCreated: Spam = Spam.fromCreateSpam(createSpam)
    const spam: Spam = await Spam.create(tobeCreated)
    return spam
  }
}
