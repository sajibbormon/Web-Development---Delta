/**
 * Limit Clause
----------------
Sets an upper limit on number of (tuples) rows to be returned.

Syntax: 
SELECT col1, col2 FROM table_name
LIMIT number;

If we want limited data. Suppose we want only 2 rows of data where age is greter than 20;


SELECT Name, Age, Email FROM table_name
WHERE Age > 20
LIMIT 2;  


 */