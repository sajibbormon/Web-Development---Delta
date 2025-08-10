/**
 * Where Clause
-----------------
Frequently Used Operators


1. AND  (to check for both conditions to be true)

2. OR (to check for one of the conditions to be true)

3. BETWEEN (selects for a given range)

4. IN (mathches any value in the list)

5. NOT (to negate the given condition)




3. BETWEEN: suppose we want to print only people of age 23 to 24

Syntax:
SELECT Name, Age FROM user
WHERE Age BETWEEN 13 AND 24;


4. IN: Similar like we find elements in Array based on conditions. (specially used for find a particular value or multiple values)

suppose finding data about two user using emails

("donald@mail.com", "bob123@mail.com")

Syntax:
SELECT Name, Age, Email FROM table_name
WHERE Email IN ("casey@mail.com","donald@mail.com", "sajib@mail.com");  



5. NOT: we want the opposite data(we don't want the data that satisfy the condition)

We Want to print whose Age is not 24 and 26.
Syntax: 
SELECT Name, Age, Email FROM table_name
WHERE Age NOT IN (24, 26);  


 */