const dbConnect = require('./dataConnectS');

const insert = async () => {
    const collection = await dbConnect(); // Call dbConnect to get the collection
    try {
        const add = await collection.insertOne({name:'oppo', id:'122222', price:'345456'});
        console.log(add);
      
    } catch (error) {
        console.error("Error inserting document:", error);
    }
};

insert();
