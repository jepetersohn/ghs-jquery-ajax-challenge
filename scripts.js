$(document).ready(function(){
  $('#contacts_link').on('click', function(event) {
     event.preventDefault();
     var $ajax = $.ajax({
        url: $(this).attr('href'),
        method: 'GET',
        //dataType: 'JSON'
     })
     var ajaxTime= new Date().getTime();
     $ajax.done( function(response) {
       console.log(response)
       var totalTime = new Date().getTime()-ajaxTime;
       $("body").append(response).prepend(totalTime)
     })
     $ajax.fail( function(xhr, ajaxOptions, thrownError) {
       console.log(thrownError)
       $("body").append(thrownError)
     })
  });
})
