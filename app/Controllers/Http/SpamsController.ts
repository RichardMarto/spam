import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contact from 'App/Models/Contact'
import Message from 'App/Models/Message'

export default class SpamsController {
  public async store({request}: HttpContextContract) {
    const body = request.body()
    const createSpam: { content: string, phoneNumber: string } = {
        'content': body.content,
        'phoneNumber': body.phone_number
    }
    const messageToBeCreated = {
      content: createSpam.content
    }
    const contactToBeCreated = {
      phoneNumber: createSpam.phoneNumber
    }
    const message = await Message.firstOrCreate(messageToBeCreated)
    console.log('message', message)
    const contact = await Contact.findBy('phoneNumber', createSpam.phoneNumber)
    console.log('contact', contact)
    if (contact === null) {
      const ifContact = await message.related('contacts').create(contactToBeCreated)
    } else {
      const elseContact = message.related('contacts').attach([contact.id])
    }
    return message
  }

  public async isSpam({params}: HttpContextContract) {
    const phoneNumber = params.phoneNumber
    const contact = await Contact.findBy('phoneNumber', phoneNumber)
    console.log('\nfindBy: ', contact, '\n')
    return { phone_number: phoneNumber, is_spam: !(contact === null) }
  }
}
