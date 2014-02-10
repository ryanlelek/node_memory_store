
'use strict';

module.exports = function () {

	// Memory Store
	var collection = {};

	return {

		insert : function (key, value) {
			collection[key] = value;
			return true;
		},

		remove : function (key) {
			delete collection[key];
			return true;
		},

		exists : function (key) {
			if (collection.hasOwnProperty(key)) {
				return true;
			} else {
				return false;
			}
		},

		get_by_id : function (key) {
			return collection[key];
		},

		get_all : function () {

			var array_to_return = [];

			for (var key in collection) {
				if (collection.hasOwnProperty(key)) {
					array_to_return.push(collection[key]);
				}
			}

			return array_to_return;

		},

		query : function (query_object) {

			var key;
			var matched_records = [];

			// Loop through Collection
			for (key in collection) {
				if (collection.hasOwnProperty(key)) {

					// Alias Current Record
					var record = collection[key];

					// Matches by Default
					var matched = true;

					// With each record, see if it matches query value
					for (var property in query_object) {
						if (query_object.hasOwnProperty(property)) {

							// Alias Current Query
							var query = query_object[property];

							switch (query.operation) {
								case '=':
									if (record[property] === query.value) { break; }
									matched = false;
									break;
								case '<':
									if (record[property] < query.value) { break; }
									matched = false;
									break;
								case '>':
									if (record[property] > query.value) { break; }
									matched = false;
									break;
								case '>=':
									if (record[property] >= query.value) { break; }
									matched = false;
									break;
								case '<=':
									if (record[property] <= query.value) { break; }
									matched = false;
									break;
								default:
									matched = false;
									break;
							}

						}
					}

					// Add if all matched
					if (matched === true) {
						matched_records.push(collection[key]);
					}

				}
			}

			// Done
			return matched_records;

		}

	};
 
};