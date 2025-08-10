/**
 * Having Clause
------------------
Similar to Where i.e. applies some condition on rows.
But it is used when we want to apply any condition after grouping.

SELECT col1, col2
FROM table_name
GROUP BY col_name(s)
HAVING condition;

*WHERE is for the table, Having is for the GROUP.
*Grouping is neccessary for HAVING.



Find them whose maximum followers is greater than 200 and Grouped by age.

SELECT Age, MAX(Followers)
FROM user
GROUP BY Age
HAVING MAX(Followers) > 200;


Without applying GROUP BY we can not use HAVING clause.







 */