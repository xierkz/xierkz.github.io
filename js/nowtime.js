function showTime() {

	var date = new Date();

	var y = date.getFullYear();
	var m1 = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();

	m1 = m1 < 10 ? '0' + m1 : m1;

	d = d < 10 ? '0' + d : d;

	m = m < 10 ? '0' + m : m;

	s = s < 10 ? '0' + s : s;

	var tt;
	for (var i = 0; i < 15; i++) {
		tt = 'time'+i;
		document.getElementById(tt).innerHTML = "此刻时间为 " + y + "年" + m1 + "月" + d + "日 " + h + "时" + m + "分" + s + "秒";
	}
}

setInterval(showTime, 1000);