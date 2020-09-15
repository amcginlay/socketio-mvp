# socketio-nvp

## Setup

Note the following instructions assume Mac or Linux OS

- Install Node.js on the host machine (if necessary): https://nodejs.org/en/download/
- Clone this repo: `git clone https://github.com/amcginlay/socketio-nvp.git`
- Change into cloned directory: `cd socketio-nvp`
- Download the package dependencies: `npm install`
- Start the Node.js server which exposes an [Express](https://expressjs.com/) web server: `PORT=3000 npm start`
- Navigate to the homepage at http://localhost:3000 or equivlent

## Observations

The demo uses [Socket.IO](https://socket.io/), a library that enables real-time, bidirectional and event-based communication between the browser and the server. You can consider the Socket.IO client as a “slight” wrapper around the [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) API.

When you navigate to the homepage and type characters on your keyboard they will display on the screen, however the journey these characters take is unusual. The character data is not sent directly to the screen. Instead the data is posted to the server using the SocketIO library. The server also uses the SocketIO library to bounce (or reflect) each data event straight back to any clients which happen to be open on that page. You can observe this behaviour by simultaneously opening the home page from multiple browser tabs.

That's it. Take a look an the code in [/public/client.js](/public/client.js) (which runs in the browser) and [/server.js](server.js) (which runs under Node.js) to observe the data trail from (1) the client's keyboard to (2) the server and (3) back again to the client where it gets printed to the browser. This is an example of the [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) where the subject is named `message` and each browser is a subscribed observer of that subject.
