# Schema Information

## products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
stock       | integer   | not null
price       | integer   | not null
SKU         | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
category_id | integer   | not null, foreign key (references product_category), indexed
archived    | boolean   | not null, default: false

## product-categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
product_id  | integer   | not null, foreign key(references proudcts), indexed
description | string    | 

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
product_id     | integer   | not null, foreign key (references products), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
