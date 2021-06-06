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
# Create a .env file in project root.
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
npm start
```

> **Note**: By default `cliptale` runs in headless mode. To run in headfull mode, set `DEBUG` variable to `true` on `clipping.js` file.

## Next steps

- [x] Run in headless mode
- [x] Add Prettier
- [ ] Add Eslint
- [ ] Write tests
- [ ] Typescript support
- [ ] Create web application

## Contributing

Contributions are welcome 😀 This is my first open-source project on Github, so I would be very grateful to share your thoughts on this project, solve any issues and receive your feedback for improvements or enhancements.

When contributing to this repository, please first discuss the change you wish to make by opening an issue.

### Pull Request Process

1. Fork the repo on GitHub
2. Clone the forked repo to your machine
3. Commit changes to your own branch
4. Push your work onto your forked repository
5. Submit a Pull request so that I can review your changes
