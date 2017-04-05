$(document).ready(function(){
  // Write your code here
  $("a").on("click", function(event){
    event.preventDefault();
    var $ajax = $.ajax({
      url: $("#contacts_link").attr("href"),
      method: 'GET',
      //dataType: 'JSON',
      //data: JSON.stringify(data)
    })
    $ajax.done(function(response){
      console.log("Success. Good work, boys.")
      console.log(response)
      $(response).insertAfter("a")
      /*$("<div id=\"json-holder\"></div>").insertAfter("a")
      $("#json-holder").text($(response))*/

    })
    $ajax.fail(function(){
      alert("Mission Failed! We'll get 'em next time!")
    })
  })
  //http://www.jquerybyexample.net/2012/05/how-to-read-and-parse-json-using-jquery.html
})
