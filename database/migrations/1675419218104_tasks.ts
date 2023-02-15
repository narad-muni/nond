import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'tasks'

    public async up () {
        this.schema.createTable(this.tableName, (table) => {
        table.increments('id')
        table.integer('assigned_to');
        table.integer('client_id');
        table.string('title');
        table.string('description');
        table.string('service');
        table.string('register');
        table.string('status');
        table.date('started');
        table.date('ended');
        })
    }

    public async down () {
        this.schema.dropTable(this.tableName)
    }
}
