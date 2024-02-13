const dbConnect = require('./dataConnectS');
const deleteData = async() => {
    const data =  await dbConnect();
    const del = await data.deleteMany({
    name:'oppo'
    });
    console.warn(del);
};
deleteData();