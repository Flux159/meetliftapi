

truncate table attempt;


insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (5,1,1,155);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (4,1,1,145);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (5,5,1,230);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (4,5,1,190);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (5,3,1,70);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (4,3,1,80);

select * from attempt

-- Squat - Flight B first attempt
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (1,2,1,220);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (2,2,1,190);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (6,2,1,250);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (3,2,1,215);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (7,2,1,225);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (8,2,1,270);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (9,2,1,250);
-- Squat - Flight B second attempt
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (1,2,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (2,2,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (6,2,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (3,2,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (7,2,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (8,2,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (9,2,2,null);

update attempt set attempt_weight=225 where comp_part_id=1 and comp_event_id=2 and attempt_num=2;
-- Squat - Flight B third attempt
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (1,2,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (2,2,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (6,2,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (3,2,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (7,2,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (8,2,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (9,2,3,null);


insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (1,4,1,105);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (2,4,1,125);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (3,4,1,125);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (6,4,1,135);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (7,4,1,110);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (8,4,1,145);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (9,4,1,127.5);

insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (1,4,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (2,4,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (3,4,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (6,4,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (7,4,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (8,4,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (9,4,2,null);

insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (1,4,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (2,4,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (3,4,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (6,4,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (7,4,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (8,4,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (9,4,3,null);


insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (1,6,1,240);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (3,6,1,280);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (9,6,1,320);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (7,6,1,265);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (8,6,1,320);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (2,6,1,265);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (6,6,1,290);

insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (1,6,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (3,6,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (9,6,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (7,6,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (8,6,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (2,6,2,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (6,6,2,null);


insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (1,6,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (3,6,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (9,6,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (7,6,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (8,6,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (2,6,3,null);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (6,6,3,null);







insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (13,8,1,305);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (14,8,1,295);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (15,8,1,260);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (11,8,1,245);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (10,8,1,225);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (12,8,1,215);

insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (13,10,1,160);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (14,10,1,150);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (12,10,1,125);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (15,10,1,135);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (11,10,1,135);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (10,10,1,140)
;
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (15,12,1,315);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (11,12,1,280);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (12,12,1,220);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (13,12,1,345);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (14,12,1,330);
insert into attempt (comp_part_id,comp_event_id, attempt_num ,attempt_weight ) values (10,12,1,285);
