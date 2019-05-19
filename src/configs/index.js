import * as secret from './private';

// Firestore
export const apiKey = secret.apiKey;
export const projectId = secret.projectId;
export const authDomain = `${projectId}.firebaseapp.com`;
export const databaseURL = `https://${projectId}.firebaseio.com`;
export const storageBucket = `${projectId}.appspot.com`;
