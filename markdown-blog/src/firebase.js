import firebase from 'firebase'
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCjyP94LuUZoCVy8mnVsIhJUTKhL6TIm9k",
    authDomain: "markdown-blog-e09b9.firebaseapp.com",
    projectId: "markdown-blog-e09b9",
    storageBucket: "markdown-blog-e09b9.appspot.com",
    messagingSenderId: "864161727558",
    appId: "1:864161727558:web:c171f382143c17d581f647"
});
const db=firebaseApp.firestore();
//const auth=firebase.auth();
const storage=firebase.storage();

export{db,storage} 