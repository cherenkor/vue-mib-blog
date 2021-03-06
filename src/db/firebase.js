import { firebase } from "@firebase/app";
import "@firebase/firestore";
import {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket
} from '@/configs';

export const firebaseApp = firebase.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket
});

export const db = firebaseApp.firestore();