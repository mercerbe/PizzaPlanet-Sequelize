# PizzaPlanet-Sequelize
fullstack app using the sequelize CLI/sequelize

Node | Express | Sequelize | Handlebars

## Description

This application demonstrates a simple full stack application.

Any user may add a new pizza to the menu. This input also adds the pizza into the database using sequelize. The initial pizza entry is added as *available*. The user may then "devour" any burger by clicking on the 'devour button' next to the pizza's name, which moves it into the adjacent column and updates the status accordingly, in the database.

## Demo

You can demo this web app on heroku at:  [Pizza Planet](https://google.com).

## Installation

To run the application locally, first clone this repository with the following command:

	git clone https://github.com/mercerbe/PizzaPlanet-Sequelize.git

Next, install the application dependencies:

	* cd path/to/PizzaPlanet-Sequelize
	* npm install

Finally, run the node server locally:

	node server.js

Now, open the local application on port 8080 at the URL: `http://localhost:8080/`.
