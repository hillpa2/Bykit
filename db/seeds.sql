
insert into users (email, username, password, address, locality, country)
values("alan.delez@gmail.com", "code3lue", "password", "1 Rent Dr", "Savannah, GA", "US");

ALTER TABLE users
ADD password varchar(255) not null;

INSERT INTO users (email, username, password, address, locality, country)
VALUES ("Renter@example.com","Renter", "password", "1 Rent Dr", "Savannah, GA", "US");

INSERT INTO users (email, username, password, address, locality, country)
VALUES ("Buyer@example.com","Buyer", "password", "2 Buy Rd", "Belgrade", "RS");

INSERT INTO offers (email_seller, title, type, rent_per_hour, description, lower_time, upper_time)
VALUES ("Renter@example.com","A bike", 1, 5, "Description of bike", 3600, 36000);

INSERT INTO rent (email_buyer, offer_id, lower_time, upper_time)
VALUES ("Buyer@example.com", 1, 7200, 14400);

