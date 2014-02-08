Node Memory Store
=================

Basic in-memory data store for Node.js intended for prototyping  
or... Memory Store to test Node.js apps without a DB

# Please Note!
This is intended for testing purposes only!  
It's best to use a proven data store to structure and persist real data  

Some choices:

- MySQL
- PostgreSQL
- MongoDB
- Redis
- CouchDB
- Riak
- HBase
- FoundationDB
- MariaDB

I'll try to make the query language more abstract in the future so migrating to one of the above databases becomes easier

# Usage

	// Example Usage
	// Returns all People matching Bob that are 31 or older

	// New Memory Store
	var people = require('memory_store.js')();

	// Insert Bob #1
	people.insert('an_id_for_bob', {
		name : 'Bob',
		age : 35
	});

	// Insert Bob's Son, Bob #2
	people.insert('another_id_for_bob', {
		name : 'Bob',
		age : 12
	});

	// Insert Rob, Bob's Older Brother
	people.insert('an_id_for_rob', {
		name : 'Rob',
		age : 45
	});

	// Get all People
	console.log('All People', people.get_all());

	// Query Memory Store
	var query_results = people.query({
		name : {
			operation	: '=',
			value		: 'Bob'
		},
		age : {
			operation	: '>=',
			value		: 31
		}
	});

	// Show Results
	console.log('Just people named Bob, 31 or older', query_results);
