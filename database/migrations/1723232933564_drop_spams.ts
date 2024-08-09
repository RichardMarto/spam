import Database from '@ioc:Adonis/Lucid/Database'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'spams'

  public async up () {
    this.schema.dropTable(this.tableName)
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}
