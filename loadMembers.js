
var requestURL = 'https://cooperjones13.github.io/etagamma/members.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var members = request.response;
  var i;
  for (i = 0; i < members["members"].length; i++) {
    console.log(members["members"][i]);
  }
}
