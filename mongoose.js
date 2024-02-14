const { MongoServerClosedError } = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mart');
const productSchema = new mongoose.Schema({
    name: String,
    price:Number,
    id:Number   
});

const insertInDb= async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({ name: 'gioeinee' });
    let result = await data.save();
    console.log(result);
}
const updateInDb = async()=>{
    const productModel= mongoose.model('products',productSchema);
    let data =await productModel.updateOne({name:'apple'},{$set:{price:'340000'}});
    console.log(data);
}
const deleteIndb= async()=>{
    const productModel = mongoose.model('products',productSchema);
    let data = await productModel.deleteOne({name:'gioeinee'});
    console.log(data);
}
const findIndb=async()=>{
    const productModel= mongoose.model('prodcuts',productSchema);
    let data = await productModel.find();
    console.log(data);
}
findIndb();