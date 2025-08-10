/**
 * Where Clause
-----------------
To define some conditions

Syntax(to print particular cols)
SELECT col1, col2 FROM  table_name
WHERE conditions;


Syntax(to print all)
SELECT * FROM table_name
WHERE conditions;



example: 

find people wher age is greater than 23.


SELECT * FROM table_name
WHERE age > 23;



 * Where Clause Operators
---------------------------

Operators

1. Arithmetic Operators: +(addition), -(subtraction), *(multiplication), /(division), %(modulus)

2. Comparision Operators: =(equal to), !=(not equal to), >, >=, <, <=

3. Logical Operators: AND, OR, NOT, IN, BETWEEN, ALL, LIKE, ANY

4. Bitwise Operators: &(Bitwise AND), |(Bitwise OR)



Example of Arithmetic: 
print name and age col of them who will be 25 in next year

SELECT Name, Age From table_name
WHERE Age + 1 = 25;


  

 */