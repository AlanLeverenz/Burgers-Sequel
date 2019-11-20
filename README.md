# Burgers-Sequel

*A restructuring of the (ORM) Burgers repository code using Sequelize.*

## What the app does

This app lists a menu of burgers stored in a MySQL database. The user has the options of:

1. Add to the customer list,
2. Add new burgers to the menu, with toppings
3. Devour burgers on the menu.

The page automatically refreshes when a new burger or customer is added.

The page also refreshes when a burger is devoured by a customer. When devoured the burger is removed from the middle column of edible burgers and inserted beneath the customer's name on the right column.

This app is still under construction, pending some assistance in solving how to devour a burger and update the webpage with the change. This means:

1. Solving how to fill the customer dropdown menu within the Devour button form.
2. Acquiring both the burger Id and the selected customer Id (from the dropdown menu) when the DEVOUR button is clicked. 
3. Route a request to the server to assign the customer's ID to the MySQL Burger table's (foreign key) Customer Id.
4. The response function should remove the burger's Devour button in the middle column.
5. The response function should insert the burger's name inside the Customer div on the right column.

![Add a burger](https://github.com/AlanLeverenz/Burgers-Sequel/blob/master/public/images/add-burger.png)

__To be completed...__
