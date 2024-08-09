import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Spam from 'App/Models/Spam'

export default class SpamsController {
    public async store({request}: HttpContextContract) {
    const body = request.body()
    const createSpam = {
        'content': body.content,
        'phoneNumber': body.phone_number
    }
    const tobeCreated: Spam = Spam.fromCreateSpam(createSpam)
    const spam: Spam = await Spam.create(tobeCreated)
    return spam
  }

  public async isSpam({params}: HttpContextContract) {
    const phoneNumber = params.phoneNumber
    const spams: Spam[] = await Spam.query().where('phone_number', phoneNumber)
    return { phone_number: phoneNumber, is_spam: (spams.length > 0) }
  }
}
