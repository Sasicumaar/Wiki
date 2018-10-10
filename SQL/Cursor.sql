
		  DECLARE  @TIMEIN DATETIME       
		  DECLARE  @TIMEOUT DATETIME  
		   DECLARE  @EID INT      

		  DECLARE  @ID DATE       
		  DECLARE  @EmployeeID int      
DECLARE Employee_Cursor CURSOR FOR  
  select distinct CAST(TimeIn AS DATE),EmployeeID

   FROM [EYWorkforce].[dbo].[Workforce_Timelog]

    where CAST(TimeIn AS DATE) >'2017-03-14' AND CAST(TimeIn AS DATE) <'2017-03-23'
	and InsertType is null   and TimeOut is null
        
OPEN Employee_Cursor;  

FETCH NEXT FROM Employee_Cursor INTO @ID,@EmployeeID
WHILE @@FETCH_STATUS = 0  
   BEGIN  
     
	   WITH CTE AS (
SELECT
rownum = ROW_NUMBER() OVER (ORDER BY p.EmployeeID ),
  EmployeeID,TimeIn
FROM [EYWorkforce].[dbo].[Workforce_Timelog] p  WHERE EmployeeID=@EmployeeID
) 
 
         

--SELECT DISTINCT  CTE.EmployeeID ,CTE.TimeIn ,nex.TimeIn  FROM CTE 
--LEFT JOIN CTE nex ON nex.rownum = CTE.rownum + 1  

 --where CAST(CTE.TimeIn AS DATE)=@ID

 SELECT @TIMEIN=(SELECT top 1  CTE.TimeIn FROM CTE 
LEFT JOIN CTE nex ON nex.rownum = CTE.rownum + 1 where CTE.EmployeeID=@EmployeeID AND CAST(CTE.TimeIn AS DATE)=@ID)
;
WITH CTE1 AS (
SELECT
rownum = ROW_NUMBER() OVER (ORDER BY p.EmployeeID ),
  EmployeeID,TimeIn
FROM [EYWorkforce].[dbo].[Workforce_Timelog] p  WHERE EmployeeID=@EmployeeID
)
 SELECT @TIMEOUT=(SELECT top 1  nex.TimeIn FROM CTE1 
LEFT JOIN CTE1 nex ON nex.rownum = CTE1.rownum + 1 where CTE1.EmployeeID=@EmployeeID AND CAST(CTE1.TimeIn AS DATE)=@ID)
;
-- SELECT top 1  CTE.TimeIn ,nex.TimeIn,CTE.EmployeeID FROM CTE 
--LEFT JOIN CTE nex ON nex.rownum = CTE.rownum + 1 where CTE.EmployeeID=@EmployeeID AND CAST(CTE.TimeIn AS DATE)=@ID
SELECT @TIMEIN,@TIMEOUT,@EmployeeID


 update [EYWorkforce].[dbo].[Workforce_Timelog]
 set TimeOut= @TIMEOUT,UpdatedBy='System',UpdatedDate=@TIMEOUT
  WHERE TimeIn=@TIMEIN   AND EmployeeID=@EmployeeID
    --AND CAST(TimeIn AS DATE)=CAST(@TIMEOUT AS DATE)
   FETCH NEXT FROM Employee_Cursor INTO @ID,@EmployeeID
   END;  
CLOSE Employee_Cursor;  
DEALLOCATE Employee_Cursor;  
GO  

 	 