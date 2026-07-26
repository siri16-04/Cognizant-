/*==========================================================
 Exercise 3 : Stored Procedures
==========================================================*/


/*==========================================================
SCENARIO 1
Process Monthly Interest
==========================================================*/

-- Drop table if it already exists (ignore error if not found)
BEGIN
   EXECUTE IMMEDIATE 'DROP TABLE SavingsAccounts';
EXCEPTION
   WHEN OTHERS THEN NULL;
END;
/

-- Create Table
CREATE TABLE SavingsAccounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Balance NUMBER(10,2)
);

-- Insert Data
INSERT INTO SavingsAccounts VALUES (101,'Rahul',10000);
INSERT INTO SavingsAccounts VALUES (102,'Anjali',20000);
INSERT INTO SavingsAccounts VALUES (103,'Karan',15000);

COMMIT;

-- Check Data
SELECT * FROM SavingsAccounts;

-- Create Procedure
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN

    UPDATE SavingsAccounts
    SET Balance = Balance + (Balance * 0.01);

    COMMIT;

END;
/

-- Execute Procedure
BEGIN
    ProcessMonthlyInterest;
END;
/

-- Verify Output
SELECT * FROM SavingsAccounts;



/*==========================================================
SCENARIO 2
Update Employee Bonus
==========================================================*/

BEGIN
   EXECUTE IMMEDIATE 'DROP TABLE Employees';
EXCEPTION
   WHEN OTHERS THEN NULL;
END;
/

-- Create Table
CREATE TABLE Employees (

    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER(10,2)

);

-- Insert Data

INSERT INTO Employees VALUES (1,'Riya','HR',30000);
INSERT INTO Employees VALUES (2,'Amit','IT',50000);
INSERT INTO Employees VALUES (3,'Sneha','IT',45000);
INSERT INTO Employees VALUES (4,'Kiran','Finance',40000);

COMMIT;

-- Check Data
SELECT * FROM Employees;

-- Create Procedure

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(

    p_department IN VARCHAR2,
    p_bonus IN NUMBER

)

AS

BEGIN

    UPDATE Employees

    SET Salary = Salary + (Salary * p_bonus / 100)

    WHERE Department = p_department;

    COMMIT;

END;
/

-- Execute Procedure

BEGIN

    UpdateEmployeeBonus('IT',10);

END;
/

-- Verify Output

SELECT * FROM Employees;



/*==========================================================
SCENARIO 3
Transfer Funds
==========================================================*/

BEGIN
   EXECUTE IMMEDIATE 'DROP TABLE BankAccounts';
EXCEPTION
   WHEN OTHERS THEN NULL;
END;
/

-- Create Table

CREATE TABLE BankAccounts(

    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Balance NUMBER(10,2)

);

-- Insert Data

INSERT INTO BankAccounts VALUES(101,'Rahul',5000);
INSERT INTO BankAccounts VALUES(102,'Anjali',7000);

COMMIT;

-- Check Data

SELECT * FROM BankAccounts;

-- Create Procedure

CREATE OR REPLACE PROCEDURE TransferFunds(

    p_fromAccount NUMBER,
    p_toAccount NUMBER,
    p_amount NUMBER

)

AS

    v_balance NUMBER;

BEGIN

    SELECT Balance

    INTO v_balance

    FROM BankAccounts

    WHERE AccountID = p_fromAccount;

    IF v_balance >= p_amount THEN

        UPDATE BankAccounts

        SET Balance = Balance - p_amount

        WHERE AccountID = p_fromAccount;

        UPDATE BankAccounts

        SET Balance = Balance + p_amount

        WHERE AccountID = p_toAccount;

        COMMIT;

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

    END IF;

END;
/

-- Execute Procedure

BEGIN

    TransferFunds(101,102,1000);

END;
/

-- Verify Output

SELECT * FROM BankAccounts;