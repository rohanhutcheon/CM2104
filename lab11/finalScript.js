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
  var url ="http://www.omdbapi.com/apikey=e0d9915c=" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata) {
    //handle the results
    addResultsTitles(jsondata);
  });

}

  function addResultsTitles(jsondata) {
    //create a string to contain our HTML code to inject
    var htmlstring = "";
    //literate over the collection of results
    for (var i=0; i<10; i++){
      var title = jsondata.Search[i].Title;
      htmlstring += "<li>" + title + "</li>";
    }

    //inject the HTML into our empty submitToList
    $("#results").html(htmlstring);
  }
