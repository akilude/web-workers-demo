# Web Workers Demo

In the index.html file, there is an inline javascript that spawns a webworker, the webworker creates an array with a 100000 random numbers and then sorts them and returns the numbers to the main thread.


## To run this example

Many browsers like chrome will not let you create webworkers using the file:// origin, so you'll need a lite http server like [lite-server](https://github.com/johnpapa/lite-server), then open the index.html page.