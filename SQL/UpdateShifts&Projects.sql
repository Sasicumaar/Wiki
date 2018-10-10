
		  DECLARE  @SHIFTID INT       
		  DECLARE  @proiD INT  
		   DECLARE  @EID INT      

		  DECLARE  @ID DATE       
		  DECLARE  @EmployeeID int      
DECLARE Employee_Cursor CURSOR FOR  
  select distinct  EmployeeID

   FROM [EYWorkforce].[dbo].[Workforce_Timelog]

    where  CAST(TimeIn AS DATE) >'2017-03-14' AND CAST(TimeIn AS DATE) <'2017-03-24'

	  and ShiftID IS null
        
OPEN Employee_Cursor;  

FETCH NEXT FROM Employee_Cursor INTO @EmployeeID
WHILE @@FETCH_STATUS = 0  
   BEGIN  
     
	 
	  

 set @SHIFTID=( SELECT top 1 ShiftID  FROM [EYWorkforce].[dbo].[Workforce_Timelog]  where EmployeeID=@EmployeeID  
 AND CAST(TimeIn AS DATE) ='2017-03-24')
 
 set @proiD=( SELECT top 1 ProjectID  FROM [EYWorkforce].[dbo].[Workforce_Timelog]  where EmployeeID=@EmployeeID  
 AND CAST(TimeIn AS DATE) ='2017-03-24')
   

 update [EYWorkforce].[dbo].[Workforce_Timelog]
 set ShiftID= @SHIFTID,ProjectID= @proiD,UpdatedBy='System' ,InsertType='Auto'
  WHERE ShiftID IS null AND EmployeeID=@EmployeeID
    AND CAST(TimeIn AS DATE) ='2017-03-23'  
   FETCH NEXT FROM Employee_Cursor INTO  @EmployeeID
   END;  
CLOSE Employee_Cursor;  
DEALLOCATE Employee_Cursor;  
GO  

 	 