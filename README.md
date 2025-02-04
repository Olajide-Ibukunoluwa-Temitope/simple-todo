### To run this project

navigate to project folder in your terminal and run:

```
npm install
```

This will install all the necessary dependencies in the local `node_modules` folder.

Finally, start your development server by running:

```
npm start
```

You should see the app in your browser address bar at [http://localhost:3000](http://localhost:3000)

### To run end to end tests in this project

while running the app on localhost:3000 run:

```
npx cypress open
```

in the window that pops up, select the end to end option and then proceed to select preferred browser simulator (chrome is recommended), navigate to todo.cy.js and run tests
