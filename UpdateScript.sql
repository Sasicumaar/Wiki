 
select *

   FROM [EYWorkforce].[dbo].[Workforce_Timelog]  

   where CAST(TimeIn AS DATE) >'2017-03-13' AND CAST(TimeIn AS DATE) <'2017-03-25'
   and ShiftID is   null
      

	  select *

   FROM [EYWorkforce].[dbo].[Workforce_Timelog]  

   where CAST(TimeIn AS DATE) >'2017-03-14' AND CAST(TimeIn AS DATE) <'2017-03-23'
   and ShiftID is  not null and EmployeeID=37
     select *

   FROM [EYWorkforce].[dbo].[Workforce_Timelog]  

   where CAST(TimeIn AS DATE) >'2017-03-01' AND CAST(TimeIn AS DATE) <'2017-03-25'
   and ShiftID is  not null and EmployeeID=37




	  select *

   FROM [EYWorkforce].[dbo].[Workforce_Timelog]  

   where  
      CAST(TimeIn AS DATE)!=CAST(TimeOut AS DATE)   AND  CAST(TimeIn AS DATE) >'2017-03-14' AND CAST(TimeIn AS DATE) <'2017-03-23'



 -- delete FROM [EYWorkforce].[dbo].[Workforce_Timelog] where TimeOut IS NUll  AND  CAST(TimeIn AS DATE) >'2017-03-14' AND CAST(TimeIn AS DATE) <'2017-03-23'

 --update [EYWorkforce].[dbo].[Workforce_Timelog] set TimeOut=NUll where CAST(TimeIn AS DATE)!=CAST(TimeOut AS DATE)   AND  CAST(TimeIn AS DATE) >'2017-03-14' AND CAST(TimeIn AS DATE) <'2017-03-23'

 -- update [EYWorkforce].[dbo].[Workforce_Timelog] set TimeOut=TimeIn where CAST(TimeIn AS DATE) >'2017-03-14' AND CAST(TimeIn AS DATE) <'2017-03-23'  and TimeOut is null
