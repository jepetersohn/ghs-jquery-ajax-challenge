$(document).ready(function(){
  $('#contacts_link').on('click', function(event) {
    event.preventDefault();
    var $ajax = $.ajax({
    url: "https://gdi-dbc-sd.herokuapp.com/contacts" ,
    method: 'GET',
    dataType: 'HTML'
  })
   $ajax.done(function(response){
    console.log(response)
    $(response).insertAfter('a')
   })
})
})
