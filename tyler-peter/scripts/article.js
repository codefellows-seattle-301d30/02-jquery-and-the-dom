'use strict';

let articles = [];

// done: What is the purpose of the following function? Why is its name capitalized? Explain the context of "this" within the function. What does "rawDataObj" represent?
// Article is a constructor function which will create Article objects, that is why it's capitalized. This refers to the object that is currently being constructed. The rawdataObj will be the parameter that will be feeding to the article constructor.

function Article (rawDataObj) {
  // done: Use the JS object that is passed in to complete this constructor function:
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.author = rawDataObj.author;
  this.authorURL = rawDataObj.authorURL;
  this.publishedOn = rawDataObj.publishedOn;
  this.body = rawDataObj.body;
  // done: Save ALL the properties of `rawDataObj` into `this`
}

Article.prototype.toHtml = function() {
  // done: What is the benefit of cloning the article? (see the jQuery docs)
  // Appending something moves it from where it was to the new target location, but cloning() creates a new instance of the target object.

  let $newArticle = $('article.template').clone();
  /* done: This cloned article still has a class of template. In our modules.css stylesheet, we should give all elements with a class of template a display of none so that our template does not display in the browser. But, we also need to make sure we're not accidentally hiding our cloned article. */

  if (!this.publishedOn) $newArticle.addClass('draft');

  $newArticle.attr('data-category', this.category);
  console.log(this.title);
  /* TODO: Now use jQuery traversal and setter methods to fill in the rest of the current template clone with values of the properties of this particular Article instance.
    We need to fill in:
        find correct element
        set html value to ______
      1. author name,
      2. author url,
      3. article title,

        select the h1
        add text content into it that is this.title
      4. article body, and
      5. publication date. */

  // REVIEW: Display the date as a relative number of 'days ago'
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.append('<hr>');
  return $newArticle;
};

// rawData.sort(function(a,b) {
//   // REVIEW: Take a look at this sort method; This may be the first time we've seen it. Look at the docs and think about how the dates would be sorted if the callback were not included in this method.
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });

// TODO: Refactor these for loops using the .forEach() array method.

for(let i = 0; i < rawData.length; i++) {
  articles.push(new Article(rawData[i]));
}

for(let i = 0; i < articles.length; i++) {
  // console.log('hit', i);
  $('#articles').append(`<h1>${articles[i].title}</h1>`); //articles[i].toHtml()
}
