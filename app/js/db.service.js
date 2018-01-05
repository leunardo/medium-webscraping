app.factory('dbService', dbService);

function dbService(firebaseInit) {
    const firebase = firebaseInit.getFirebaseApp();
    const db = firebase.database();

    return {
        getDataFrom: (document, callback) => {
            db.ref(document)
                .once('value')
                .then(snapshot => callback(snapshot));
        }
    }
}
