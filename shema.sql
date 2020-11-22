CREATE TABLE products (
    uid SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR NOT NULL,
    price INT NOT NULL,
    stock BOOLEAN,
    image VARCHAR,
    created_at DATE
);

CREATE TABLE posts (
    uid SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR NOT NULL,
    image VARCHAR,
    category VARCHAR(255),
    created_at DATE
);


INSERT INTO posts values(1,'post prueba','content prueba','imagen.png','categoria prueba');