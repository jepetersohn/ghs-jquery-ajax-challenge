$(document).ready(function(){
  $('#contacts_link').on('click', function(event) {
      event.preventDefault();
 // Event handler code goes here
})
var $ajax = $.ajax({
        url : 'https://gdi-dbc-sd.herokuapp.com/contacts',
        method: 'GET'
        datatype: 'HTML'
    })
      $ajax.done(function(response){
      console.log(response);

})

  })

})
