insert into weight_class(gender, weight_class_name,weight_class_lower, weight_class_upper) values ('f','123lbs and under',0.00,123.25);
insert into weight_class(gender, weight_class_name,weight_class_lower, weight_class_upper) values ('f','132lbs and under',123.26,132.25);
insert into weight_class(gender, weight_class_name,weight_class_lower, weight_class_upper) values ('f','148lbs and under',132.26,148.25);
insert into weight_class(gender, weight_class_name,weight_class_lower, weight_class_upper) values ('f','165lbs and under',148.26,165.25);
insert into weight_class(gender, weight_class_name,weight_class_lower, weight_class_upper) values ('f','Over 165lbs',165.26,999.99);


insert into events(event_name) values ('Back Squat');
insert into events(event_name) values ('Bench Press');
insert into events(event_name) values ('Deadlift');

-- Create competition event
-- meet direct adds all of the events, their order and the flights 

insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,1,'Squat - Flight A',1,3,'A');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,1,'Squat - Flight B',2,3,'B');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,2,'Bench - Flight A',3,3,'A');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,2,'Bench - Flight B',4,3,'B');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,3,'Deadlift - Flight A',5,3,'A');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,3,'Deadlift - Flight B',6,3,'B');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,1,'Squat - Flight C',7,3,'C');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,1,'Squat - Flight D',8,3,'D');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,2,'Bench - Flight C',9,3,'C');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,2,'Bench - Flight D',10,3,'D');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,3,'Deadlift - Flight C',11,3,'C');
insert into comp_event(comp_id,event_id,comp_event_name,comp_event_order,no_of_attempts,flight) 
values (1,3,'Deadlift - Flight D',12,3,'D');

-- participants will add their info which will populate the person table

insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Ashley','Nicole','1973-2-22','f','nicole@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Moreno','Mandy','1979-3-20','f','mandy@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Brown','Jessie','1988-3-23','f','jessie@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Berrios','Michelle','1975-5-1','f','michelle@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Armstrong','Leah','1976-4-2','f','leah@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Hejtmanek','Katie','1978-3-2','f','katie@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Muckerman','Amy','1972-3-26','f','amy@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Nagle','Charlie','1982-5-9','f','charlie@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Rose','Kayleigh','1987-5-4','f','kayleigh@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Johnson','Rachael','1991-3-5','f','rachael@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Bruce','Halston','1984-3-25','f','halston@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Lemos','Thaisa','1985-2-17','f','thaisa@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Summers','Morit','1987-4-15','f','morit@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Blake','Lorin','1976-6-2','f','lorin@example.com');
insert into person (person_last_name, person_first_name, person_dob, gender, email)
values('Dias','Shannon','1994-1-18','f','shannon@example.com');

-- participants sign up for the competition, 
-- input their expected weight and expected weight class 

-- participants set their openers

insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values (1,1,4,'B','CFSBK',110)
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values (2,1,4,'B','Prospect Heights CF',120);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(3,1,4,'B','CFSBK',105);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(4,1,5,'A','CFSBK',130);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(5,1,5,'A','CFSBK',132);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(6,1,5,'B','Progressive Rehab',125);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(7,1,6,'B','Prospect Heights CF',140);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(8,1,6,'B','Progressive Rehab',145);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(9,1,6,'B','S&S',140);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(10,1,7,'D','',160);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(11,1,7,'D','',164);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(12,1,7,'D','CFSBK',150);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(13,1,8,'D','CFSBK',225);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(14,1,8,'D','S&S',180);
insert into comp_participant (person_id,comp_id,weight_class_id,flight,team,est_weight) values(15,1,8,'D','CFSBK',220);

-- meet director sets flights 


-- weight in; set final weight and update weight class, 
truncate table attempt



select c.comp_name, p.person_last_name, p.person_first_name, cp.flight, w.weight_class_name,  ce.comp_event_name, 
cp.comp_part_id, ce.comp_event_id, ce.comp_event_order
from comp_participant cp
inner join competition c on cp.comp_id=c.comp_id
inner join person p on cp.person_id = p.person_id
inner join weight_class w on cp.weight_class_id = w.weight_class_id
left join comp_event ce on cp.comp_id=ce.comp_id and cp.flight=ce.flight
order by ce.comp_event_order 

select * from attempt