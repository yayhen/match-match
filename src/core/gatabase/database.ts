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
  }

  static addNewPlayer(player: {firstName: string, lastName: string, email: string}) {
    var db: IDBDatabase;
    var request = window.indexedDB.open("Yayhen", 1);

    request.onerror = function(err) {
      console.log('error', err);
    };

    request.onsuccess = function(e) {
      db = request.result;
      var transaction = db.transaction('accounts', 'readwrite');
      var store = transaction.objectStore('accounts');
      var newPlayerRecord = player;
      var request2 = store.add(newPlayerRecord);
      request2.onerror = function() {
        console.log("Error:", request2);
      }
   
      request2.onsuccess = function() {
        //console.log("record success", request2);
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
      //console.log('upgrade', db);
    };
  }

}

export default Database