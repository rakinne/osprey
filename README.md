# Osprey Deity
## _Web Server Powered by SQL ..._

## Motivations
    - use popular tech
        [get experience with current tech]
    - use lesser known tech
        [get experience with 
        - little to no documentation
        - finding tools to expand project and simplify workflows]
    - frontend+backend hosted live on Web

## Key Features of a strong projects
TODO: analyze existing high-starred Github repos and find commonalities

## What is SQL?

Structured Query Language (SQL) is a standardized programming language that is used
to manage \relational databases\ and perform \various operations\ on the data in them

    - Relational databases
    "creates relationships between N tables"
        - based on the relational model, an intuitive & straightforward way of representing data in
            tables
        - each row in the table is a "record" with a unique ID called the "key"
    
    - Various opertations
    "actions to perform against data that exists in a datastore"
        - SELECT - extracts data from a database.
        - UPDATE - updates data in a database.
        - DELETE - deletes data from a database.
        - INSERT INTO - inserts new data into a database.
        - CREATE DATABASE - creates a new database.
        - ALTER DATABASE - modifies a database.
        - CREATE TABLE - creates a new table.

Osprey is powered by SQLLite3. Low throttles of traffic is an early expectation, with capacity available were sudden increase in users were to take 
place.

"SQLite works great as the database engine for most low to medium traffic websites (which is to say, most websites). The amount of web traffic that 
SQLite can handle depends on how heavily the website uses its database. Generally speaking, any site that gets fewer than 100K hits/day should work fine 
with SQLite. The 100K hits/day figure is a conservative estimate, not a hard upper bound. SQLite has been demonstrated to work with 10 times that amount 
of traffic" - (credit: https://www.sqlite.org/whentouse.html)

Crucial to consider is a parsable, simple & proper "structure" for the data Osprey intends to house. Osprey is built using the Star Schema concept.

## Osprey Schema
Osprey is essentially a collection of N dimension tables orbiting a fact table.

## Design

Web server with live chat
    - present chat with keyboard input and potential for N users at once
