-- Create Customers Table
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    LoanInterestRate NUMBER(5,2),
    IsVIP VARCHAR2(5)
);

-- Insert Sample Data
INSERT INTO Customers VALUES (1,'Rahul',65,15000,8.50,'FALSE');
INSERT INTO Customers VALUES (2,'Anjali',45,8000,9.20,'FALSE');
INSERT INTO Customers VALUES (3,'Karan',70,25000,10.00,'FALSE');
INSERT INTO Customers VALUES (4,'Sneha',30,12000,11.00,'FALSE');

COMMIT;

-- Scenario 1
BEGIN
    FOR c IN (
        SELECT CustomerID, Age
        FROM Customers
    )
    LOOP
        IF c.Age > 60 THEN
            UPDATE Customers
            SET LoanInterestRate = LoanInterestRate * 0.99
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

SELECT * FROM Customers;