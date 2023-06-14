const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
select id, name, maker_id from car;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' : ' + data.maker_id);
		}
	});
});
