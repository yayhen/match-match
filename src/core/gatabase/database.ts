import BestScores from "../../pages/best-score";

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
      var transaction = db.transaction('scores', 'readwrite');
      var store = transaction.objectStore('scores');
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
      if(!db.objectStoreNames.contains('scores')) {
        var objectStore2 = db.createObjectStore("scores", { autoIncrement: true});
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
      if(!db.objectStoreNames.contains('scores')) {
        var objectStore2 = db.createObjectStore("scores", { autoIncrement: true});
      }
      //console.log('upgrade', db);
    };
  }

  static recordScore(player: {firstName: string, lastName: string, email: string}, score: number) {
    var db: IDBDatabase;
    var request = window.indexedDB.open("Yayhen", 1);

    request.onerror = function(err) {
      console.log('error', err);
    };

    request.onsuccess = function(e) {
      db = request.result;
      var transaction = db.transaction('scores', 'readwrite');
      var store = transaction.objectStore('scores');
      var newPlayerRecord: {
        firstName: string,
        lastName: string,
        email: string,
        score: number,
      };
      newPlayerRecord = {
        firstName: player.firstName,
        lastName: player.lastName,
        email: player.email,
        score: score,
      }
      var request2 = store.add(newPlayerRecord);
      request2.onerror = function() {
        console.log("Error:", request2);
      }
   
      request2.onsuccess = function() {
        
      }
    };
    
    request.onupgradeneeded = function(event) {
      var db = request.result;
      if(!db.objectStoreNames.contains('scores')) {
        var objectStore1 = db.createObjectStore("scores", { autoIncrement: true});
      }
    };
  }

  static getScores() {
    var hiScores;
    var db: IDBDatabase;
    var request = window.indexedDB.open("Yayhen", 1);
    
    request.onerror = function(err) {
      console.log('error', err);
    };
    request.onsuccess = function() {
      db = request.result;
      var transaction = db.transaction(["scores"], "readonly");
      var objectStore = transaction.objectStore("scores");
      
      var ob: IDBRequest<any[]> = objectStore.getAll();
      ob.onsuccess = function() {
        hiScores = ob.result;
        BestScores.highScoresRender(hiScores);
      }

    }
  }

}

export default Database