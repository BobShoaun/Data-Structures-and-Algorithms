// hash table using open addressing, linear probing
class HashTable {
	constructor(hashFunction) {
		this.hashFunction = hashFunction;
		this.array = [];
	}

	insert(key) {
		let index = this.hashFunction(key);
		while (this.array[index] != null) index++;
		this.array[index] = key;
	}

	search(key) {
		let index = this.hashFunction(key);

		while (this.array[index] != key) {
      // console.log(this.array[index]);
			if (this.array[index] == null) throw Error("key not found");
			index++;
		}
    return key;
	}
}

let hashTable = new HashTable(key => key % 7);

hashTable.insert(1);
hashTable.insert(9);
hashTable.insert(3);
hashTable.insert(10);
hashTable.insert(22);
hashTable.insert(15);
// console.log(hashTable.array.length)

console.log(hashTable.search(22));

