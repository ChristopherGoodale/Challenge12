use tracker;

insert into departments
	(name)
values
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles
        (title, salary, departmentid)
values
        ('Sales Lead', 100000, 1),
        ('Salesperson', 800000,1),
        ('Lead Engineer', 150000, 2),
        ('Softrware Engineer',120000, 2),
        ('Account Manager',160000,3),
        ('Legal Team Lead', 250000, 4),
        ('Lawyer', 190000, 4);

Insert into employees
        (firstname, lastname, roleid, managerid)
values
        ('John','Doe',1, null),
        ('Mike','Chan',2,1),
        ('Ashley','Rodriguez',3,null),
        ('Kevin','Tupik',4,3),
        ('Kunal','Singh',5,null),
        ('Malia','Brown',6,5),
        ('Sarah','Lourd',7,null),
        ('Tom','Allen',8,7);