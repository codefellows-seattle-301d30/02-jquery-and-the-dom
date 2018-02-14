'use strict';

let articles = [];

// COMMENT: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// "this" is a constructer function that takes properties of instances. It's capitilized because that is best practice to show that it is a constructor. "this" is used for that particular instance of the object. "rawDataObject" repersents that the instances where passing thru the constructer.

function Article (rawDataObj) {
  // Done: Use the JS object that is passed in to complete this constructor function:
  // Save ALL the properties of `rawDataObj` into `this`
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
}

Article.prototype.toHtml = function() {
  // COMMENT: What is the benefit of cloning the article? (see the jQuery docs)
  // Cloning allows you to copy the set of matching elements and their descendant elements. You can also modify the elements before reinseting them into the document. 

  let $newArticle = $('article.template').clone().remove('article.template');
  /* DONE: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */

  if (!this.publishedOn) $newArticle.addClass('draft');
  $newArticle.attr('data-category', this.category);

  /* DONE: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:  */
  $newArticle.find('h1').text(this.title);
  $newArticle.find('a').attr('href', this.author);
  $newArticle.find('time').attr(date[time], 'p').html(this.publishedOn);

  // REVIEW: Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.sort(function(a,b) {
  // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// DONE: Refactor these for loops using the .forEach() array method.

articles.forEach(function data(rawData)
// for(let i = 0; i < rawData.length; i++) 
{
  articles.push(new Article(rawData[i]));
});

articles.forEach(function articleId(articles)
// for(let i = 0; i < articles.length; i++)
{
  $('#articles').append(articles[i].toHtml());
});
