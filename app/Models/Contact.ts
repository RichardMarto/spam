import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Message from './Message'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public phoneNumber: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Message, {
    pivotTable: 'messages_contacts'
  })
  declare messages: ManyToMany<typeof Message>
}
