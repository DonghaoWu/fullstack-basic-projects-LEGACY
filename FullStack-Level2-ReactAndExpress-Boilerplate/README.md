### `This app is an React and Express boilerplate ready for no-database full stack application.`

## Available Scripts

### After you pull the repo, run this command in terminal.

```bash
$ npm install
$ cd client
$ npm install
$ cd ..
$ cd server
$ npm install
```

In the project directory, you can run:

#### `npm run dev`(check package.json in root directory)

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `control + c`

Quit the development mode.

### `Dependencies`

Folder:server

- express
- morgan
- nodemon

Folder:client

- react
- react-dom
- react-scripts
- react-router-dom

Root directory:

- concurrently

### 1. How to add a new route in the Back-end.

`See the README.md in server folder`

### 2. How to fetch the data from server side and render it in front end.

#### `Define our backend port as a proxy`

`Location: ./client/package.json`

```js
"proxy": "http://localhost:4000"
```

`note:`

- Add this line in package.json, the port here(4000) should be same as the port set up in /server/server.js

### 3. How to add a new route in the Front-end.

`See the README.md in client folder`
