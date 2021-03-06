# jQuery Part Two: Interacting with a Server

## Learning Competencies

* Sending information to a server using AJAX
* Programmatically handling a server response with JavaScript

## Summary

AJAX stands for Asynchronous Javascript And XML, but we aren't limited to just the XML data type. When they came up with the name, using XML was the standard, but now there are lots of data transmission options (listed below). 

AJAX is a way for us to pass information between the browser and server without requiring a full page refresh.

**Why is this important?**
Imagine a home remodeling project and you want to replace the kitchen cabinets, do you knock down the whole house just to update the cabinets?

A Full Page Refresh **Demolishes** your **Entire Page** - but all you want was a great new kitchen.

AJAX lets you update exactly what you want, nothing more, nothing less.

AJAX also gives you lots of options for data transmission:
- XML (eXtensible Markup Language)
- JSON (JavaScript Object Notation)
- HTML (HyperText Markup Language)
- Text
- JavaScript Code

In this challenge we are going to be working with JSON and HTML

## Releases

### Release 0: Setup
Just like the last challenge, make sure you start with the code below and that jQuery is setup properly.

```JavaScript
$(document).ready(function(){
  // Write your code here
})
```

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
To log our response we will use the `done` function - refer to the [jQuery documentation](https://api.jquery.com/deferred.done/) to see how it is used.

``` JavaScript
  $ajax.done( /* code goes here */ )
```

### Release 3: Sending different dataTypes
What did our logged response in the last challenge look like? The server endpoint we hit is set to return HTML by default.

What if we want the data to be returned in a different format? We can modify our AJAX request to ask for JSON. If the server supports the JSON format, it will return it (this server does). The [ajax](http://api.jquery.com/jquery.ajax/) function has an optional `dataType` argument we did not use in our prior request. This time, let's use the `dataType` option to ask for JSON. What does the response look like now?

``` JavaScript
  var $ajax = $.ajax({
    url: /* code to get the url in href attribute */,
    method: 'GET',
    dataType: 'JSON'
  })
```
### Release 4: Use the response and DOM Traversal to update the page
Now that we have the AJAX structure working and we can retrieve HTML and JSON data - we can write code to update the DOM based on the response. Use your skills from the DOM traversal challenge to update the web page.

### Release 5: Use fail and always when handling response
We have use the `done` function successfully which assumes nothing will ever go wrong. What if something does go wrong though? jQuery has a `fail` and `always` function available, in addition to `done`.

Read the [jQuery documentation](http://api.jquery.com/jquery.ajax/) on these two functions, and write code to handle these cases. (*hint: search for `.fail` on that page*)

Two possibilities:
- Report the failed request to your user in the `fail` function
- Always indicate when the ajax request is finished on the top of the page (bonus points for reporting the time it took)

### Bonus!

Complete these tasks as a stretch challenge
- Switch the dataType to the opposite of what you used and make the page work with that
- What if a user clicks more than once? Do we need to make the AJAX call every time?
  - Modify your code to only send a request to the server once, no matter how many times the user clicks
- Late binding / Event delegation
  - We are adding elements to the DOM *after* the document ready event, how can we add click handlers to these new elements?
  - See [jQuery documention](http://api.jquery.com/on/) about event delegation
