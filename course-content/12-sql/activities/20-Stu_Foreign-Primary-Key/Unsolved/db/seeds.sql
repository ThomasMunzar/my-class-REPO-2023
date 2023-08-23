INSERT INTO customers(id,first_name, last_name)
VALUES
(001, "Thomas", "Munzar"),
(002, "Jacob", "Kachmarek"),
(003, "Billy", "BoJefferson"),
(004, "Daniel", "Lewis")

INSERT INTO customer_order (id,customer_id, order_details)
VALUES
(001, 001, "no pickles"),
(002, 002, "Let me finish my drink before you refill please"),
(003, 003, "extra onions"),
(004, 004, "Gluten Allergy")