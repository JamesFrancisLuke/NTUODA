app.accounts = {
    /*For the user accounts only login setup etc*/
    signUp: function (email, password) {
        /*Creates an account, if no errors*/
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
            app.accounts.getUserData();
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
            app.accounts.getUserData();
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
    getUserData: function () {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                app.tempData = {};
                app.tempData.user = user;
                $(".OTP-email").text(user.email);
            } else {
                window.location.reload(true);
            }
        });
    },
    data: {
        /*For data manipulation*/
        onboardComplete: function () {
            /*For the Onboarding completion */
            var skills = {
                web: 10 //NEED TO CALCULATE THE SKILLS FOR THIS. (LOTS OF IF STATEMENTS ETC)
            }
            firebase.database().ref('users/' + app.tempData.user.uid).set({
                userId: app.tempData.user.uid,
                email: app.tempData.user.email,
                skills: skills
            });
            console.log("Ran...");
            app.components.removeOverlay('loading-cover');
        }
    }
}
