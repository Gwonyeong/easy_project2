const express = require("express")

const indexRouter = require("./routes")
const {error404, error} = require("./middlewares/error")
const app = express();
app.use(express.json);

class App {
    constructor(){
        this.app = express();
        this.setMiddleWare();
        this.setRouter();
        // this.setErrorHandler();
        
    }
    setMiddleWare(){
        
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended : false}));
    }
    setRouter(){
        
        
        this.app.use("/", indexRouter);
        
    }
    setErrorHandler(){
        
        this.app.use(error404);
        this.app.use(error);
    }
   

}
module.exports = new App().app
