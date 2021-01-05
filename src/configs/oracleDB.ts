import { createConnection } from 'typeorm'
import { UserOracle } from '@models/UserOracle'

const oracleDB = async () => {
  const conn = await createConnection({
    name: 'default',
    type: 'oracle',
    host: process.env.ORACLE_HOST,
    port: parseInt(process.env.ORACLE_PORT),
    username: process.env.ORACLE_USERNAME,
    password: process.env.ORACLE_PASSWORD,
    database: process.env.ORACLE_PASSWORD,
    sid: process.env.ORACLE_SID,
    entities: [UserOracle],
    cli: {
      migrationsDir: 'src/migrations',
      subscribersDir: 'src/subscribers',
      entitiesDir: 'src/entities'
    }
  })

  console.log(`OracleDB Connected: ${conn.isConnected}`)
}

export { oracleDB }
