// src/database/index.js
import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import User from "../app/models/User.js";
import Product from '../app/models/Products.js';
import Category from '../app/models/Category.js';

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize('postgresql://postgres:XiGXfSXmvFgByUitFUkyuOZhEaKsWadH@monorail.proxy.rlwy.net:10150/railway'); 
    models.map((model) => model.init(this.connection)).map(
      (model) => model.associate && model.associate(this.connection.models),
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:paOCioLjNbAWhzDQObhDziNptdAcFXUz@roundhouse.proxy.rlwy.net:34215',
    );
  }
}

export default new Database();
