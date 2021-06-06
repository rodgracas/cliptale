require("dotenv").config();

const showErrorMessage = (message) => console.error(`\x1B[31m✘ ${message}`);

/**
 * Returns true if environment variables are set, false otherwise.
 *
 * @returns {Boolean}
 */
function isConfigValid() {
	if (!process.env.IG_USERNAME) {
		showErrorMessage("Invalid configuration: Set IG_USERNAME on .env file");
		process.exit(1);
	}

	if (!process.env.IG_PASSWORD) {
		showErrorMessage("Invalid configuration: Set IG_PASSWORD on .env file");
		process.exit(1);
	}

	return true;
}

isConfigValid();

module.exports = {
	IG_USERNAME: process.env.IG_USERNAME,
	IG_PASSWORD: process.env.IG_PASSWORD,
};
