/**
 * Group by Clause
--------------------
Groups rows that have the same values into summary rows.

It collects data from multiple records and groups the result by one or more column.


Example:

SELECT col1, col2
FROM table_name
GROUP BY col_name(s);


*Generally we use groub by with some aggregation function.


Suppose we want to find count on the basis of age.

group on the basis of Age.

SELECT Age, COUNT(Id)
FROM user
GROUP BY Age;


We can only select those coloumns where We have use GROUP BY.






 */