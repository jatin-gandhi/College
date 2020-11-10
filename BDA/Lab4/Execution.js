CREATE KEYSPACE Student WITH replication = 
{'class':'SimpleStrategy','replication_factor':3};

CREATE COLUMNFAMILY student_info
(
  student_id INT PRIMARY KEY
  ,student_name VARCHAR
  ,doj VARCHAR
  ,sem INT
  ,dept VARCHAR
);

BEGIN BATCH 
   INSERT INTO student_info (student_id, dept, doj, sem , student_name) 
  values(1 , 'CSE' , '15/12/2015' , 7, 'Ayush');
  INSERT INTO student_info (student_id, dept, doj, sem , student_name) 
  values(121, 'ISE', '12/02/2010', 6, 'Aman'); 
  INSERT INTO student_info (student_id, dept, doj, sem , student_name) 
  values(3 , 'CSE' , '21/06/2012' , 7, 'kavish');
  INSERT INTO student_info (student_id, dept, doj, sem , student_name) 
  values(4 , 'CSE' , '05/09/2018' , 7, 'raghav');
  INSERT INTO student_info (student_id, dept, doj, sem , student_name) 
  values(5 , 'CSE' , '15/12/2017' , 8, 'sanjeev');
APPLY BATCH;

UPDATE student_info
SET student_name = 'Ramesh'
WHERE student_id = 121;
