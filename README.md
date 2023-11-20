## QA Sharing Platform

An online platform that enables students and teachers to collaboratively engage in the sharing of challenging questions and problem-solving.

## Cloning & Setup

Open the command-line of your choice (eg: CMD, Powershell, etc)
1. Go to the directory you want to clone this project to.
2. Run the command `git clone https://github.com/Scrappyz/QA-Sharing-Platform.git`.
3. Go to the project root directory via `cd QA-Sharing-Platform`.
4. Install dependencies with `npm install`.
5. If issues show, try `npm audit fix --force`.
6. Run the project with `npm start`.

## Troubleshooting

- If you are getting a `SOCKET TIMEOUT` error when using `npm install`, try running these commands: `npm config set fetch-retry-mintimeout 100000` and `npm config set fetch-retry-maxtimeout 600000` then run `npm install` again.