# Cliptale 📎

> - Combination of _clipping_ (method to clip off something) + _tales_ (stories - Instagram)

Automate your Instagram stories clipping using [Puppeteer](https://pptr.dev/).

**What is _clipping_ in Marketing?**

Since Instagram stories have a period of 24 hours, _clipping_ allows you to record this content to later be shared with the customer. It can also be considered as a consumer analysis tool, often referred to as _target_.

## The problem we try to solve

As a Campaign Manager, with several campaigns in hand with different IG profiles, it takes a lot of time to run each account and perform the clipping.

## The solution

_cliptale_ automates the clipping of Instagram stories, making this process faster, easier and more efficient. Just provide a list of IG profiles, and _cliptale_ will return the current available stories content in `.jpeg` format, and saved them into a dedicated folder.

## Table of contents

- [Cliptale 📎](#cliptale-)
  - [The problem we try to solve](#the-problem-we-try-to-solve)
  - [The solution](#the-solution)
  - [Table of contents](#table-of-contents)
  - [Set up](#set-up)
    - [Instagram credentials](#instagram-credentials)
    - [Instagram profile users](#instagram-profile-users)
  - [Install](#install)
  - [Run](#run)
  - [Next steps](#next-steps)
  - [VS Code](#vs-code)
  - [Contributing](#contributing)
    - [Pull Request Process](#pull-request-process)

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
- [ ] Create API
- [ ] Write tests
- [ ] Typescript support
- [ ] Create web application

## VS Code

`cliptale` has a `.vscode` folder setup with some default settings and recommended extensions for VS Code editor.

To start using these settings, open your terminal and run:

```bash
# In root
cp .vscode/settings.json.default .vscode/settings.json
```

You can change your `settings.json` as you wish since they will not be tracked on Git. If you want to add some changes to the default settings, please feel free to add on the `settings.json.default` file.

## Contributing

Contributions are welcome 😀 This is my first open-source project on Github, so I would be very grateful to share your thoughts on this project, solve any issues and receive your feedback for improvements or enhancements.

When contributing to this repository, please first discuss the change you wish to make by opening an issue.

### Pull Request Process

1. Fork the repo on GitHub
2. Clone the forked repo to your machine
3. Commit changes to your own branch
4. Push your work onto your forked repository
5. Submit a Pull request so that I can review your changes
