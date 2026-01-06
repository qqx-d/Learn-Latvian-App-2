import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAy55_y_kO6BEA2GgaSr7qgEW1DN3AnFz0",
  authDomain: "latvian-learn.firebaseapp.com",
  databaseURL: "https://latvian-learn-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "latvian-learn",
  storageBucket: "latvian-learn.appspot.com",
  messagingSenderId: "337514562639",
  appId: "1:337514562639:web:3ff5ed409a23c58c19d63a",
  measurementId: "G-9T2HD2YKLN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
const WORKER_BASE_URL = 'https://latvial-learn.latvial-learn.workers.dev';

type WorkerResponse<T> = { data?: T; ticket?: string; ok?: boolean };

const workerPost = async <T>(path: string, body: Record<string, unknown>): Promise<T> => {
  if (!WORKER_BASE_URL) throw new Error('Worker URL is not configured');

  const response = await fetch(`${WORKER_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Worker request failed');
  }

  return (await response.json()) as T;
};

export const listenToAuthChanges = (callback: (uid: string | null) => void) =>
  onAuthStateChanged(auth, async (user) => {
    // If an old anonymous session remains, sign out to force the login screen
    if (user?.isAnonymous) {
      await signOut(auth);
      callback(null);
      return;
    }

    callback(user ? user.uid : null);
  });

export const loginWithEmail = async (email: string, password: string) => {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user.uid;
};

export const registerWithEmail = async (email: string, password: string) => {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  return credential.user.uid;
};

export const requestVerificationCode = async (email: string) => {
  const result = await workerPost<{ ticket: string }>('/auth/send-code', { email });
  return result.ticket;
};

export const verifyCodeWithBackend = async (email: string, code: string, ticket: string) => {
  const result = await workerPost<WorkerResponse<undefined>>('/auth/verify-code', { email, code, ticket });
  return result.ok === true;
};

export const checkEmailExists = async (email: string): Promise<boolean> => {
  try {
    // Try to create user with a random password to check if email exists
    // This will fail with 'email-already-in-use' if account exists
    const randomPassword = Math.random().toString(36).slice(-10);
    await createUserWithEmailAndPassword(auth, email, randomPassword);
    
    // If creation succeeded, delete the user immediately (we don't want it)
    // and return false (email didn't exist before)
    if (auth.currentUser) {
      await auth.currentUser.delete();
      await signOut(auth);
    }
    return false;
  } catch (error: any) {
    // If error is "email already in use", email exists
    if (error.code === 'auth/email-already-in-use') {
      return true;
    }
    // For any other error, return false
    return false;
  }
};

export const saveUserProfile = async (uid: string, email: string) => {
  const profileRef = ref(database, `users/${uid}/profile`);
  await set(profileRef, { email, createdAt: Date.now() });
};

export const logout = async () => {
  await signOut(auth);
};

export const getCurrentUserEmail = () => {
  return auth.currentUser?.email || null;
};
