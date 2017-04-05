$(document).ready(function(){

    $('#contacts_link').on('click', function(event) {
        event.preventDefault()
        $('#contacts_link').text("click here!!")
        var $ajax = $.ajax({
          url: "https://gdi-dbc-sd.herokuapp.com/contact",
          method: 'GET',
          dataType: 'HTML',

        //  context: document.body
        }).done(function(response) {
        //  alert(response)
        var $body = $('body')
          $body.append(response)
        });


        $ajax.fail(function(){
          alert ("error");
        })

    })

  })
