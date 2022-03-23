import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getAnalytics, Analytics } from 'firebase/analytics'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getAuth, Auth } from 'firebase/auth'
import { getStorage, FirebaseStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
}

let app: FirebaseApp
let auth: Auth
let firestore: Firestore
let analytics: Analytics
let storage: FirebaseStorage

if (typeof window !== 'undefined' && !getApps().length) {
  app = initializeApp(firebaseConfig)
  auth = getAuth()
  firestore = getFirestore(),
  analytics = getAnalytics(app)
  storage = getStorage(app)
}

export { app, auth, firestore, analytics, storage }
