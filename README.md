# Cliptale 📎

Automate your Instagram stories clipping.

## Set up

```bash
git clone git@github.com:rodgracas/cliptale.git
cd cliptale
```

- Edit the following lines of code in [clipping.js](src/clipping.js).

```js
const loginCredentials = {
    username: "yourInstagramAccountEmail",
    password: "yourInstagramAccountPassword",
};
```

> **Note**: The Instagram account used should not have 2FA enabled.

- Edit `users.json` file in `data/` folder

> **Note**: Users profiles must be available from the Instagram account used to login.


## Install

```
npm install
```

## Run

```
npm start
```

