import express, { Application } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { mongoDB } from '@configs/mongoDB'
import { usersRouter } from '@routes/usersRouter'
import { errorHandler } from '@middlewares/errorHandler'

class App {
  public express: Application

  public constructor () {
    dotenv.config({ path: './src/configs/config.env' })
    this.express = express()
    this.databases()
    this.middlewares()
    this.routes()
    this.express.use(errorHandler)
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    if (process.env.NODE_ENV === 'development') {
      this.express.use(morgan('dev'))
    }

    this.express.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
      next()
    })
  }

  private databases (): void {
    mongoDB()
  }

  private routes (): void {
    this.express.use('/', usersRouter)
  }
}

export { App }
