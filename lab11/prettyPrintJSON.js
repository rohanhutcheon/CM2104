  $(function(){
    //document ready
    alert("document ready");
  });


  $('#searchform').submit(function() {
    //get current value and add items to the list
    var searchterms = $("#searchterms").val();
    //call our search YouTube function
    getResultsFromOMDB(searchterms);
    return false;
  });


function getResultsFromOMDB(searchterms) {
  //call YouTube API using ajax
  //build url for the request
  var url ="http://www.omdbapi.com/apikey=e0d9915c" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata) {
    //handle the results
    prettyPrintJSON(jsondata);
  });

}

  function prettyPrintJSON(jsondata) {
    //prints the pretty JSON to the screen
    var pretty = JSON.stringify(jsondata, null, 4);
    $('#resultsbox').append("<pre>" +normal + "</pre>");

  }
