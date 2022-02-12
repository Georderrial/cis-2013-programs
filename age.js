var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter Age"));
     floatDays = parseFloat(floatAge * 365.5);
     floatMonths = parseFloat(floatAge * 12);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14);
     alert("Age in days, months, weeks, and fortnights= " + floatDays + floatMonths + floatWeeks + intWeeks + intFortnights);