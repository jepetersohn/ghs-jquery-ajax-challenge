$(document).ready(function(){
  var counter = 0

    $("#contacts_link").on("click", function(event){
      event.preventDefault()


      if(counter<1) {
        var $ajax = $.ajax({
          url: $("#contacts_link").attr('href'),
          method: 'GET'
        })

        $ajax.done(function(response) {
            $("body").append(response)
            console.log(response)
        })

        $ajax.fail(function() {
            $("body").append("Something went wrong")
            console.log("Failed")
        })
      }
        counter++
    })


})
