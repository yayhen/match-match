class Database {

  static openDatabase(score: number) {
    var db: IDBDatabase;
    var request = window.indexedDB.open("Yayhen", 1);

    request.onerror = function(err) {
      console.log('error', err);
    };

    request.onsuccess = function(e) {
      db = request.result;
      console.log('success', db);
      var transaction = db.transaction('highScores', 'readwrite');
      var store = transaction.objectStore('highScores');
      var newScoreRecord = {
        score: score,
        date: new Date(),
      }
      console.log(newScoreRecord);
      var request2 = store.add(newScoreRecord);
      request2.onerror = function() {
        console.log("Error:", request2);
      }
   
      request2.onsuccess = function() {
        console.log("record success", request2);
      }
    };
    

    request.onupgradeneeded = function(event) {
      var db = request.result;
      if(!db.objectStoreNames.contains('accounts')) {
        var objectStore1 = db.createObjectStore("accounts", { autoIncrement: true});
      }
      if(!db.objectStoreNames.contains('highScores')) {
        var objectStore2 = db.createObjectStore("highScores", { autoIncrement: true});
      }
      console.log('upgrade', db);
    };
    //return db;

  }

  // static addScoreToDatabase(score: number) {
  //   var db = this.openDatabase();
  //   var transaction = db.transaction('highScores', 'readwrite');
  //   var store = transaction.objectStore('highScores');
  //   var newScoreRecord = {
  //     score: score,
  //     date: new Date(),
  //   }
  //   var request = store.add(newScoreRecord, 1);
 
  //   request.onerror = function(e) {
  //     console.log("Error:", request.error?.name);
  //   }
 
  //   request.onsuccess = function(e) {
      
  //   }
  // }
}

export default Database