# Trello-Card-Printer

Permits printing of Trello cards into small cards of four per page for sorting.

## To Install

1. Download the repo.
2. Using your CLI, navigate to the repo's root directory and type `npm install`.
3. Get the organization name of the team you wish to see the boards for. You can find that on Trello by clicking your avatar -> Profile, selecting the team listed under "Teams", and taking it from the URL of the team: for example `https://trello.com/superfunteam`, the organization name is `superfunteam`. Assign this to the constant `ORG_NAME` in the file `/assets/js/react/utils/constants.js`.
4. Get an API Key by going to https://trello.com/app-key and assign it to the constant `TRELLO_API_KEY` in `/assets/js/react/utils/constants.js`.
5. Get a Token from the same page in Step #4 and clicking on the 'Token' link, and assign it to the constant `TOKEN` in `/assets/js/react/utils/constants.js`.
6. Build your code by running `npm run webpack`.
7. Set up the repo as a site in IIS (or your private hosting environment of choice) and navigate to `index.html`.

**DO NOT UPLOAD YOUR CODE TO A PUBLIC HOSTING ENVIRONMENT**

As this code uses an API key and a token with access to your teams' boards, you do not want this data available to the public. Please only use this in a private environment.

## To Use

1. Navigate to `index.html` in your browser of choice.
2. From the dropdown, select a board.
3. Print.