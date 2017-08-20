
var datepickr=function(d,c){var f,h,a=[],k;datepickr.prototype=datepickr.init.prototype;h=function(a){a._datepickr&&a._datepickr.destroy();a._datepickr=new datepickr.init(a,c);return a._datepickr};if(d.nodeName)return h(d);f=datepickr.prototype.querySelectorAll(d);if(1===f.length)return h(f[0]);for(k=0;k<f.length;k++)a.push(h(f[k]));return a};
datepickr.init=function(d,c){var f,h,a=this,k={dateFormat:"F j, Y",altFormat:null,altInput:null,minDate:null,maxDate:null,shorthandCurrentMonth:!1},l=document.createElement("div"),t=document.createElement("span"),u=document.createElement("table"),v=document.createElement("tbody"),g,m=new Date,B,n,p,w,C,r,x,D,E,s,F,G,y,H,z,A,I;l.className="datepickr-calendar";t.className="datepickr-current-month";c=c||{};B=function(){g=document.createElement("div");g.className="datepickr-wrapper";a.element.parentNode.insertBefore(g,
a.element);g.appendChild(a.element)};f={year:function(){return m.getFullYear()},month:{integer:function(){return m.getMonth()},string:function(a){var e=m.getMonth();return p(e,a)}},day:function(){return m.getDate()}};h={string:function(){return p(a.currentMonthView,a.config.shorthandCurrentMonth)},numDays:function(){return 1===a.currentMonthView&&(0===a.currentYearView%4&&0!==a.currentYearView%100||0===a.currentYearView%400)?29:a.l10n.daysInMonth[a.currentMonthView]}};n=function(b,e){var q="",d=new Date(e),
c={d:function(){var a=c.j();return 10>a?"0"+a:a},D:function(){return a.l10n.weekdays.shorthand[c.w()]},j:function(){return d.getDate()},l:function(){return a.l10n.weekdays.longhand[c.w()]},w:function(){return d.getDay()},F:function(){return p(c.n()-1,!1)},m:function(){var a=c.n();return 10>a?"0"+a:a},M:function(){return p(c.n()-1,!0)},n:function(){return d.getMonth()+1},U:function(){return d.getTime()/1E3},y:function(){return String(c.Y()).substring(2)},Y:function(){return d.getFullYear()}},f=b.split("");
a.forEach(f,function(a,b){c[a]&&"\\"!==f[b-1]?q+=c[a]():"\\"!==a&&(q+=a)});return q};p=function(b,e){return!0===e?a.l10n.months.shorthand[b]:a.l10n.months.longhand[b]};w=function(b,e,c,d){return b===d&&a.currentMonthView===e&&a.currentYearView===c};C=function(){var b=document.createElement("thead"),e=a.l10n.firstDayOfWeek,c=a.l10n.weekdays.shorthand;0<e&&e<c.length&&(c=[].concat(c.splice(e,c.length),c.splice(0,e)));b.innerHTML="<tr><th>"+c.join("</th><th>")+"</th></tr>";u.appendChild(b)};r=function(){var b=
(new Date(a.currentYearView,a.currentMonthView,1)).getDay(),c=h.numDays(),d=document.createDocumentFragment(),g=document.createElement("tr"),k,l="",p="",m="",n,b=b-a.l10n.firstDayOfWeek;0>b&&(b+=7);k=b;v.innerHTML="";0<b&&(g.innerHTML+='<td colspan="'+b+'">&nbsp;</td>');for(b=1;b<=c;b++){7===k&&(d.appendChild(g),g=document.createElement("tr"),k=0);l=w(f.day(),f.month.integer(),f.year(),b)?" today":"";a.selectedDate&&(p=w(a.selectedDate.day,a.selectedDate.month,a.selectedDate.year,b)?" selected":"");
if(a.config.minDate||a.config.maxDate)n=(new Date(a.currentYearView,a.currentMonthView,b)).getTime(),m="",a.config.minDate&&n<a.config.minDate&&(m=" disabled"),a.config.maxDate&&n>a.config.maxDate&&(m=" disabled");g.innerHTML+='<td class="'+l+p+m+'"><span class="datepickr-day">'+b+"</span></td>";k++}d.appendChild(g);v.appendChild(d)};x=function(){t.innerHTML=h.string()+" "+a.currentYearView};D=function(){var a=document.createElement("div");a.className="datepickr-months";a.innerHTML='<span class="datepickr-prev-month">&lt;</span><span class="datepickr-next-month">&gt;</span>';
a.appendChild(t);x();l.appendChild(a)};E=function(){0>a.currentMonthView&&(a.currentYearView--,a.currentMonthView=11);11<a.currentMonthView&&(a.currentYearView++,a.currentMonthView=0)};s=function(b){if(b.target!==a.element&&b.target!==g&&(b=b.target.parentNode,b!==g))for(;b!==g;)if(b=b.parentNode,null===b){A();break}};F=function(b){b=b.target;var c=b.className;c&&("datepickr-prev-month"===c||"datepickr-next-month"===c?("datepickr-prev-month"===c?a.currentMonthView--:a.currentMonthView++,E(),x(),r()):
"datepickr-day"!==c||a.hasClass(b.parentNode,"disabled")||(a.selectedDate={day:parseInt(b.innerHTML,10),month:a.currentMonthView,year:a.currentYearView},b=(new Date(a.currentYearView,a.currentMonthView,a.selectedDate.day)).getTime(),a.config.altInput&&(a.config.altInput.value=a.config.altFormat?n(a.config.altFormat,b):n(a.config.dateFormat,b)),a.element.value=n(a.config.dateFormat,b),A(),r()))};G=function(){D();C();r();u.appendChild(v);l.appendChild(u);g.appendChild(l)};y=function(){return"INPUT"===
a.element.nodeName?"focus":"click"};H=function(){a.addEventListener(a.element,y(),z);a.addEventListener(l,"click",F)};z=function(){a.addEventListener(document,"click",s);a.addClass(g,"open")};A=function(){a.removeEventListener(document,"click",s);a.removeClass(g,"open")};I=function(){var b,c;a.removeEventListener(document,"click",s);a.removeEventListener(a.element,y(),z);b=a.element.parentNode;b.removeChild(l);c=b.removeChild(a.element);b.parentNode.replaceChild(c,b)};(function(){var b,e;a.config=
{};a.destroy=I;for(b in k)a.config[b]=c[b]||k[b];a.element=d;a.element.value&&(e=Date.parse(a.element.value));e&&!isNaN(e)?(e=new Date(e),a.selectedDate={day:e.getDate(),month:e.getMonth(),year:e.getFullYear()},a.currentYearView=a.selectedDate.year,a.currentMonthView=a.selectedDate.month,a.currentDayView=a.selectedDate.day):(a.selectedDate=null,a.currentYearView=f.year(),a.currentMonthView=f.month.integer(),a.currentDayView=f.day());B();G();H()})();return a};
datepickr.init.prototype={hasClass:function(d,c){return d.classList.contains(c)},addClass:function(d,c){d.classList.add(c)},removeClass:function(d,c){d.classList.remove(c)},forEach:function(d,c){[].forEach.call(d,c)},querySelectorAll:document.querySelectorAll.bind(document),isArray:Array.isArray,addEventListener:function(d,c,f,h){d.addEventListener(c,f,h)},removeEventListener:function(d,c,f,h){d.removeEventListener(c,f,h)},l10n:{weekdays:{shorthand:"Sun Mon Tue Wed Thu Fri Sat".split(" "),longhand:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},
months:{shorthand:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),longhand:"January February March April May June July August September October November December".split(" ")},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0}};

var icsFormatter = function() {
	'use strict';

	if (navigator.userAgent.indexOf('MSIE') > -1 && navigator.userAgent.indexOf('MSIE 10') == -1) {
		console.log('Unsupported Browser');
		return;
	}

	var SEPARATOR = (navigator.appVersion.indexOf('Win') !== -1) ? '\r\n' : '\n';
	var calendarEvents = [];
	var calendarName = 'Calendar';
	var prodName = '-//eastpiger//eastpiger.com//ICS: iCalendar Generator';

	return {
		/**
		 * Returns events array
		 * @return {array} Events
		 */
		'events': function() {
			return calendarEvents;
		},

		'setCalendarName': function(name) {
			calendarName = name;
		},

		'buildCalendarStart': function() {
			var calendarStart = [
				'BEGIN:VCALENDAR',
				'VERSION:2.0',
				'CALSCALE:GREGORIAN',
			];

			calendarStart.push('PRODID:' + prodName);

			calendarStart.push('X-WR-CALNAME:' + calendarName);

			var ret = calendarStart.join(SEPARATOR);

			return ret;
		},

		'buildCalendarEnd': function() {
			var ret = 'END:VCALENDAR';

			return ret;
		},

		'addEvent': function(subject, description, location, begin, end, rrul, url, categories, alarms) {
			calendarEvents.push({
				subject: subject,
				description: description,
				location: location,
				begin: begin,
				end: end,
				rrul: rrul,
				url: url,
				categories: categories,
				alarms: alarms
			 });
		},

		'formatEvent': function(subject, description, location, begin, end, rrul, url, categories, alarms) {
			function time_convert(t) {
				var time_convert_year = ("0000" + (t.getUTCFullYear().toString())).slice(-4);
				var time_convert_month = ("00" + ((t.getUTCMonth() + 1).toString())).slice(-2);
				var time_convert_day = ("00" + ((t.getUTCDate()).toString())).slice(-2);
				var time_convert_hours = ("00" + (t.getUTCHours().toString())).slice(-2);
				var time_convert_minutes = ("00" + (t.getUTCMinutes().toString())).slice(-2);
				var time_convert_seconds = ("00" + (t.getUTCSeconds().toString())).slice(-2);
				var time_convert_time = 'T' + time_convert_hours + time_convert_minutes + time_convert_seconds + 'Z';
				var ret = time_convert_year + time_convert_month + time_convert_day + time_convert_time;
				return ret;
			}

			var calendarEventArray = [];

			calendarEventArray.push('BEGIN:VEVENT', 'CLASS:PUBLIC', 'X-MICROSOFT-CDO-BUSYSTATUS:BUSY', 'X-MICROSOFT-CDO-IMPORTANCE:1');

			if (!(typeof begin === 'undefined'))
				calendarEventArray.push('DTSTART:' + time_convert(begin));

			if (!(typeof end === 'undefined'))
				calendarEventArray.push('DTEND:' + time_convert(end));

			if (!(typeof rrul === 'undefined')) {
				var rrul_str = '';

				if (!(typeof rrul.FREQ === 'undefined'))
					rrul_str += 'FREQ=' + rrul.FREQ + ';';

				if (!(typeof rrul.COUNT === 'undefined'))
					rrul_str += 'COUNT=' + rrul.COUNT + ';';

				if (!(typeof rrul.INTERVAL === 'undefined'))
					rrul_str += 'INTERVAL=' + rrul.INTERVAL + ';';

				calendarEventArray.push('RRULE:' + rrul_str);
			}

			if (!(typeof subject === 'undefined'))
				calendarEventArray.push('SUMMARY:' + subject);

			if (!(typeof description === 'undefined'))
				calendarEventArray.push('DESCRIPTION:' + description);

			if (!(typeof location === 'undefined'))
				calendarEventArray.push('LOCATION:' + location);

			if (!(typeof categories === 'undefined')) {
				calendarEventArray.push('CATEGORIES:' + categories.toString());
			}

			if (!(typeof alarms === 'undefined')) {
				for (var i in alarms) {
					calendarEventArray.push('BEGIN:VALARM');

					if (!(typeof alarms[i].ACTION === 'undefined'))
						calendarEventArray.push('ACTION:' + alarms[i].ACTION);

					if (!(typeof alarms[i].TRIGGER === 'undefined'))
						calendarEventArray.push('TRIGGER:' + alarms[i].TRIGGER);

					if (!(typeof alarms[i].DESCRIPTION === 'undefined'))
						calendarEventArray.push('DESCRIPTION:' + alarms[i].DESCRIPTION);

					if (!(typeof alarms[i].REPEAT === 'undefined'))
						calendarEventArray.push('REPEAT:' + (alarms[i].REPEAT?1:0));

					if (!(typeof alarms[i].DURATION === 'undefined'))
						calendarEventArray.push('DURATION:' + alarms[i].DURATION);

					calendarEventArray.push('END:VALARM');
				}
				calendarEventArray.push('CATEGORIES:' + categories.toString());
			}

			calendarEventArray.push('TRANSP:TRANSPARENT', 'END:VEVENT');

			var ret = calendarEventArray.join(SEPARATOR);

			return ret;
		},

		'formatAllEvents': function() {
			var formatedEvents = [];
			for (var i in calendarEvents) {
				var t = this.formatEvent(
					calendarEvents[i].subject,
					calendarEvents[i].description,
					calendarEvents[i].location,
					calendarEvents[i].begin,
					calendarEvents[i].end,
					calendarEvents[i].rrul,
					calendarEvents[i].url,
					calendarEvents[i].categories,
					calendarEvents[i].alarms
				);
				if (t)
					formatedEvents.push(t);
			}

			var ret =  this.buildCalendarStart() + SEPARATOR + formatedEvents.join(SEPARATOR) + SEPARATOR + this.buildCalendarEnd();

			return ret;
		},

		/**
		 * Download calendar using the saveAs function from filesave.js
		 * @param  {string} filename Filename
		 * @param  {string} ext      Extention
		 */
		'download': function(filename, ext) {
			var formatedEvents = this.formatAllEvents();
			if (formatedEvents) {
				ext = (typeof ext !== 'undefined') ? ext : '.ics';
				filename = (typeof filename !== 'undefined') ? filename : 'calendar';
				window.open("data:text/calendar;charset=UTF-8," + encodeURI(formatedEvents));
			} else return false;
		}
	};
};

if (Boolean(window.$) && Boolean(window.table0)) {
	var classTable = [
		[8, 15, 9, 0],
		[9, 10, 9, 55],
		[10, 15, 11, 0],
		[11, 10, 11, 55],
		[13, 0, 13, 45],
		[13, 55, 14, 40],
		[15, 0, 15, 45],
		[15, 55, 16, 40],
		[16, 50, 17, 35],
		[17, 45, 18, 30],
		[18, 40, 19, 25],
		[19, 35, 20, 20],
		[20, 30, 21, 15]
	]
	var eventsList = [];

	function clear() {
		var styleElement = document.getElementById('styles_js');
		if (styleElement) styleElement.parentElement.removeChild(styleElement);

		var containerElement = document.getElementById('icsFormatterbg');
		if (containerElement) containerElement.parentElement.removeChild(containerElement);

		if (table0)
			for (var i in table0.activities)
				for (var j in table0.activities[i])
					table0.activities[i][j].icsFormatted = undefined;
	}

	function init() {
		function loadCSS() {
			var styleElement = document.createElement('style');
			styleElement.type = 'text/css';
			styleElement.id = 'styles_js';
			document.getElementsByTagName('head')[0].appendChild(styleElement);
			styleElement.appendChild(document.createTextNode('#icsFormatterbg{display:none;position:fixed;top:0px;left:0px;bottom:0px;right:0px;z-index:90001;background:rgba(0, 0, 0, 0.7);}\
				#icsFormatterContainer{position:relative;background:#E3E3E3;border-radius:3px;box-shadow: 0 1px 2px #aaa;margin:100px auto;width:600px;max-width:80%;height:300px;max-height:60%;padding: 20px;}\
				#icsFormatterClose{position:absolute;right:20px;top:20px;padding:5px;}\
				#icsFormatterDownload{padding:10px;}\
				#icsFormatterDate{text-align:center}\
				.datepickr-wrapper{display:inline-block;position:relative}.datepickr-calendar{font-family:"Trebuchet MS",Tahoma,Verdana,Arial,sans-serif;font-size:12px;background-color:#eee;color:#333;border:1px solid #ddd;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;padding:2px;display:none;position:absolute;top:100%;left:0;z-index:100}.open .datepickr-calendar{display:block}.datepickr-calendar .datepickr-months{background-color:#3aa6f6;border:1px solid #087ee7;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;color:#fff;padding:2px;text-align:center;font-size:120%}.datepickr-calendar .datepickr-next-month,.datepickr-calendar .datepickr-prev-month{color:#fff;text-decoration:none;padding:0 .4em;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;cursor:pointer}.datepickr-calendar .datepickr-prev-month{float:left}.datepickr-calendar .datepickr-next-month{float:right}.datepickr-calendar .datepickr-current-month{padding:0 .5em}.datepickr-calendar .datepickr-next-month:hover,.datepickr-calendar .datepickr-prev-month:hover{background-color:#3aa6f6;color:#087ee7}.datepickr-calendar table{border-collapse:collapse;padding:0;width:100%}.datepickr-calendar thead{font-size:90%}.datepickr-calendar td,.datepickr-calendar th{width:14.3%}.datepickr-calendar th{text-align:center;padding:5px}.datepickr-calendar td{text-align:right;padding:1px}.datepickr-calendar .datepickr-day{display:block;color:#1c94c4;background-color:#f6f6f6;border:1px solid #ccc;padding:5px;cursor:pointer}.datepickr-calendar .datepickr-day:hover{color:#0573c7;background-color:#cef2fd;border:1px solid #09abfb}.datepickr-calendar .today .datepickr-day{color:#0573c7;background-color:#cef2fd;border:1px solid #09abfb}.datepickr-calendar .selected .datepickr-day{background-color:#1c94c4;color:#f6f6f6}.datepickr-calendar .disabled .datepickr-day,.datepickr-calendar .disabled .datepickr-day:hover{background-color:#eee;border:1px dotted #ccc;color:#bbb;cursor:default}'));
		}

		function loadHTML() {
			$('body').append('<div id="icsFormatterbg" class="icsFormatterbg">\
				<div id="icsFormatterContainer">\
					<h3>Course Table ICS Formatter <small>ver. 0.3 <a href="http://www.eastpiger.com">eastpiger</a> <a href="https://www.geekpie.org">GeekPie</a></small></h3><br/><br/>\
					<button id="icsFormatterClose" class="ui-button">X</button>\
					<h3 style="text-align:center;"><strong>Semester：<span id="icsFormatterSemester"></span></strong></h3>\
					<p style="text-align:center;"><span id="icsFormatterTasks"></span> tasks found.</p><br/>\
					<p style="text-align:center;">Tell me the Monday of week #1 in this semester：<br/><input type="text" id="icsFormatterDate" readonly></p><br/>\
					<p style="text-align:center;"><button id="icsFormatterDownload" class="ui-button ui-widget">Download</button></p>\
					</div>\
				</div>');
			$('#icsFormatterbg').fadeIn(500);
		}

		loadCSS();
		loadHTML();

		var t = new Date();
		$('#icsFormatterDate')[0].value = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate();
		datepickr('#icsFormatterDate', { dateFormat: 'Y-n-j' });
	}

	function addClass(icsObj, firstMonday, data, weekday, startclass, last) {
		var title = data.courseName;
		var place = data.roomName;
		var categories = ["ShanghaiTech", data.teacherName, "Course Table ICS Formatter"];
		var alarms = [
			{ ACTION: 'AUDIO', TRIGGER: '-PT10M' }
		];
		var url = '';

		var description = data.courseName + " " + data.roomName + " " + data.teacherName; //'A very long and boring description of what is the agenda of this super exclusiv pow-wow';

		regularMode = true;
		startweek = 0;
		intervalweek = undefined;
		countweek = 0;
		prevalidweek = undefined;
		for (var i in data.vaildWeeks)
			if (data.vaildWeeks[i] == 1) {
				if (prevalidweek == undefined) startweek = i;
				else
					if (intervalweek == undefined) intervalweek = i - prevalidweek;
					else if ((regularMode == true) && (intervalweek != (i - prevalidweek)))
						regularMode = false;
				prevalidweek = i;
				countweek++;
			}

		if (regularMode) {
			var begin = new Date(firstMonday.getTime() + ((startweek - 1) * 7 + weekday - 1) * 24 * 60 * 60000);
			begin.setHours(classTable[startclass - 1][0]);
			begin.setMinutes(classTable[startclass - 1][1]);
			begin.setSeconds(0);
			var end = new Date(begin.getTime());
			end.setHours(classTable[startclass + last - 2][2]);
			end.setMinutes(classTable[startclass + last - 2][3]);
			end.setSeconds(0);
			var rrul = {FREQ: 'WEEKLY', COUNT: countweek, INTERVAL: intervalweek};

			icsObj.addEvent(title,description, place, begin, end, rrul, url, categories, alarms);
		} else {

		}
	}

	function process(data) {
		$('#icsFormatterSemester').html($("#courseTableForm input.calendar-text")[0].value);
		window.icsObj = icsFormatter();

		icsObj.setCalendarName("Hello Calendar");

		for (var i in data.activities)
			for (var j in data.activities[i])
				if (data.activities[i][j].icsFormatted == undefined) {
					var last = 0;
					for (var k = i; k < ((Math.floor(i / 13) + 1) * 13); k++) {
						var hasMerged = false;
						for (var l in data.activities[k])
							if ((data.activities[k][l].icsFormatted == undefined) &&
								data.activities[i][j].isSame(data.activities[k][l]))
								hasMerged = true;
						if (hasMerged == false) break;
						last++;
					}
					eventsList.push({obj: data.activities[i][j], weekday: Math.floor(i / 13) + 1, startclass: Math.floor(i % 13) + 1, last: last});
					data.activities[i][j].icsFormatted = true;
				}

		$('#icsFormatterTasks').html(eventsList.length);
	}

	function download() {
		function getMonday() {
			return new Date($('#icsFormatterDate')[0].value.replace(/-/g, "/"));
		}
		var firstMonday = getMonday();
		for (var i in eventsList)
			addClass(window.icsObj, firstMonday, eventsList[i].obj, eventsList[i].weekday, eventsList[i].startclass, eventsList[i].last);

		window.icsObj.download();
	}

	function closeWindow() {
		$('#icsFormatterbg').fadeOut(500);
	}

	clear();
	init();

	process(table0);

	$('#icsFormatterDownload').click(download);
	$('#icsFormatterClose').click(closeWindow);

} else {
	alert('加载失败，请确认是否进入正确页面！');
}
