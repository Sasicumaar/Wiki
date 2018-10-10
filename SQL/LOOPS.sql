-- NESTED IF STATEMENT
DECLARE @site_value INT;
SET @site_value = -265;

IF @site_value < 25
   PRINT 'TechOnTheNet.com';
ELSE
BEGIN
   IF @site_value < 50
      PRINT 'CheckYourMath.com';
   ELSE
      PRINT 'BigActivities.com';
END;

GO

--WHILE LOOP STATEMENT

DECLARE @site_value INT;
SET @site_value = 0;

WHILE @site_value <= 10
BEGIN
   PRINT 'Inside WHILE LOOP on TechOnTheNet.com';
  SET @site_value = @site_value + 1;
END;

PRINT 'Done WHILE LOOP on TechOnTheNet.com';
GO


--FOR LOOP STATEMENT

DECLARE @cnt INT = 5;

WHILE @cnt < 10
BEGIN
   PRINT convert(  nvarchar(2),@cnt) +' ~ '+ 'Inside simulated FOR LOOP on TechOnTheNet.com';
   SET @cnt = @cnt + 1;
END;

PRINT 'Done simulated FOR LOOP on TechOnTheNet.com';
GO

--CONTINUE STATEMENT

 DECLARE @site_value INT;
SET @site_value = 0;

WHILE @site_value <= 10
BEGIN
   IF @site_value = 0
      BREAK;

   ELSE
   BEGIN
      SET @site_value = @site_value + 1;
      PRINT 'Inside WHILE LOOP on TechOnTheNet.com';
      CONTINUE;
   END;

END;

PRINT 'Done WHILE LOOP on TechOnTheNet.com';
GO

--BREAK STATEMENT
DECLARE @site_value INT;
SET @site_value = 0;

WHILE @site_value <= 10
BEGIN
   IF @site_value = 5
      BREAK;
   ELSE
      PRINT 'Inside WHILE LOOP on TechOnTheNet.com';

   SET @site_value = @site_value + 1;
END;

PRINT 'Done WHILE LOOP on TechOnTheNet.com';
GO