BEGIN;

DROP TABLE IF EXISTS users,books,cart CASCADE;

CREATE TABLE
    users(
        id SERIAL PRIMARY KEY,
        email VARCHAR(100) NOT NULL UNIQUE ,
        password VARCHAR(100) NOT NULL,
        username VARCHAR(100) NOT NULL,
        imgUrl TEXT,
        userType VARCHAR(100) DEFAULT('user')
    );

CREATE TABLE
    books(
        id SERIAL PRIMARY KEY,
        book_name VARCHAR(100) NOT NULL,
        imgUrl TEXT,
        price FLOAT ,
        details TEXT
    );

CREATE TABLE
    carts(
        id SERIAL PRIMARY KEY,
        userId INT,
        bookId INT,
        foreign key (userId) references users(id),
        foreign key (bookId) references books(id)
    );

insert into
    users(
        email,
        password,
        username,
        imgUrl,
        userType
    )
VALUES (
        'husam@hotmil.com',
        '123456',
        'hussam',
        'img',
        'admin'
    ), (
        'ahmed@hotmil.com',
        '123456',
        'ahmed',
        'img',
        'user'
    );

insert into
    books(
        book_name,
        imgUrl,
        price,
        details
    )
VALUES ('GOT', 'img', 50, 'deatils');

insert into carts(userId, bookId) VALUES (1, 1),(2, 1);

COMMIT;