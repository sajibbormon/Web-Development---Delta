/**
 * Table Queries: UPDATE Table
--------------------------------
Update (to update existing rows)

UPDATE table_name
SET col1 = val1, col2 = val2
WHERE condition;

Suppose we want to update Followers to 600 whose age is 26.

UPDATE user
SET Followers = 600
WHERE Age = 26;



First time, it will give error. To resolve this, we use

SET SQL_SAFE_UPDATES = 0;


*/