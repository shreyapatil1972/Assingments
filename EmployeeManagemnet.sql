create database employee;

use employee;

create table departments(
department_id INT AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(50) NOT NULL
);

create table salaries(
salary_id int auto_increment primary key,
base_salary decimal(10,2),
bonus decimal(10,2)
);

create TABLE dep_employees(
employee_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
phone_number VARCHAR(15),
hire_date DATE NOT NULL,
job_title VARCHAR(50) NOT NULL,
department_id INT,
salary_id INT,
FOREIGN KEY (department_id) REFERENCES departments(department_id),
FOREIGN KEY (salary_id) REFERENCES salaries(salary_id)
);

INSERT INTO departments (department_name) VALUES
('Human Resources'),
('Enigneering'),
('Sales'),
('Marketing');

INSERT INTO salaries (base_salary, bonus) VALUES
(50000,5000),
(80000,10000),
(45000,3000),
(60000,7000);

INSERT INTO dep_employees (first_name, last_name, email, phone_number, hire_date, job_title, department_id,salary_id) VALUES
('Rohit','Sharma','rohit@gmail.com','123456789','2024-03-25','Software Enginner', 2 ,2);

INSERT INTO dep_employees (first_name, last_name, email, phone_number, hire_date, job_title, department_id,salary_id) VALUES
('virat','Kohli','virat@gmail.com','12343210','2024-09-25','HR', 1 ,1),
('Ms','Dhoni','Ms@gmail.com','123876789','2023-03-25','Sales Representative', 3 ,3),
('Hardik','Pandya','hardik@gmail.com','1238787889','2024-012-25','Marketing Specialist', 4 ,4);


SELECT * From dep_employees;

select e.employee_id, e.first_name, e.last_name, d.department_name FROM dep_employees e
JOIN departments d ON e.department_id = d.department_id;

select e.employee_id, e.first_name, e.last_name,s.base_salary, s.bonus FROM dep_employees e
JOIN salaries s ON e.salary_id = s.salary_id;

select first_name, last_name, hire_date From dep_employees
where hire_date > '2023-07-12';

update dep_employees set salary_id = 3 where employee_id = 1;

delete From dep_employees where employee_id = 4;
select * from dep_employees;




