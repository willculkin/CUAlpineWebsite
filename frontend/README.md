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

- npm i -D @reach/router
- npm i -D node-sass
- npm install --save react-autosize-textarea

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
