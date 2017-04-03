# jQuery part two: Interacting with a Server

## Learning Competencies

* Sending information to a server using AJAX
* Programmatically handling a server response with JavaScript

## Summary

AJAX stands for Asynchronous Javascript And XML, but we aren't limited to just the XML data type. When they came up with the name, using XML was the standard, but now there are lots of data transmission options (listed below). 

AJAX is a way for us to pass information between the browser and server without requiring a full page refresh.

**Why is this important?**
Imagine a home remodeling project and you want to replace the kitchen cabinets, do you knock down the whole house just to update the cabinets?

A Full Page Refresh **Demolishes** your **Entire Page** - but all you want was a great new kitchen.

AJAX Lets You Update exactly what you want, nothing more, nothing less.

AJAX also gives you lots of options for data transmission:
- XML (eXtensible Markup Language)
- JSON (JavaScript Object Notation)
- HTML (HyperText Markup Language)
- Text
- JavaScript Code

In this challenge we are going to be working with JSON and HTML

## Releases

### Release 0: Setup
In this first release we want to make sure jQuery is loaded correctly.

If we open the scripts.js file we can see that we are making the following call:
``` JavaScript
$(document).ready(function(){
});
```
The code above is using a jQuery function, it is equivalent to saying `jQuery(document).ready(...)`. The `$` is short for `jQuery`.

We want to run a few checks in our browser to make sure our setup is correct. 

First, let's open the index.html file in Chrome, then open our developer tools (Shortcut: `Command + option + j`). Make sure you do not see this error:
![Image of console error](http://devbootcamp.netlify.com/img/jquery-javascript-error.png)

Second, let's make sure that `$` and `jQuery` are the same thing by typing `$ === jQuery` in the JavaScript console. Other JavaScript libraries and Chrome itself sometimes use the `$` as a shorthand. This is a way to make sure that it means jQuery.

A note about `$(document).ready()` and why we use it. If we add our code inside the function it will not excecute until the page has loaded. This is important because we are finding elements and manipulating or binding events to them and we need to make sure they have loaded on the page before we look for them.

### Release 1: Stop the browser from doing a full page refresh
In this release we're going to be taking the first steps toward sending an AJAX request to a server.

Anytime we want something to occur when a user interacts with a page we need to bind to an event. In this case we are going to bind to a click event on the anchor tags on the page. For a referesher on event binding with jQuery [here](http://api.jquery.com/on/) is a link to the documentation for jQuery's `on` function.

``` JavaScript
$('.myclass').on('click', function(event) {
  // Event handler code goes here
}
```

If we just bind to an event and add our code, we are going to run into a problem. When we click an anchor tag it's default behavior is to take us to a new page based on the url provided in the href attribute. We don't want it to perform it's default action, we just want it to execute our code.

If we call Javascript's [preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) function on our event it will stop the event's default action and tell the page "hey you can stop what you're doing, I'll handle it from here".

### Release 2: Send AJAX request and confirm a response
Let's send a request with AJAX! We're going to need to use two jQuery functions for this release, the [ajax](http://api.jquery.com/jquery.ajax/) and [done](https://api.jquery.com/deferred.done/) functions. When we click an anchor tag we want to send an AJAX request using the method `GET` to the anchor tag's href attribute.

``` JavaScript
  var $ajax = $.ajax({
    url: /* code to get the url in href attribute */,
    method: 'GET'
  })
```
To log our response we call the done function on the response returned by the ajax function

``` JavaScript
  $ajax.done( /* code goes here */ )
```

### Release 3: Sending different dataTypes
What did our logged response in the last challenge look like? The server endpoint we hit is set to return HTML by default.

What if we want the data to be returned in a different format? We can modify our AJAX request to ask for JSON. If the server supports the JSON format, it will return it (this server does). The [ajax](http://api.jquery.com/jquery.ajax/) function has an optional dataType argument we did not use in our prior request. This time, let's use the dataType option to ask for JSON. What happens in the console log?

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
