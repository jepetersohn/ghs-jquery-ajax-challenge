# JQuery part two: Interacting with a Server

## Learning Competencies

* Sending information to a server with AJAX
* Programmatically handling a server response with JS

## Summary

AJAX stands for Asynchronous Javascript And XML, though it is really
Asynchronous Javascript And XML, or JSON, or HTML, or Text, or JS. AJAX is used
to pass information between the browser and server without requiring a full page
refresh.

Imagine a home remodeling project and you want to replace the kitchen cabinets, do you knock down the whole house just to update the cabinets?

A Full Page Refreshes **Demolishes** your **Whole Page** but all you want is a fantastic new kitchen. AJAX Lets You Update exactly what you want, nothing more nothing less.

AJAX also gives you lots of options for data transmission:

- XML (eXtensible Markup Language)
- JSON (JavaScript Object Notation)
- HTML (HyperText Markup Language)
- Text
- JavaScript Code

In this challenge we are going to be working with JSON and HTML


## Releases

### Release 0: Setup
In this first release we want to make sure jQuery is loaded on the page. Let's open the index.html file in a browser and then open our developer tools. We can do this in Chrome by pressing `Command + option + j`.

If we open the scripts.js file we can see that we are making the following call:
``` JavaScript
$(document).ready(function(){
});
```
This is a JQuery function. The first way we can tell that JQuery is available on the page because if it is not there will be an error in the developer console.

To confirm this we can also type `$ === JQuery`. If JQuery is available this will return true. If it's not it will throw an error. We need to set the $ equal to JQuery because the is a $ function available in the Chrome developer console that can give us a false positive if we don't explicitly check.

A note about `$(document).ready()` and why we use it. If we add our code inside the function it will not excecute until the page has loaded. This is important because we are finding elements and manipulating or binding events to them and we need to make sure they have loaded on the page before we look for them.

### Release 1: Stop the browser from doing a full page refresh
In this release we're going to be taking the first steps toward sending an AJAX request to a server.

Anytime we want something to occur when we interact with a page we need to bind to an event. In this case we are going to bind a click event to the anchor tags on the page. For a referesher on event binding with JQuery [here](http://api.jquery.com/on/) is a link to the documentation for JQuery's "on" function.

``` JavaScript
$('.myclass').on('click', function(event) {
  // Event handler code goes here
}
```

If we just bind to an event and add our code, we are going to run into a problem. When we click an anchor tag it's default behavior is to take us to a new page based on the url provided in the href attribute. We don't want it to perform it's default action, we just want it to execute our code.

If we call Javascript's [preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) function on our event it will stop the event's default action and tell the page "hey you can stop what you're doing, I'll handle it from here".

### Release 2: Send AJAX request and confirm a response
Let's send a request with AJAX! We're going to need to use two JQuery functions for this release, the [ajax](http://api.jquery.com/jquery.ajax/) funtion and the [done](https://api.jquery.com/deferred.done/). When we click and achor tag we want to send an AJAX request using the method GET to the anchor tag's href attribute.

``` JavaScript
  var $ajax = $.ajax({
    url: someUrl,
    method: 'get'
  })
```
To log our response we call the done function on the response returned by the ajax function

``` JavaScript
  $ajax.done( code goes here )
```

### Release 3: Sending different dataTypes
What did our logged response in the last challenge look like? The server endpoint we hit is set to return HTML by default.

What if we want to return a different dataType? The server request is just that, a request. If the server can respond it will. In this case, the server is also set up to return JSON. The [ajax](http://api.jquery.com/jquery.ajax/) function has an optional dataType argument we're not currently using. Let's pass the AJAX call a dataType of JSON and log what happens.

``` JavaScript
  var $ajax = $.ajax({
    url: someUrl,
    method: 'get',
    dataType: 'JSON'
  })
```
### Release 4: Use the response and DOM Traversal to update the page

### Release 5: Use failure and always when handling response

### Bonus!

- switch the data type requested and make the page work with that
- handle the user clicking something more than once, only making the ajax call when necessary
- late binding with response
