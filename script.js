function loaded(){
				
				var past = new Date("nov 03 2015 12:18:00");
				var now = new Date();
				var timelapse = now.getTime() - past.getTime();
				
				var years = timelapse/(3600*1000*24*7*4*12);
				var unFloat_years = Math.floor(years);

				var extraYears = years - unFloat_years;
				var months = extraYears * 12;
				var unFloat_months = Math.floor(months);
				
				var extraMonths = months - unFloat_months;
				var weeks = extraMonths * 4;
				var unFloat_weeks = Math.floor(weeks);

				var extraWeeks = weeks - unFloat_weeks;
				var days = extraWeeks * 7;
				var unFloat_days = Math.floor(days);

				var extraDays = days - unFloat_days;
				var hours = extraDays * 24;
				var unFloat_hours = Math.floor(hours);

				var extraHours = hours - unFloat_hours;
				var min = extraHours * 60;
				var unFloat_min = Math.floor(min);
				
				var extraMin = min - unFloat_min;
				var seconds = extraMin * 60;
				var unFloat_seconds = Math.floor(seconds);

				function post_time(){
					if (unFloat_years >= 1){
						return unFloat_years + " years ago";
					} else if (unFloat_months >= 1){
						return unFloat_months + " months ago";
					} else if (unFloat_weeks >= 1){
						return unFloat_weeks + " weeks ago";
					} else if (unFloat_days >= 1){
						return unFloat_days + " days ago";
					} else if (unFloat_hours >= 1){
						return unFloat_hours + " hours ago";
					} else if (unFloat_min >= 1){
						return unFloat_min + " minutes ago";
					} else if (unFloat_seconds < 60){
						return "just now";
					}
				};
				document.getElementById("output").innerHTML = post_time();
				document.getElementById("output").title = past;

			};