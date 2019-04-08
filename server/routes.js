
const api = require("./controller.js")

const bp = require("body-parser");

module.exports = function(app){

    
    app.use(bp.json());
    app.get('/products', api.allProducts);
    app.post('/products', api.makeProduct);
    app.get("/products/:id", api.getProduct);
    app.delete('/products/:id', api.deleteProduct);
    app.patch('/products/:id', api.updateProduct);
    return app;

}
