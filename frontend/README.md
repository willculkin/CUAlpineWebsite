## Front end

The front end is done with react and webpack

### list of dependancies to get npm

- sudo apt-get install node-gyp libssl1.0-dev
- sudo apt-get install npm

### for mac

- brew install node
- brew install npm

### Once node and npm are installed

#### install these as dependancies if they aren't already.

- npm i -D @react/router
- npm i -D node-sass
- npm install --save react-autosize-textarea
- npm install @okta/okta-react@1.2.3 react-router-dom@5.0.1 --save

### how to launch frontend

- npm install
- npm run build
- npm start
- go to localhost:3000 in web browser

### for bugs

#### Missing required argument #1

- https://github.com/npm/cli/issues/681
- sudo npm install -g npm@latest
- need to use node 10 (fixes issue)

#### An explanation of state can be found in navigation where it is implemented and then in trips to see how it works
