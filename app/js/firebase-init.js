document.getFirebaseApp = function() {
    try {
        if (!firebase.app())
            throw "Firebase not available";
        
        return firebase.app();
    } catch (e) {
        console.log(e);
    }
}
