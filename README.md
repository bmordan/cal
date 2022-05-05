# Bernard Mordan's Cal

To run this code you need to unzip and `cd` into the folder. Then run:

`npm install`

This will add the testing dependencies. You can run the tests with `npm test`.

To use `cal` run the program like this (this is worth doing to see the current day highlighted):

`node Cal.js`

```sh
     March 2022
Mo Tu We Th Fr Sa Su
       1  2  3  4  5
 6  7  8  9 10 11 12
13 14 15 16 17 18 19
20 21 22 23 24 25 26
27 28 29 30 31
```

![example of highlighted day](https://user-images.githubusercontent.com/4499581/158480459-d7dfcdb3-c638-44f3-957a-19ac0d629be3.png)

If you want a particular month to display then pass the month and year like this:

`node Cal.js 11 1975`

```sh
   November 1975      
Su Mo Tu We Th Fr Sa  
                   1  
 2  3  4  5  6  7  8  
 9 10 11 12 13 14 15  
16 17 18 19 20 21 22  
23 24 25 26 27 28 29  
30
```

Very awesome.
