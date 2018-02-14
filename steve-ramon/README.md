# 02-JQUERY_AND_THE_DOM

**Author**: Steve Starwalt & Ramon Mendoza
**Version**: 1.0.0
##Overview
We are bilding a site to display bolg articles in a clear logical way so that the most recent blog articles appera first. 

##Getting Started:
In order to build this you will need to set up yout HTML file with the framework for your site and make a template of how you wish the articles to be displayed.  Ensure you give that a class of "template".  You will need to adda alink to the JQuery library in order to use JAQuery.  Next get the raw data from the blogger and use a consgructor function to make to new article objects.  Using JQuery get the article template from the DOM and then append the Article object parameter values into the proper places.  You will also need to make a function that will compute the age of the blog entry based upon the published date and todays date. Finally,append the article object to the DOM.

##Architecture
This starts with a constrtuctor function to build new Article objects that are pushed into an array of articles.  Using JQuery, we accessed the DOM and got the article template.  We then changed that JQuery object by inserting the apropriate data from the article objects.  We computed the age of the article  by using the date from the article object and todays date.  We then used JQuery to append the new article to the DOM.

#Change Log
1. 9:30 Added the tree and built the css files using the css files from yesterdays lab
2. 10:00 Made the constructor function
3. 11:00 finished the logic to append the articles to the DOM
4. 11:30 Changed the for loops into for each loops
5. 12:30 fixed all the remaining bugs including the duplicate article bug.

We used the wisdom of Kat and Issac for some tough spots, the JQuery cheat sheet @ https://oscarotero.com/jquery/ and the starter code provided by Codefellows.