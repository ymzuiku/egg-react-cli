'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let res = await this.ctx.service.user.insertOne()
    this.ctx.body = 'hi, egg'+ JSON.stringify(res);
  }
}

module.exports = HomeController;

