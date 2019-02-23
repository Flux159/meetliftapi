-- THIS WORKS
select * from 
crosstab('
select comp_part_id, attempt_num, attempt_weight from attempt
where comp_event_id=2
order by comp_part_id,attempt_num') as ct(comp_part_id int4, attempt_1 numeric(7,2), attempt_2 numeric(7,2), attempt_3 numeric(7,2))


select person_name, attempt_1, attempt_2, attempt_3 from 
crosstab($$
select p.person_first_name || ' ' || p.person_last_name as person_name, attempt_num, attempt_weight
from attempt a
inner join comp_participant cp on a.comp_part_id=cp.comp_part_id
inner join person p on cp.person_id=p.person_id
where comp_event_id=2
order by person_name,attempt_num $$) as ct(person_name text, attempt_1 numeric(7,2), attempt_2 numeric(7,2), attempt_3 numeric(7,2))



select * from 
crosstab($$
select p.person_first_name || ' ' || p.person_last_name as person_name, ce.comp_event_order || ce.comp_event_name ||  attempt_num, attempt_weight
from attempt a
inner join comp_participant cp on a.comp_part_id=cp.comp_part_id
inner join comp_event ce on a.comp_event_id=ce.comp_event_id
inner join person p on cp.person_id=p.person_id
where ce.flight='B'
order by person_name,  ce.comp_event_order || ce.comp_event_name ||  attempt_num

$$) as ct(person_name text, attempt_1 numeric(7,2), attempt_2 numeric(7,2), attempt_3 numeric(7,2))



select * from 
crosstab($$
select p.person_first_name || ' ' || p.person_last_name as person_name, ce.comp_event_order || ce.comp_event_name ||  attempt_num, attempt_weight
from attempt a
inner join comp_participant cp on a.comp_part_id=cp.comp_part_id
inner join comp_event ce on a.comp_event_id=ce.comp_event_id
inner join person p on cp.person_id=p.person_id
where ce.flight='B'
order by person_name,  ce.comp_event_order || ce.comp_event_name ||  attempt_num

$$) as ct(person_name text, sqt1 numeric(7,2), sqt2 numeric(7,2), sqt3 numeric(7,2), prs1 numeric(7,2), prs2 numeric(7,2),prs3 numeric(7,2),
dl1 numeric(7,2) , dl2 numeric(7,2) ,dl3 numeric(7,2))


select a.comp_part_id, p.person_first_name || ' ' || p.person_last_name as person_name,
ce.comp_event_order || ce.comp_event_name ||  attempt_num, attempt_weight , attempt_result
from attempt a
inner join comp_participant cp on a.comp_part_id=cp.comp_part_id
inner join comp_event ce on a.comp_event_id=ce.comp_event_id
inner join person p on cp.person_id=p.person_id
where ce.flight='B'
order by a.comp_part_id, person_name,  ce.comp_event_order || ce.comp_event_name ||  attempt_num

-- do this on the server side 
select * from attempt a
inner join comp_participant cp on a.comp_part_id=cp.comp_part_id
inner join person p on cp.person_id=p.person_id

select * from comp_event order by comp_event_order