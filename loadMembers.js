
var requestURL = 'https://github.com/cooperjones13/etagamma/blob/master/members.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var members = request.response;
  var i;
  for (i = 0; i < members.length; i++) {
    console.log(members["members"][i])
  }
}
