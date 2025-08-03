drop database if exists TafGo;

create database if not exists TafGo;

use TafGo;

create table Users (
id int auto_increment, 
role varchar(5) not null,
name varchar(255) not null,
email varchar(255) not null UNIQUE,
password varchar(255) not null,
description varchar(255) not null,
created_at TIMESTAMP DEFAULT current_timestamp,
primary key (id)
);

create table Companies (
id int auto_increment,
name varchar(255) not null,
email varchar(255) not null UNIQUE,
password varchar(255) not null,
description varchar(255) not null,
created_at TIMESTAMP DEFAULT current_timestamp,
primary key (id)
);

create table Offers (
id int auto_increment,
author int not null,
status varchar(20) default "In progress",
position varchar(255) not null,
description varchar(512) not null,
location varchar(255) not null,
payment int not null,
date_start DATE not null, 
created_at TIMESTAMP DEFAULT current_timestamp,
updated_at TIMESTAMP DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
primary key (id),
foreign key (author) references Companies(id) ON DELETE CASCADE
);

create table applications (
id int auto_increment,
worker_id int not null,
offer_id int not null,
status varchar(20) default "Applied",
message varchar(255),
created_at TIMESTAMP DEFAULT current_timestamp,
updated_at TIMESTAMP DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
primary key (id),
foreign key (worker_id) references Users(id) ON DELETE CASCADE,
foreign key (offer_id) references Offers(id) ON DELETE CASCADE
);

create table user_reviews (
id int auto_increment,
author int not null,
user_id int not null,
grade int not null,
message varchar(255),
created_at TIMESTAMP DEFAULT current_timestamp,
primary key(id),
foreign key (author) references Companies(id),
foreign key (user_id) references Users(id) ON DELETE CASCADE
);

create table company_reviews (
id int auto_increment,
author int not null,
company_id int not null,
grade int not null,
message varchar(255),
created_at TIMESTAMP DEFAULT current_timestamp,
primary key(id),
foreign key(author) references Users(id),
foreign key(company_id) references Companies(id) on delete cascade
);

INSERT INTO Users (role, name, email, password, description)
VALUES
  ('user', 'John Doe', 'john@example.com', 'hashedpass1', 'Student looking for part-time jobs'),
  ('user', 'Anna Smith', 'anna@example.com', 'hashedpass2', 'Freelance designer'),
  ('user', 'Peter Lee', 'peter@example.com', 'hashedpass3', 'Warehouse worker with forklift license'),
  ('user', 'Emily Turner', 'emily@example.com', 'hashedpass4', 'Waitress with 2 years experience');


INSERT INTO Companies (name, email, password, description)
VALUES
  ('TechCorp', 'hr@techcorp.com', 'hashedpassC1', 'Web application development'),
  ('DesignHub', 'contact@designhub.com', 'hashedpassC2', 'Creative design agency'),
  ('QuickBite Café', 'jobs@quickbite.com', 'hashedpassC3', 'Fast food and casual dining'),
  ('MarketExpress', 'hr@marketexpress.com', 'hashedpassC4', 'Retail and supermarket chain'),
  ('SpeedyDelivery', 'hiring@speedydelivery.com', 'hashedpassC5', 'Last-mile logistics and couriers');

INSERT INTO Offers (author, status, position, description, location, payment, date_start)
VALUES
  (1, 'In progress', 'Junior Developer', 'Looking for intern to assist with frontend tasks', 'Paris', 1200, '2025-09-01'),
  (2, 'In progress', 'UI Designer', 'Freelance UI/UX designer for mobile app redesign', 'Remote', 900, '2025-08-20'),
  (3, 'In progress', 'Waiter/Waitress', 'Part-time shift at downtown café, evenings', 'Lyon', 350, '2025-08-10'),
  (4, 'In progress', 'Shelf Stocker', 'Replenish shelves and assist customers', 'Marseille', 400, '2025-08-12'),
  (5, 'In progress', 'Delivery Driver', 'Deliver small packages in city center', 'Toulouse', 500, '2025-08-15');

INSERT INTO applications (worker_id, offer_id, message)
VALUES
  (1, 1, 'Happy to work on frontend tech, have some Vue.js experience.'),
  (2, 2, 'Experienced with Figma and mobile UX.'),
  (4, 3, 'Already worked in a café before. Available evenings.'),
  (3, 4, 'Can work early shifts. Forklift certified.'),
  (1, 5, 'Have a scooter and know the city well.');

INSERT INTO user_reviews (author, user_id, grade, message)
VALUES
  (3, 4, 5, 'Emily was excellent — fast, polite, and reliable.'),
  (4, 3, 4, 'Peter did a good job, just needed a bit more training at first.');

INSERT INTO company_reviews (author, company_id, grade, message)
VALUES
  (1, 3, 5, 'Friendly staff, flexible schedule.'),
  (4, 4, 3, 'The work was fine, but shift planning could be better.');

