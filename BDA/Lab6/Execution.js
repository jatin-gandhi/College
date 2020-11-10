CREATE KEYSPACE Employee WITH replication = {'class':'SimpleStrategy','replication_factor':3};

CREATE COLUMNFAMILY employee_info(emp_id INT PRIMARY KEY,emp_name VARCHAR,desgination VARCHAR,doj VARCHAR,dept_name VARCHAR,salary INT);

BEGIN BATCH
        INSERT INTO employee_info(emp_id,dept_name,desgination,doj,emp_name,salary)values(120,'Development','CTO','10/11/2015','Ayush',2000000);
        INSERT INTO employee_info(emp_id,dept_name,desgination,doj,emp_name,salary)values(121,'HR','Employee','20/01/2011','Raghav',1500000);
        INSERT INTO employee_info(emp_id,dept_name,desgination,doj,emp_name,salary)values(122,'Maintainance','staff','10/07/2020','Sanjay',50000);
        INSERT INTO employee_info(emp_id,dept_name,desgination,doj,emp_name,salary)values(123,'IT','Assistant','25/07/2014','Tanya',100000);
APPLY BATCH;

select * from employee_info;

UPDATE employee_info SET emp_name = 'Aakash',dept_name = 'IT' WHERE emp_id = 121;

select * from employee_info;

ALTER TABLE employee_info ADD Project VARCHAR;

UPDATE employee_info SET project='TIP' WHERE emp_id=120;
UPDATE employee_info SET project='Sentiment Analysis' WHERE emp_id=121;
UPDATE employee_info SET project='Facial recognition' WHERE emp_id=123;

INSERT INTO employee_info(emp_id, dept_name, desgination, doj, emp_name,project,salary)values(124, 'PR','Senior Manager','8/8/2020','Load balancing server','Abhi',20000) USING TTL 60;
SELECT TTL(desgination) FROM employee_info where emp_id=124;

