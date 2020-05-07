# My Portfolio Website

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Deploying to GitHub

Add Home Page line on `package.json`
`"homepage": "http://mywebsite.com/relativepath"`
`npm install --save gh-pages`

Add predeploy and deploy script lines on `package.json`
`"predeploy": "npm run build"`
`"deploy": gh-pages -d build`

Run `npm run deploy`
