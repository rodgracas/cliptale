# Cliptale 📎

Automate your Instagram stories clipping using Puppeteer.

## Set up

Open your terminal and run the following commands:

```bash
# Get repository
git clone git@github.com:rodgracas/cliptale.git

# Enter project directory
cd cliptale
```

### Instagram credentials

```bash
# Create a `.env` file in project root.
cp .env.sample .env
```

- Edit `IG_USERNAME` and `IG_PASSWORD` environment variables with the Instagram account used to authenticate.

> **Note**: The Instagram account used should not have 2FA enabled.

### Instagram profile users

- Edit `users.json` file in `data/` folder

> **Note**: Users profiles must be available from the Instagram account used to login.

## Install

```bash
# Install dependencies
npm install
```

## Run

```bash
# Run cliptale
npm start
```

> **Note**: By default `cliptale` runs in headless mode. To run in headfull mode, set `DEBUG` variable to `true` on `clipping.js` file.


## Next steps

- [x] Run in headless mode
- [ ] Add prettier/eslint
- [ ] Write tests
- [ ] Typescript support
- [ ] Create web application