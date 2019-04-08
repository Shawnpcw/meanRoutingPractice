const xp = require("express");
const path = require('path');
const bp = require('body-parser')
const router = require("./server/routes.js");



const app = xp();
app.use(xp.static( __dirname + '/client/dist/client' ));


router(app)
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });   
app.listen(8000, (errs)=>console.log(errs?errs:'gucci'));

