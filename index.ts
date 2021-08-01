import { someString } from './utils'
import { Knex, knex } from 'knex'
const words = someString()
console.log(words)

export function say() {
  return words
}

export async function checkDB() {
  interface User {
    id: number
    name: string
  }

  const config: Knex.Config = {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5430,
      user: 'monkey_user',
      password: 'monkey_pass',
      database: 'monkey_db'
    }
  }

  const knexInstance = knex(config)

  try {
    const users = await knex<User>('users').select('id', 'name')
  } catch (err) {
    // error handling
  }
}
