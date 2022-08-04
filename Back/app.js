const express = require("express")

const signRouter = require("./routes/signRouter")

const port = 8080

class App {
    constructor(){
        const app = express();
        this.setMiddleWare;
        this.setRouter;
        this.setErrorHandler;
    }
    setMiddleWare(){
        this.app.use(express.json);
        this.app.use(express.urlencoded({ extended : false}));
    }
    setRouter(){
        this.app.use("/sign");
    }
    setErrorHandler(){
        this.app.use(error404);
        this.app.use(error);
    }

}
new App()