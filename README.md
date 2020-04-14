
# Eat-Da-Burger #


### Restaurant app using Node, Express, Handlebars ###

This full-stack application displays a list of burgers from a database. If the burger has been eaten (in other words, if the stored 'devoured' column is set to 'true' for that burger), it is displayed on the right side of the page. Otherwise the burger is displayed on the left.


The app is deployed at: https://hidden-shore-98291.herokuapp.com/

This repository is for a full stack JavaScript application, employing various technologies, including NPM packages (Express, Body Parser, and  MySQL), Handlebars templating, homemade ORM, and styling with CSS. The application allows the client to interact with a server to submit and update data.


* Whenever a user submits a burger's name, this app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* This app will store every burger in a database, whether devoured or not.

![](images/BurgerEat.png)


