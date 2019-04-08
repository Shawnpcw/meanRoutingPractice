
const Product = require("./models.js")

module.exports ={
    allProducts: (req,res)=>Product.find({})
                                .then(data=>console.log(data)||res.json(data))
                                .catch(errs=>res.json(errs)),

    getProduct: (req,res)=>Product.findById(req.params.id)
                                .then(data=>console.log(data)||res.json(data))
                                .catch(errs=>console.log(errs)||res.json(errs)),
                                                            
    makeProduct: (req,res)=>{
        Product.create(req.body)
                                .then(data=>{
                                    console.log(req.body,'jkdflkasdjf')
                                    console.log(data,req.body)
                                    res.json(data)
                                })
                                .catch(errs=>console.log(errs)||res.json(errs))
                                console.log(req.body)
                            },

    deleteProduct: (req,res)=>Product.findByIdAndRemove(req.params.id)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    updateProduct: (req,res)=>Product.findByIdAndUpdate(req.params.id, req.body)
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),
    

  
    
}