create table person (
 	person_id    		serial primary key,
	person_last_name    VARCHAR(40) not null,
	person_first_name 	varchar(40) not null,
	person_dob 			date,
	gender				varchar(5) not null, 
	email 				text not null
);

create table competition (
	comp_id serial primary key, 
	comp_name varchar(255) not null,
	weight_unit char(2) not null, -- kilos or pounds
	comp_date date not null,
	weight_time char(2) not null --weight in or weight out
);

create table weight_class (
	weight_class_id serial primary key, 
	gender varchar(5),
	weight_class_name varchar(255),
	weight_class_lower numeric(6,2),
	weight_class_upper numeric(6,2)
);

create table events (
	eventid serial primary key,
	event_name varchar(255) not null
);

create table flight(
	flight_id serial primary key
	flight_name varchar(10) not null,
)

DROP TABLE comp_event
create table comp_event (
	comp_event_id serial primary key,
	comp_id serial references competition(comp_id),
	event_id serial references events(eventid), 
	comp_event_name varchar(255), -- example Squat Flight A
	comp_event_order int,  -- make this serial? 
	no_of_attempts int, 
	flight char(1),
	comp_short_name varchar(3)
);

-- drop table comp_participant

create table comp_participant (
	comp_part_id serial primary key, 
	person_id serial references person(person_id),
	comp_id serial references competition(comp_id),
	weight_class_id serial references  weight_class (weight_class_id), -- this may change day of
	flight char(1) null,  -- this will be set prior to event, after partipant signs up
	team varchar(255) not null,
	est_weight numeric(6,2),
	final_weight numeric(6,2),  -- this is set day of 
	squat_rh int, -- rack height
	bench_rh int -- rack height
)

-- drop table attempt;
create table attempt(
	attemptid serial primary key, 
	comp_part_id serial references comp_participant(comp_part_id),
	comp_event_id serial references comp_event(comp_event_id),
	attempt_num int,
	attempt_weight numeric(7,2) null,
	attempt_result boolean -- true is good lift, false is bad lift
)


select * from comp_event