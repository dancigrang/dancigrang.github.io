function checkTime(a){10>a&&(a="0"+a);return a}function checkWeek(a){var b;switch(a){case 0:b="Sunday";break;case 1:b="Monday";break;case 2:b="Tuesday";break;case 3:b="Wednesday";break;case 4:b="Thursday";break;case 5:b="Friday";break;case 6:b="Saturday"}return b}
function checkMonth(a){switch(a){case 0:month="January";break;case 1:month="February";break;case 2:month="March";break;case 3:month="April";break;case 4:month="May";break;case 5:month="June";break;case 6:month="July";break;case 7:month="August";break;case 8:month="September";break;case 9:month="October";break;case 10:month="November";break;case 11:month="December"}return month}function daysInMonth(a,b){return(new Date(b,a,0)).getDate()}
function nice(){var a=new Date,b=a.getHours();12<b&&(b-=12);var g=a.getMinutes(),h;h=Math.round(g/60*1E4)/100;var g=checkTime(g),k=a.getSeconds(),k=checkTime(k);a.getMilliseconds();var n=a.getDate(),l=a.getDay(),l=checkWeek(l),m=a.getMonth(),m=checkMonth(m),p=a.getFullYear();a.getTime();var c=daysInMonth(a.getMonth(),a.getYear()),d=1440,e=60*a.getHours()+a.getMinutes(),d=e/d*100,d=Math.round(100*d)/100,f=10080,f=(e+1440*a.getDay())/f,a=Math.round(1E4*f)/100,c=(e+1440*(n-1))/(1440*c),c=100*c,c=Math.round(100*
c)/100,e=new Date,f=new Date(e.getFullYear(),0,0);yearPer=Math.round(Math.floor((e-f)/864E5)/365*1E4)/100;$("div#hour").html(b+":"+g+":"+k);$("div#hourPer").html(h+"%");$("#hourBar").attr("value",h);$("div#day").html(n);$("div#dayPer").html(d+"%");$("#dayBar").attr("value",d);$("div#week").html(l);$("div#weekPer").html(a+"%");$("#weekBar").attr("value",a);$("div#month").html(m);$("div#monthPer").html(c+"%");$("#monthBar").attr("value",c);$("div#year").html(p);$("div#yearPer").html(yearPer+"%");$("#yearBar").attr("value",
yearPer);setTimeout(function(){nice()},1E3)};