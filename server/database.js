const MongoClient = require('mongodb').MongoClient;

class DataBase {
	constructor() {
		this.url = "mongodb://localhost:27017/FORM_APP";
	}

	connect() {
		return MongoClient.connect(this.url, (err, db) => {
				if (err) throw err;
				console.log("Database connected!");
				return db.db('FORM_APP');
			}
		);
	}

	disconnect() {
		return MongoClient.disconnect(this.url, (err, db) => {
				if (err) throw err;
				console.log("Database disconnected!");
				return db;
			}
		);
	}

	createCollection(name) {
		const db = this.connect();
		return db.createCollection(name, (err, res) => {
			if (err) throw err;
			console.log(`Collection ${name} created!`);
			db.close();
			return res;
		});
	}

	getCollection(name) {
		const db = this.connect();
		return db.getCollection(name);
	}
}

export default new DataBase();