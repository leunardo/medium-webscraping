app.factory('dbService', dbService);

function dbService(firebaseInit) {
    const firebase = firebaseInit.getFirebaseApp();
    const db = firebase.database();

    return {
        getDataFrom: async (document) => {
            let data = await db.ref(document).once('value');
            return data;                
        }
    }
}
