import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Spam extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public phoneNumber: string
  
  @column()
  public content: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static fromCreateSpam(createSpam: {content: string, phoneNumber: string}) {
    return new Spam().merge(createSpam)
  }
}
