const mariadb = require('mariadb');
/* create a connection pool */
const pool = mariadb.createPool({
     host: '127.0.0.1', 
     user:'root', 
     password: 'root',
     database: 'transaction_bd',
     connectionLimit: 5
});
async function processDatabase() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT * from transaction");
	//console.log(rows); 
  /* Building transaction id set (i.e.: a set with unique
    transaction ids) 
  */
  transactions = new Set();
  for (r in rows){
    console.log(rows[r]);
    if (!transactions.has(rows[r]['id'])){
      transactions.add(rows[r]['id']);
    }
  }
  console.log("Transaction ids:");
  console.log(transactions);
  //console.log(transactions.length)
  //Building a list of products per transaction
  var list_of_transactions = [];
  var set_item = 0;
  transactions.forEach((e) =>{
    list_of_transactions.push(new Set());
    for (y=0; y< rows.length; ++y){   
      if (rows[y]["id"] == e){
        produto = rows[y]["product"];
        list_of_transactions[set_item].add(produto);
      }  
    } 
    set_item += 1;
  });
  console.log(list_of_transactions); 
  } catch (err) {
	throw err;
  } finally {
	if (conn) return conn.end();
  }
}

processDatabase();



 


