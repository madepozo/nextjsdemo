const dotenv = require('dotenv');

dotenv.config({ path: `./.env` });

module.exports = {
	target: 'serverless',
	env: {
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		databaseURL: process.env.DB_URL,
		projectId: process.env.PROJECT_ID,
		storageBucket: process.env.STORAGE_BUTCKET,
		messagingSenderId: process.env.MESSAGING_SENDER_ID,
		appId: process.env.APP_ID,
		measurementId: process.env.MEASUREMENT_ID
	}
};
