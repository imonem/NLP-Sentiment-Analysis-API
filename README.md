# NLP Evaluating a News Article Project

To run the dev mode type `npm run dev`\
To build the project type `npm run build`\
To run Jest test type `npm run test`

## Usage

To run the project in dev mode, simply open 2 terminal windows\

In the first terminal window type
`npm run start`

In the second terminal window type
`npm run dev`

The second terminal window will open a default browser with address `http://localhost:8080`

## Under the hood

### Overview

The app takes the news article URL from client and sends the URL to [[Meaning Cloud](https://www.meaningcloud.com/)]

Meaning Cloud then send the data back after analysis.

The data is the filtered to the summary which is then displayed to the user.

### Functionality

Included is an .env_example, the file can be renamed and linked in the server index.js, however, it is a required item in order for the app to function correctly


### Testing with Jest

Some unit test are in place, however testing the asynchronous code is not straight forward so it is still a work-in-progress

v 1.0
