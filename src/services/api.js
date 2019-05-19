import { db } from "@/db/firebase";
import { isEmpty } from 'ramda';

export const addPost = post => async () => {
    if (isEmpty(post)) new Error('Please, provide post object');

    const doc = await db.collection("posts").add(post).get();
    console.log(doc);

    return {
        id: doc.id,
        ...doc.data()
    };
};

export const getPosts = async () => {
    let posts = [];
    const snapShot = await db.collection("posts").get();

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

