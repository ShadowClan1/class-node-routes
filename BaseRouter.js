const express = require("express");

const middleWare = (req, res, next) =>{
    console.log("i'm middle ware");
    next();
}

class BaseRouter {
  constructor() {
    this.router = express.Router();
    // this.
    this.routes = {
      "/": [{ method: "get", cb: this.test, mw : [middleWare] }],
    };
    this.registerRoutes();
  }

  async test(req, res) {
    try {
      res.status(200).json({ success: true, message: "I'm On" });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }



  }

  registerRoutes(){
    Object.keys(this.routes).forEach((route)=>{
        let handlers = this.routes[route];
        if(!handlers || !Array.isArray(handlers)) return;

        for(let handler of handlers ){
            if(handler.middleWare.length > 0){
                this.router[handler.method]
            }
else this.router[handler.method](route, handler.cb)
console.log(route + " ==> ", handler.method)
        }

    })
  }
}


var wrap =(fn) => (req, res, next) => fn(req, res, next).catch()

module.exports = BaseRouter