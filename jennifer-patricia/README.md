# Kilovolt Blog

**Authors**: Jennifer Williams Piper and Patricia Raftery

**Version**: 1.0.0

## Overview

This is a fun website containing a blog with icons and content that are appealing to the user, and easy to use, to  entice the user to come back regularly. It should also ensure that the user has a similar experience on desktop and mobile devices.

## Getting Started
Fork and clone the repo at: 
* https://github.com/codefellows-seattle-301d30/02-jquery-and-the-dom

* add CSS files to style the content

* update the js files to display blog posts using the details below (see architecture)

* view index.html in a web browser


## Architecture

Project uses HTML, CSS, JavaScript and Markdown. This application is designed with mobile first in mind, and extra css code for desktop views, with a breakpoint at 640px. The mobile views, to maximize screen space, start with the dropdown menu hidden, and the menu becomes visible when the hamburger icon is hovered over. The desktop views do not see the hamburger icon, and can see the nav menu from the beginning.
A constructor function is used for the articles. Blog articles are stored as objects in the rawData array. They are appended to the DOM using jQuery traversal and setter methods. Each article displays author, title, link to author page, time since publication, and blog entry.


## Change Log

02-14-2018 9:15am - Forked and cloned repo, initial setup by duplicating starter code, adding README, license.

02-14-2018 9:40am - Completed repo setup with normalize.css and empty custom CSS files.

02-14-2018 10:40am - Updated Article constructor function to pull data from blogArticles.js. Hid items with 'template' class, verified 'articles' array is being populated with articles.

02-14-2018 11:30am - Made blog entries appear by adding jQuery traversal and setter methods, added more constructor function properties

02-14-2018 12:00pm - Reactivated the sort function which had been deactivated for testing, and refactored for loops with the .forEach.

02-14-2018 1:00pm - Finished userstories for both users and developers

02-14-2018 1:15pm - Updated readme, answered remaining comments in index and js

08-03-2018 - Made hamburger menu stay open on hover. Updated readme.


## Credits and Collaborations

* starter CSS by Jennifer Williams Piper and Suzanne Richman

* Source of normalize.css from github.com/necolas/normalize.css

* Icon fonts from IcoMoon: https://icomoon.io/
