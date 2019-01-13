import DataBase from '../server/database';

export class CollectionPesquisas {
	constructor() {
		DataBase.createCollection('pesquisas');
		this.collection = DataBase.getCollection('pesquisas');
	}

	findOne(search) {
		return this.collection.findOne(search);
	}

	findAll(search) {
		return this.collection.find(search).fetch();
	}

	upsert({ id, ...pesquisa }) {
		if (id) {
			return this.collection.update(id, pesquisa);
		}
		return this.collection.insertOne(pesquisa);
	}

	remove(id) {
		return this.collection.remove(id);
	}
}