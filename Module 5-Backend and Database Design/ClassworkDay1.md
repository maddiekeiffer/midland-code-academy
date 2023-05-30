
## Now that we know our Schema, let's do the following (making sure that the table returns all useful data, not just the bare minimum)

1. Find all Customers in the USA or Mexico ordered Alphabetically by Contact Name
```SQL
SELECT * FROM Customers 
WHERE Customers.Country IN ("USA", "Mexico")
ORDER BY Customers.ContactName ASC;
```

2. Find all Products that cost more than 40
```SQL
SELECT * FROM Products
WHERE Products.Price > 40;
```

3. Find all Employees born before 1960.
```SQL
SELECT * FROM Employees
WHERE Employees.BirthDate < '1960-01-01';
```

4. Find all Products that are Beverages
```SQL
SELECT * FROM Products 
JOIN Categories ON Products.CategoryID = Categories.CategoryID
WHERE Categories.CategoryID = 1;
```

5. Find all Employees Who have ordered something that shipped to Spain
```SQL
SELECT Employees.FirstName AS First, Employees.LastName AS Last 
FROM Employees
JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
JOIN Customers ON Customers.CustomerID = Orders.CustomerID
WHERE Customers.Country = "Spain";

```

6. Find all Orders with a total price over 2000 sorted from most expensive to least expensive.
```SQL
SELECT OrderDetails.OrderID, SUM(OrderDetails.Quantity * Products.Price) AS Total FROM OrderDetails
JOIN Products ON Products.ProductID = OrderDetails.ProductID
GROUP BY OrderDetails.OrderID
HAVING Total > 2000
ORDER BY Total DESC;

```
