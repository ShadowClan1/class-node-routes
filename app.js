const express = require('express')
const BaseRouter = require('./BaseRouter')
const app = express()
const PORT = 5000
const routerBase = new BaseRouter();
app.use("/", routerBase.router)


app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`)
})