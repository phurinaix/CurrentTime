function printTime(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  var hours = (h < 10 ? "0"+h : h);
  var minutes = (m < 10 ? "0"+m : m);
  var seconds = (s < 10 ? "0"+s : s);

  document.getElementById("time").innerHTML = hours + " : " + minutes + " : " + seconds;
}
setInterval(printTime,1000);
