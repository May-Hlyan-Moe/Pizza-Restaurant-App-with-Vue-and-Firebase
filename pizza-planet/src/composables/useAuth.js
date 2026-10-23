import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { ref } from "vue";
import { app } from "@/firebase";

const signInModelOpen = ref(false);

export default function useAuth () {
    const auth = getAuth(app);
    const errorMessage = ref("");
    const userData = ref(null);

    async function signUp(email, password) {
        if (!email) return errorMessage.value = "Please enter a valid email.";
        if (!password) return errorMessage.value = "Please enter a password.";
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            errorMessage.value = "";
            signInModelOpen.value = false;
        } 
        catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    errorMessage.value = "A user with this email alaready exist. Please login.";
                    break;
                case "auth/weak-password":
                    errorMessage.value = "Password should be at least 6 characters long.";
                    break;
                case "auth/invalid-email":
                    errorMessage.value = "Please enter a valid email address.";
                    break;
                case "auth/operation-not-allowed":
                    errorMessage.value = "Email and password sign-in is not enabled for this project.";
                    break;
                case "auth/network-request-failed":
                    errorMessage.value = "Could not connect. Check your internet connection and try again.";
                    break;
                default:
                    errorMessage.value = "Sorry. There was an unexpected error. Please try again."
            }
        }
    }

    async function logIn (email, password) {
        if (!email) return errorMessage.value = "Please enter a valid email.";
        if (!password) return errorMessage.value = "Please enter a password.";
        try {
            await signInWithEmailAndPassword(auth, email, password);
            errorMessage.value = "";
            signInModelOpen.value = false;
        }
        catch (error) {
            switch(error.code) {
                case "auth/wrong-password":
                    errorMessage.value = "Incorrect Password!";
                    break;
                case "auth/user-not-found":
                    errorMessage.value = "No user was found with this email."
                    break;
                case "auth/invalid-credential":
                case "auth/wrong-password":
                    errorMessage.value = "Incorrect email or password.";
                    break;
                case "auth/user-disabled":
                    errorMessage.value = "This account has been disabled.";
                    break;
                case "auth/too-many-requests":
                    errorMessage.value = "Too many attempts. Please try again later.";
                    break;
                case "auth/operation-not-allowed":
                    errorMessage.value = "Email and password sign-in is not enabled for this project.";
                    break;
                case "auth/network-request-failed":
                    errorMessage.value = "Could not connect. Check your internet connection and try again.";
                    break;
                default:
                    errorMessage.value = "Sorry. There was an expected error. Please try again.";
            }
        }
    }

    async function logOut () {
        try {
            await signOut(auth);
            errorMessage.value = "";
            window.alert("You have been signed out.");
        }
        catch (error) {
            errorMessage.value = error.message || "Unable to sign out. Please try again.";
            window.alert(errorMessage.value);
        }
    }

    onAuthStateChanged(auth, function(user) {
        if (user) {
            userData.value = user;
        } else {
            userData.value = null;
        }
    })

    return {
        signInModelOpen,
        errorMessage,
        signUp,
        logIn,
        logOut,
        userData,
    }
}