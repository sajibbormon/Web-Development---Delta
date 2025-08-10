/**
 * Constraints
----------------
Rules for data in the table

NOT NULL        columns cannot have a null value

UNIQUE          all values in column are different

DEFAULT         sets the default value of a column

CHECK           it can limit the values allowed in a column


example:

salary INT DEFAULT  25000

CONSTRAINT age_check CHECK (age >= 18 AND city="Delhi")


not necessary to give age_check always:

CONSTRAINT CHECK (age >= 18 AND city="Delhi")



Keys Constraints
-----------------
There are two key constraints. 

1. PRIMARY KEY (makes a column unique & not null but used only for one)

2. FOREIGN KEY (prevent actions that would destroy links between tables)



example:
PRIMARY KEY:

CREATE TABLE temp (
    id INT NOT NULL,
    PRIMARY KEY (id)
);



if we want to give multiples of columns PRIMARY KEY then,

PRIMARY KEY (column_name1, column_name2, ...)



FOREIGN KEY:
CREATE TABLE temp(
    cust_id INT,
    FOREIGN KEY (cust_id) REFERENCES customer(id)
);



FOREIGN KEY: Foreign key is such a column which  is a primary key of another table.


FOREIGN KEY (column_name_of_current_table) REFERENCES second_table_name(primary_column_of_the_second_table)



What are keys?
---------------
Keys are special columns in the table.

Primary Key
------------
It is a column (or set of columns) in a table that uniquely indentifies each row. (a unique id)
There is only 1 PK & it should be NOT NULL.


Foreign Key
------------
A foreign key is a column (or set of columns) in a table that refers to the primary key in another
table.

FKs can have duplicate & null values.

There can be multiple FKs.



 */