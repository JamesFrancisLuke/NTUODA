app.accounts = {
    /*For the user accounts only login setup etc*/
    signUp: function (email, password) {
        /*Creates an account, if no errors*/
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
            app.components.showOnboarding(email);
            Materialize.toast('Created an Account for: ' + email, 4000);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            Materialize.toast(errorMessage, 4000);
        });
    },
    signIn: function (email, password) {
        /*Signs user in, if correct */
        firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
            app.components.removeOverlay('loading-cover');
            Materialize.toast('Welcome back ' + email, 4000);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            Materialize.toast(errorMessage, 4000);
        });
    },
    logOut: function () {
        /*Signs user out, if correct */
        firebase.auth().signOut().then(function () {
            window.location.reload(true);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            Materialize.toast(errorMessage, 4000);
        });
    },
    data: {
        /*For data manipulation*/
        onboardComplete: function () {
            /*For the Onboarding completion */
            console.log("Ran...");
            app.components.removeOverlay('loading-cover');
        }
    }
}
