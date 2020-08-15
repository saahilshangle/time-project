const { MongoClient } = require('mongodb');
const dblist = [];

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    
    const uri = "mongodb+srv://test-1:testing-only@cluster0-saiku.mongodb.net/sample-airbnb?retryWrites=true&w=majority";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
     */
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);
        
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
        
    }
}

function writeTest() {
    return dblist.toString();
}

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    for (i = 1; i < dblist.length; i++) {
        dblist.pop();
    }
    console.log("Databases:");
    console.log(databasesList.databases);
    databasesList.databases.forEach(db => dblist.push(` - ${db.name}`));
};

module.exports = { main, writeTest };
