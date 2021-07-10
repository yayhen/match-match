import BestScores from '../../pages/best-score';

class Database {
  static openDatabase(score: number) {
    let db: IDBDatabase;
    const request = window.indexedDB.open('Yayhen', 1);

    request.onerror =  () => {
      
    };

    request.onsuccess = () => {
      db = request.result;
      const transaction = db.transaction('scores', 'readwrite');
      const store = transaction.objectStore('scores');
      const newScoreRecord = {
        score,
        date: new Date(),
      };
      const request2 = store.add(newScoreRecord);
      request2.onerror = function () {
        console.log('Error:', request2);
      };

      request2.onsuccess = () => {
        
      };
    };

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('accounts')) {
        const objectStore1 = db.createObjectStore('accounts', { autoIncrement: true });
      }
      if (!db.objectStoreNames.contains('scores')) {
        const objectStore2 = db.createObjectStore('scores', { autoIncrement: true });
      }
      
    };
  }

  static addNewPlayer(player: { firstName: string, lastName: string, email: string }) {
    let db: IDBDatabase;
    const request = window.indexedDB.open('Yayhen', 1);

    request.onerror = function (err) {
    };

    request.onsuccess = function (e) {
      db = request.result;
      const transaction = db.transaction('accounts', 'readwrite');
      const store = transaction.objectStore('accounts');
      const newPlayerRecord = player;
      const request2 = store.add(newPlayerRecord);
      request2.onerror = function () {
        
      };
      request2.onsuccess = function () {

      };
    };

    request.onupgradeneeded = function (event) {
      const db = request.result;
      if (!db.objectStoreNames.contains('accounts')) {
        const objectStore1 = db.createObjectStore('accounts', { autoIncrement: true });
      }
      if (!db.objectStoreNames.contains('scores')) {
        const objectStore2 = db.createObjectStore('scores', { autoIncrement: true });
      }
      
    };
  }

  static recordScore(player: { firstName: string, lastName: string, email: string }, score: number) {
    let db: IDBDatabase;
    const request = window.indexedDB.open('Yayhen', 1);

    request.onerror = function (err) {
      
    };

    request.onsuccess = function (e) {
      db = request.result;
      const transaction = db.transaction('scores', 'readwrite');
      const store = transaction.objectStore('scores');
      let newPlayerRecord: {
        firstName: string,
        lastName: string,
        email: string,
        score: number,
      };
      newPlayerRecord = {
        firstName: player.firstName,
        lastName: player.lastName,
        email: player.email,
        score,
      };
      const request2 = store.add(newPlayerRecord);
      request2.onerror = function () {
        
      };

      request2.onsuccess = function () {

      };
    };

    request.onupgradeneeded = function (event) {
      const db = request.result;
      if (!db.objectStoreNames.contains('scores')) {
        const objectStore1 = db.createObjectStore('scores', { autoIncrement: true });
      }
    };
  }

  static getScores() {
    let hiScores;
    let db: IDBDatabase;

    const request = window.indexedDB.open('Yayhen', 1);

    request.onerror = function (err) {
      
    };
    request.onsuccess = function () {
      db = request.result;
      try {
        const transaction = db.transaction(['scores'], 'readonly');
        const objectStore = transaction.objectStore('scores');
        const ob: IDBRequest<any[]> = objectStore.getAll();
        ob.onsuccess = function () {
          hiScores = ob.result;
          BestScores.highScoresRender(hiScores);
        };
      } catch {
        indexedDB.deleteDatabase('Yayhen');
        BestScores.highScoresRender([]);
      }
    };
  }
}

export default Database;
