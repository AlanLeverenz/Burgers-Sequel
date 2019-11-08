USE n5q97jqdo4j814xe;

CREATE TABLE burgers(
	id integer auto_increment primary key,
    burger_name varchar(80) not null,
    burger_toppings varchar(255),
    devoured BOOLEAN not null DEFAULT false
);
INSERT INTO burgers (burger_name, burger_toppings, devoured)
VALUES ('THE BRGR','Two Beef Patties + brgr Sauce + Diced Onion + Lettuce + Tomato + Pickles',0),
('BEAUTIFUL DAY','Beef Patty + American Cheese + brgr Sauce + Grilled Onions + Lettuce + Tomato + Pickles',0),
('RAINFOREST','Beef Patty + Gruyere + Avocado + Herb Mayonnaise + Lettuce + Tomato',0),
('BLUE SKY','Beef Patty + Blue Cheese + Bacon + Sweet Onion Marmalade + Lettuce + Tomato + Pickles',0),
('FRESH MORNING','Beef Patty + American Cheese + Fried Egg + brgr Sauce + Grilled Onions + Lettuce + Tomato',0),
('DOWN ON THE FARM','Beef Patty + Cheddar + Bacon + Horseradish Sauce + Onion + Lettuce + Tomato + Pickles',0),
('MAGNIFICENT MEADOW','Beef Patty + Swiss + Grilled Mushrooms + Ketchup + Lettuce + Tomato + Pickles',0)
;
