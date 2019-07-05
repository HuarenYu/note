var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');

/* db.serialize(function() {
  db.run(`
  CREATE TABLE THREAD
  (ID INTEGER PRIMARY KEY   AUTOINCREMENT,
  TITLE           TEXT    NOT NULL,
  LINK            TEXT     NOT NULL);
  `);
  console.log('create table success!')
});
 */
db.each("SELECT count(*) FROM THREAD WHERE TITLE", function(err, row) {
    console.log(row);
});
db.close();