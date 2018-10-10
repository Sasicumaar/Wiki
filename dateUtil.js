/** 
* 获取本周、本季度、本月、上月的开端日期、停止日期 
*/ 
var now = new Date(); //当前日期 
var nowDayOfWeek = now.getDay(); //今天本周的第几天 
var nowDay = now.getDate(); //当前日 
var nowMonth = now.getMonth(); //当前月 
var nowYear = now.getYear(); //当前年 
nowYear += (nowYear < 2000) ? 1900 : 0; // 

var lastMonthDate = new Date(); //上月日期 
lastMonthDate.setDate(1); 
lastMonthDate.setMonth(lastMonthDate.getMonth()-1); 
var lastYear = lastMonthDate.getYear(); 
var lastMonth = lastMonthDate.getMonth(); 

//格局化日期：yyyy-MM-dd 
function formatDate(date) { 
	var myyear = date.getFullYear();
	
	var mymonth = date.getMonth()+1;
	mymonth=mymonth < 10 ? '0' + mymonth : mymonth;
	
	var myweekday = date.getDate(); 
	myweekday=myweekday < 10 ? '0'+myweekday : myweekday;
	
	return (myyear+"-"+mymonth + "-" + myweekday); 
} 

/**
 * 获取当前时间 yyyy/MM/dd
 * @returns {String}
 */
function getNowDate(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var day = now.getDate();
	var nowDate = year+"/"+month+"/"+day;
	return nowDate;
}

//格局化日期：yyyy-MM-dd HH:mm:ss
function formatDates(date) { 
	var myyear = date.getFullYear(); 
	
	var mymonth = date.getMonth()+1;
	mymonth=mymonth < 10 ? '0' + mymonth : mymonth;
	
	var myweekday = date.getDate();
	myweekday=myweekday < 10 ? '0' + myweekday : myweekday;
	
	var hh=date.getHours();      //获取当前小时数(0-23)
	hh=hh < 10 ? '0' + hh : hh;
	
	var mm=date.getMinutes();    //获取当前分钟数(0-59)
	mm=mm < 10 ? '0' + mm : mm;
	
	var ss=date.getSeconds();    //获取当前秒数(0-59)
	ss=ss < 10 ? '0' + ss : ss;
	
	return (myyear+"-"+mymonth + "-" + myweekday+" "+hh+":"+mm+":"+ss); 
}

function formatDatesReport(date) { 
	var myyear = date.getFullYear(); 
	
	var mymonth = date.getMonth()+1;
	mymonth=mymonth < 10 ? '0' + mymonth : mymonth;
	
	var myweekday = date.getDate();
	myweekday=myweekday < 10 ? '0' + myweekday : myweekday;
	
	var hh=date.getHours();      //获取当前小时数(0-23)
	hh=hh < 10 ? '0' + hh : hh;
	
	var mm=date.getMinutes();    //获取当前分钟数(0-59)
	mm=mm < 10 ? '0' + mm : mm;
	
	var ss=date.getSeconds();    //获取当前秒数(0-59)
	ss=ss < 10 ? '0' + ss : ss;
	
	return (myyear+"-"+mymonth + "-" + myweekday); 
}

//获得某月的天数 
function getMonthDays(myMonth){ 
	fushDate();//刷新获取当前系统时间
	var monthStartDate = new Date(nowYear, myMonth, 1); 
	var monthEndDate = new Date(nowYear, myMonth + 1, 1); 
	var days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24); 
	return days; 
} 

//获得本季度的开端月份 
function getQuarterStartMonth(){ 
	fushDate();//刷新获取当前系统时间
	var quarterStartMonth = 0; 
	if(nowMonth<3){ 
		quarterStartMonth = 0; 
	} 
	if(2<nowMonth && nowMonth<6){ 
		quarterStartMonth = 3; 
	} 
	if(5<nowMonth && nowMonth<9){ 
		quarterStartMonth = 6; 
	} 
	if(nowMonth>8){ 
		quarterStartMonth = 9; 
	} 
	return quarterStartMonth; 
} 

//获得本周的开端日期 
function getWeekStartDate() {
	fushDate();//刷新获取当前系统时间
	var weekStartDate =null; 
	if(_lang=="zh"){
		if(nowDayOfWeek==0){
			weekStartDate=new Date(nowYear, nowMonth, (nowDay - nowDayOfWeek -6));
		}else{
			weekStartDate=new Date(nowYear, nowMonth, (nowDay - nowDayOfWeek + 1));
		}
	}else{
		weekStartDate=new Date(nowYear, nowMonth, (nowDay - nowDayOfWeek));
	}
	return formatDate(weekStartDate); 
} 
//获得本周的停止日期 
function getWeekEndDate() { 
	fushDate();//刷新获取当前系统时间
	var weekEndDate = null;
	
	if(_lang=="zh"){
		weekEndDate=new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek + 1)); 
	}else{
		weekEndDate=new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek)); 
	}
	return formatDate(now); 
}

//获得上周的开端日期 
function getSzWeekStartDate() {
	fushDate();//刷新获取当前系统时间
	var weekStartDate =null; 
	
	if(_lang=="zh"){
		if(nowDayOfWeek==0){
			weekStartDate=new Date(nowYear, nowMonth, ((nowDay-7) - nowDayOfWeek -6));
		}else{
			weekStartDate=new Date(nowYear, nowMonth, ((nowDay-7) - nowDayOfWeek + 1));
		}
	}else{
		weekStartDate=new Date(nowYear, nowMonth, ((nowDay-7) - nowDayOfWeek));
	}
	
	return formatDate(weekStartDate); 
}

//获得上周的停止日期 
function getSzWeekEndDate() {
	fushDate();//刷新获取当前系统时间
	var weekEndDate =null; 
	if(_lang=="zh"){
		if(nowDayOfWeek==0){
			weekEndDate= new Date(nowYear, nowMonth, (nowDay-7) + (7 - nowDayOfWeek - 6)-1); 
		}else{
			weekEndDate= new Date(nowYear, nowMonth, (nowDay-7) + (7 - nowDayOfWeek + 1)-1); 
		}
		
	}else{
		weekEndDate= new Date(nowYear, nowMonth, (nowDay-7) + (7 - nowDayOfWeek)-1); 
	}
	return formatDate(weekEndDate); 
} 

//获得本月的开端日期 
function getMonthStartDate(){ 
	fushDate();//刷新获取当前系统时间
	var monthStartDate = new Date(nowYear, nowMonth, 1); 
	return formatDate(monthStartDate); 
} 

//获得本月的停止日期 
function getMonthEndDate(){ 
	fushDate();//刷新获取当前系统时间
	var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth)); 
	return formatDatesReport(now); 
} 


//获得上月开端时候 
function getLastMonthStartDate(flag){ 
	fushDate(flag);//刷新获取当前系统时间
	var lastMonthStartDate = new Date(nowYear, lastMonth, 1); 
	return formatDate(lastMonthStartDate); 
} 

//获得上月停止时候 
function getLastMonthEndDate(flag){ 
	fushDate(flag);//刷新获取当前系统时间
	var lastMonthEndDate = new Date(nowYear, lastMonth, getMonthDays(lastMonth)); 
	return formatDate(lastMonthEndDate); 
} 

//获得本季度的开端日期 
function getQuarterStartDate(){ 
	fushDate();//刷新获取当前系统时间
	var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1); 
	return formatDate(quarterStartDate); 
} 

//或的本季度的停止日期 
function getQuarterEndDate(){ 
	fushDate();//刷新获取当前系统时间
	var quarterEndMonth = getQuarterStartMonth() + 2; 
	var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth)); 
	return formatDate(quarterStartDate); 
} 


//对月份进行加减
function addMonthDate(mm){ 
	var d=new Date(); 
	var day = d.getDate(); 
	var month=d.getMonth()+1+mm;
	d.setMonth(month,day);
	
	month=d.getMonth();
	if(month<10){ 
		month = "0"+month; 
	} 
	if(day<10){ 
		day = "0"+day; 
	}
	var start;
	if(mm>=0){
		start = d.getFullYear()+"-"+month+"-"+day+" 00:00:00";
	}else{
		var hh=d.getHours();      //获取当前小时数(0-23)
		var mm=d.getMinutes();    //获取当前分钟数(0-59)
		var ss=d.getSeconds();    //获取当前秒数(0-59)
		if(hh<10){
			hh= "0" + hh; 
		}
		if(mm<10){
			mm= "0" + mm; 
		}
		if(ss<10){
			ss= "0" + ss; 
		}
		//start = d.getFullYear()+"-"+month+"-"+day+" "+hh+":"+mm+":"+ss;
		start = d.getFullYear()+"-"+month+"-"+day;
	}
	return start;
}

//对天数进行加减
function addDayDate(dd){ 
    var d=new Date(); 
    d.setDate(d.getDate()+dd);
    var day = d.getDate(); 
    var month=d.getMonth()+1;
    if(month<10){ 
        month = "0"+month; 
    } 
    if(day<10){ 
        day = "0"+day; 
    }
    var start;
    if(mm>=0){
        start = d.getFullYear()+"-"+month+"-"+day+" 00:00:00";
    }else{
        var hh=d.getHours();      //获取当前小时数(0-23)
        var mm=d.getMinutes();    //获取当前分钟数(0-59)
        var ss=d.getSeconds();    //获取当前秒数(0-59)
        if(hh<10){
            hh= "0" + hh; 
        }
        if(mm<10){
            mm= "0" + mm; 
        }
        if(ss<10){
            ss= "0" + ss; 
        }
        //start = d.getFullYear()+"-"+month+"-"+day+" "+hh+":"+mm+":"+ss;
        start = d.getFullYear()+"-"+month+"-"+day;
    }
    return start;
}

//对小时进行加减
function addHoursDate(hs){
    var d=new Date();
    var day = d.getDate(); 
    var month=d.getMonth()+1;
    if(month<10){ 
        month = "0"+month; 
    } 
    if(day<10){ 
        day = "0"+day; 
    }
    var start;
    if(mm>=0){
        start = d.getFullYear()+"-"+month+"-"+day+" 00:00:00";
    }else{
        var hh=d.getHours();      //获取当前小时数(0-23)
        d.setHours(hh+hs);
        hh=d.getHours();
        var mm=d.getMinutes();    //获取当前分钟数(0-59)
        var ss=d.getSeconds();    //获取当前秒数(0-59)
        if(hh<10){
            hh= "0" + hh; 
        }
        if(mm<10){
            mm= "0" + mm; 
        }
        if(ss<10){
            ss= "0" + ss; 
        }
        start = d.getFullYear()+"/"+month+"/"+day+" "+hh+":"+mm+":"+ss;
        //start = d.getFullYear()+"-"+month+"-"+day;
    }
    return start;
}
//UTC时间转用户对于时区 时间
function utcToTimeZone_bak2(dt,timeZone){
   var utc=new Date(dt).getTime();
   var bombay = utc + (3600000*timeZone); 
   return bombay;
}

function utcToTimeZone(timeZone){
	var now = new Date(); 
	var localTime = now.getTime();
	var localOffset = now.getTimezoneOffset() * 60000; 
	var utc = localTime + localOffset; 
	var  bombay = utc + (3600000*timeZone); 
	return bombay;
}

//UTC时间转用户对于时区 时间
function utcToTimeZone_bak(dt,timeZone){
    var stemp ;
    var dt_year = dt.getUTCFullYear() ;
    var dt_month = dt.getUTCMonth() + 1 ;
    var dt_day = dt.getUTCDate() ;
    var dt_hour = dt.getUTCHours() ;
    var dthdouble=dt_hour+timeZone;
    if(dthdouble<0){
       dt.setDate(dt_day-1);
       dt_day= dt.getUTCDate();
    }
    if(dthdouble>23){
        dt.setDate(dt_day+1);
        dt_day= dt.getUTCDate();
    }
    dt.setHours(dt_hour+timeZone);
    dt_hour=dt.getHours();
    var dt_minute = dt.getUTCMinutes() ;
    if(dthdouble%1 !== 0){
        var datevalue=dthdouble.toString().split(".");
        var minutedouble=Number(datevalue[1]);
        if(minutedouble<10){
          minutedouble=minutedouble+"0";  
        }
        var nowminutes=dt_minute+Number(minutedouble);
        dt.setUTCMinutes(nowminutes);
        dt_minute = dt.getUTCMinutes() ;
        if(nowminutes>=60){
            dt.setHours(dt_hour+1);
            dt_hour=dt.getHours();
        }
    }
    var dt_second = dt.getUTCSeconds() ;
    dt_year = dt_year.toString() ;
    if (dt_hour < 10)
        dt_hour = '0' + dt_hour ;

    if (dt_minute < 10)
        dt_minute = '0' + dt_minute ;

    if (dt_second < 10)
        dt_second = '0' + dt_second ;

    stemp = dt_year + '/' + dt_month + '/' + dt_day + '';
    stemp = stemp + ' ' + dt_hour + ":" + dt_minute + ":" + dt_second;
    return stemp ;
}

//刷新时间
function fushDate(flag){
	now = new Date(); //当前日期 
	nowDayOfWeek = now.getDay(); //今天本周的第几天 
	nowDay = now.getDate(); //当前日 
	nowMonth = now.getMonth(); //当前月 
	nowYear = now.getYear(); //当前年 
	nowYear += (nowYear < 2000) ? 1900 : 0; // 
	if(flag == "sy" && nowMonth == 0){
		nowYear = nowYear - 1;
	}
}

/**
 *获取世界UTC时间
 *  */
function getUTCDate(dt){
    var stemp ;
    var dt_year = dt.getUTCFullYear() ;
    var dt_month = dt.getUTCMonth() + 1 ;
    var dt_day = dt.getUTCDate() ;
    var dt_hour = dt.getUTCHours() ;
    var dt_minute = dt.getUTCMinutes() ;
    var dt_second = dt.getUTCSeconds() ;
    dt_year = dt_year.toString() ;

    if (dt_minute < 10)
        dt_minute = '0' + dt_minute ;

    if (dt_second < 10)
        dt_second = '0' + dt_second ;

    stemp = dt_year + '/' + dt_month + '/' + dt_day + '';
    stemp = stemp + ' ' + dt_hour + ":" + dt_minute + ":" + dt_second;
    return stemp ;
}

var timeZoneMap= new Map();
(function($) {
timeZoneMap.put("TZ_001","GMT-12:00");
timeZoneMap.put("TZ_002","GMT-11:00");
timeZoneMap.put("TZ_003","GMT-10:00");
timeZoneMap.put("TZ_004","GMT-09:00");
timeZoneMap.put("TZ_005","GMT-08:00");
timeZoneMap.put("TZ_006","GMT-08:00");
timeZoneMap.put("TZ_007","GMT-07:00");
timeZoneMap.put("TZ_008","GMT-07:00");
timeZoneMap.put("TZ_009","GMT-07:00");
timeZoneMap.put("TZ_010","GMT-06:00");
timeZoneMap.put("TZ_011","GMT-06:00");
timeZoneMap.put("TZ_012","GMT-06:00");
timeZoneMap.put("TZ_013","GMT-06:00");
timeZoneMap.put("TZ_014","GMT-05:00");
timeZoneMap.put("TZ_015","GMT-05:00");
timeZoneMap.put("TZ_016","GMT-05:00");
timeZoneMap.put("TZ_017","GMT-04:30");
timeZoneMap.put("TZ_018","GMT-04:00");
timeZoneMap.put("TZ_019","GMT-04:00");
timeZoneMap.put("TZ_020","GMT-04:00");
timeZoneMap.put("TZ_021","GMT-04:00");
timeZoneMap.put("TZ_022","GMT-04:00");
timeZoneMap.put("TZ_023","GMT-03:30");
timeZoneMap.put("TZ_024","GMT-03:00");
timeZoneMap.put("TZ_025","GMT-03:00");
timeZoneMap.put("TZ_026","GMT-03:00");
timeZoneMap.put("TZ_027","GMT-03:00");
timeZoneMap.put("TZ_028","GMT-03:00");
timeZoneMap.put("TZ_029","GMT-03:00");
timeZoneMap.put("TZ_030","GMT-02:00");
timeZoneMap.put("TZ_031","GMT-02:00");
timeZoneMap.put("TZ_032","GMT-01:00");
timeZoneMap.put("TZ_033","GMT-01:00");
timeZoneMap.put("TZ_034","GMT");
timeZoneMap.put("TZ_035","GMT");
timeZoneMap.put("TZ_036","GMT");
timeZoneMap.put("TZ_037","GMT");
timeZoneMap.put("TZ_038","GMT+01:00");
timeZoneMap.put("TZ_039","GMT+01:00");
timeZoneMap.put("TZ_040","GMT+01:00");
timeZoneMap.put("TZ_041","GMT+01:00");
timeZoneMap.put("TZ_042","GMT+01:00");
timeZoneMap.put("TZ_043","GMT+01:00");
timeZoneMap.put("TZ_044","GMT+02:00");
timeZoneMap.put("TZ_045","GMT+02:00");
timeZoneMap.put("TZ_046","GMT+02:00");
timeZoneMap.put("TZ_047","GMT+02:00");
timeZoneMap.put("TZ_048","GMT+02:00");
timeZoneMap.put("TZ_049","GMT+02:00");
timeZoneMap.put("TZ_050","GMT+02:00");
timeZoneMap.put("TZ_051","GMT+02:00");
timeZoneMap.put("TZ_052","GMT+02:00");
timeZoneMap.put("TZ_053","GMT+02:00");
timeZoneMap.put("TZ_054","GMT+03:00");
timeZoneMap.put("TZ_055","GMT+03:00");
timeZoneMap.put("TZ_056","GMT+03:00");
timeZoneMap.put("TZ_057","GMT+03:00");
timeZoneMap.put("TZ_058","GMT+03:30");
timeZoneMap.put("TZ_059","GMT+04:00");
timeZoneMap.put("TZ_060","GMT+04:00");
timeZoneMap.put("TZ_061","GMT+04:00");
timeZoneMap.put("TZ_062","GMT+04:00");
timeZoneMap.put("TZ_063","GMT+04:00");
timeZoneMap.put("TZ_064","GMT+04:00");
timeZoneMap.put("TZ_065","GMT+04:30");
timeZoneMap.put("TZ_066","GMT+05:00");
timeZoneMap.put("TZ_067","GMT+05:00");
timeZoneMap.put("TZ_068","GMT+05:30");
timeZoneMap.put("TZ_069","GMT+05:30");
timeZoneMap.put("TZ_070","GMT+05:45");
timeZoneMap.put("TZ_071","GMT+06:00");
timeZoneMap.put("TZ_072","GMT+06:00");
timeZoneMap.put("TZ_073","GMT+06:00");
timeZoneMap.put("TZ_074","GMT+06:30");
timeZoneMap.put("TZ_075","GMT+07:00");
timeZoneMap.put("TZ_076","GMT+07:00");
timeZoneMap.put("TZ_077","GMT+08:00");
timeZoneMap.put("TZ_078","GMT+08:00");
timeZoneMap.put("TZ_079","GMT+08:00");
timeZoneMap.put("TZ_080","GMT+08:00");
timeZoneMap.put("TZ_081","GMT+08:00");
timeZoneMap.put("TZ_082","GMT+08:00");
timeZoneMap.put("TZ_083","GMT+09:00");
timeZoneMap.put("TZ_084","GMT+09:00");
timeZoneMap.put("TZ_085","GMT+09:00");
timeZoneMap.put("TZ_086","GMT+09:30");
timeZoneMap.put("TZ_087","GMT+09:30");
timeZoneMap.put("TZ_088","GMT+10:00");
timeZoneMap.put("TZ_089","GMT+10:00");
timeZoneMap.put("TZ_090","GMT+10:00");
timeZoneMap.put("TZ_091","GMT+10:00");
timeZoneMap.put("TZ_092","GMT+10:00");
timeZoneMap.put("TZ_093","GMT+11:00");
timeZoneMap.put("TZ_094","GMT+11:00");
timeZoneMap.put("TZ_095","GMT+12:00");
timeZoneMap.put("TZ_096","GMT+12:00");
timeZoneMap.put("TZ_097","GMT+12:00");
timeZoneMap.put("TZ_098","GMT+12:00");
timeZoneMap.put("TZ_099","GMT+12:00");
timeZoneMap.put("TZ_100","GMT+13:00");
timeZoneMap.put("TZ_101","GMT+13:00");
});


