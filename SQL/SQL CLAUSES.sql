--DISTINCT Clause
 SELECT DISTINCT first_name, last_name
FROM employees
WHERE employee_id >=50
ORDER BY last_name;

--FROM Clause

SELECT *
FROM employees
WHERE first_name = 'Jane';

--Two tables with INNER JOIN

SELECT suppliers.supplier_id, suppliers.supplier_name, orders.order_date
FROM suppliers 
INNER JOIN orders
ON suppliers.supplier_id = orders.supplier_id;

--Two Tables with OUTER JOIN

SELECT employees.employee_id, contacts.last_name
FROM employees
LEFT OUTER JOIN contacts
ON employees.employee_id = contacts.contact_id
WHERE employees.first_name = 'Sarah';

--WHERE Clause Using AND condition

SELECT *
FROM employees
WHERE last_name = 'Anderson'
AND employee_id >= 3000;

--WHERE Clause Using OR condition

SELECT employee_id, last_name, first_name
FROM employees
WHERE last_name = 'Johnson'
OR first_name = 'Danielle';


--WHERE Clause Combining AND & OR conditions

SELECT *
FROM employees
WHERE (state = 'California' AND last_name = 'Smith')
OR (employee_id = 82);

--WHERE Clause Joining Tables
SELECT employees.employee_id, contacts.last_name
FROM employees
INNER JOIN contacts
ON employees.employee_id = contacts.contact_id
WHERE employees.first_name = 'Sarah';

--ORDER BY Clause Sorting without using ASC/DESC attribute

SELECT last_name
FROM employees
WHERE employee_id > 1000
ORDER BY last_name;

--ORDER BY Clause Sorting in descending order

SELECT last_name
FROM employees
WHERE first_name = 'Sarah'
ORDER BY last_name DESC;

--ORDER BY Clause Sorting by relative position

SELECT last_name
FROM employees
WHERE last_name = 'Anderson'
ORDER BY 1 DESC;

--ORDER BY Clause Using both ASC and DESC attributes

SELECT last_name, first_name
FROM employees
WHERE last_name = 'Johnson'
ORDER BY last_name DESC, first_name ASC;

--GROUP BY Clause

SELECT expression1, expression2, ... expression_n, 
       aggregate_function (expression)
FROM tables
[WHERE conditions]
GROUP BY expression1, expression2, ... expression_n;


--GROUP BY Clause Using SUM function

SELECT product_name, SUM(quantity) AS "Total quantity"
FROM products
GROUP BY product_name;

--GROUP BY Clause Using COUNT function

SELECT manager_id, COUNT(*) AS "Number of employees"
FROM employees
WHERE last_name = 'Anderson'
GROUP BY manager_id;

--GROUP BY Clause Using MIN function

SELECT product_type, MIN(quantity) AS "Lowest quantity"
FROM products
GROUP BY product_type;

--GROUP BY Clause Using MAX function

SELECT department, MAX(salary) AS "Highest salary"
FROM employees
GROUP BY department;

--HAVING Clause

SELECT expression1, expression2, ... expression_n, 
       aggregate_function (expression)
FROM tables
[WHERE conditions]
GROUP BY expression1, expression2, ... expression_n
HAVING having_condition;

--HAVING Clause Using SUM function

SELECT department, SUM(quantity) AS "Total Quantity"
FROM products
GROUP BY department
HAVING SUM(quantity) > 100;


--HAVING Clause Using COUNT function

SELECT city, COUNT(*) AS "Number of employees"
FROM employees
WHERE state = 'California'
GROUP BY city
HAVING COUNT(*) > 20;

--HAVING Clause Using MIN function

SELECT department, MIN(salary) AS "Lowest salary"
FROM employees
GROUP BY department
HAVING MIN(salary) >= 50000;


--HAVING Clause Using MAX function

SELECT last_name, MAX(salary) AS "Highest salary"
FROM employees
GROUP BY department
HAVING MAX(salary) > 34000;