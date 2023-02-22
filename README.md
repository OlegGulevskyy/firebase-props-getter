# Prop retriever
Sometimes during local development you just need values that either renewed often or very dynamic, so instead of going into Firebase UI and copy pasting stuff manually, the script retrieves them and spits out into `stdout`.

## Setup

1. Clone this repo wherever
3. Create Service account credentials file and name it `creds.json` or whatever you want
4. Go to the folder and install the packages `cd YOUR_FOLDER_NAME && npm i`
5. Create .env file inside the project folder - this is the file where you control the behaviour of the script
6. Build the script - `npm run build`
7. Run the script - `npm run start`

### .env expected properties and example:

```
# Relative to the root of the project
CREDS_PATH="./creds.json"

# You can get URL from Project settings, Firebase UI
FIREBASE_URL="https://<FIREBASE_URL>.firebasedatabase.app"

# The actual thing you want to retrieve, path to it. This value will be returned to you once the script is done
FIREBASE_VALUE_PATH="users/oleggulevskyygmailcom/accessToken"
```

For example, you can get your values into buffer like so
```
npm run start | pbcopy
```
