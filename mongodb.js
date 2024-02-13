const getData = require('./dataConnectS');
const main = async () => {
    let data = await getData();
    data = await data.find().toArray();
    console.warn(data);
};
main();