import { db } from "@/db/firebase";
import { auth } from "firebase";
import { isEmpty } from 'ramda';

// Authentication
export const signInWithEmail = ({ email, password}) => async () => {
    if (!email || !password) new Error('Please, provide auth credentials');

    await auth().signInWithEmailAndPassword(email, password);

    if (!auth().currentUser) new Error ('Did not authenticate');

    return auth();
};

// Posts
export const addPost = post => async () => {
    if (isEmpty(post)) new Error('Please, provide post object');

    const doc = await db.collection("posts").add(post).get();

    return {
        id: doc.id,
        ...doc.data()
    };
};

export const getPosts = (orderBy = '') => async () => {
    let posts = [];
    const snapShot = await db.collection("posts").orderBy(orderBy).get();

    snapShot.forEach(doc => {
        if (!doc.exists) return;

        posts.push({
            id: doc.id,
            ...doc.data()
        })
    });

    return posts;
};

export const getPostById = id => async () => {
    if (!id) new Error('Please, provide ID');

    const doc = await db.collection("posts").doc(id).get();

    if (!doc.exists) new Error('No document with provided ID');

    return {
        id: doc.id,
        ...doc.data()
    };
};

