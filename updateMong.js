const dbConnect = require('./dataConnectS');

const updataData = async () => {
    try {
        const collection = await dbConnect();
        const update = await collection.updateOne(
            { name: 'vivo' }, // Filter criteria
            { $set: { name: 'vivoooo' } } // Update operation
        );
        console.warn(update);
    } catch (error) {
        console.error("Error updating document:", error);
    }
};

updataData();
