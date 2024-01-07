import mongoose from 'mongoose'
import UserMongoDao from '../daos/mongo/user.mongo.dao.js'
import Assert from 'assert'
import connectMongoDB from '../config/configMongoDB.js'
import Chai from 'chai'
import Supertest from 'supertest'

mongoose.connect(config.mongoDB.URL);

const assert = Assert.strict
const expect = Chai.expect
const requester = Supertest('http://localhost:3000')

describe('Testing User DAO', () => {
   before(function () {
      this.usersDAO = new UserMongoDao()
   
   })




})