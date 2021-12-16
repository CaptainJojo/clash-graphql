import { SQLDataSource } from 'datasource-sql';

export class IngredientDataSource extends SQLDataSource {
  getIngredients() {
    console.info('getIngredients called');
    return this.knex.select('*').from('ingredient');
  }

  getById(id) {
    console.info('getById called');
    return this.knex.select('*').from('ingredient').where('id', id).limit(1);
  }
}
