// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBos3AZu5xEMJyYG5McPUARga0Xx04Ibls',
	authDomain: 'earthquake-c9f2c.firebaseapp.com',
	databaseURL: 'https://earthquake-c9f2c-default-rtdb.firebaseio.com',
	projectId: 'earthquake-c9f2c',
	storageBucket: 'earthquake-c9f2c.appspot.com',
	messagingSenderId: '170064436336',
	appId: '1:170064436336:web:2b4e2df8006d7419b528b5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
