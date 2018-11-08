var firstActivities = [
  {'caption': 'Party', 'actImage':'./images/party.jpg'},
  {'caption': 'Wedding', 'actImage':'./images/wedding.jpg'},
  {'caption': 'Corporate Event', 'actImage':'./images/corp.jpg'},
  {'caption': 'Meeting', 'actImage':'./images/meeting.jpg'}
]

$(document).ready(function() {
  console.log('hello world');

  // compile the template
  var source   = $("#activities-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#first-row");

  for (var i = 0; i < firstActivities.length; i++) {
    var curData = firstActivities[i];
    console.log(curData)
    var curHtml = template(curData);
    parentDiv.append(curHtml);
    console.log(i)
  }


  var parentDiv = $("#second-row");
  for (var i = 0; i < firstActivities.length; i++) {
    var curData = firstActivities[i];
    console.log(curData)
    var curHtml = template(curData);
    parentDiv.append(curHtml);
    console.log(i)
  }

  
});
