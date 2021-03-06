# Smedium

[Heroku link](https://yk-smedium.herokuapp.com/) & [backup heroku link](https://protected-hollows-63082.herokuapp.com/#/)

## Introduction

> Smedium is a Medium clone for thoughtful blogging, elegant design, and engaging community.
> * [MVP](https://github.com/yukichikawada/smedium/wiki/mvp)
> * [Database Schema](https://github.com/yukichikawada/smedium/wiki/database-schema)
> * [Routes](https://github.com/yukichikawada/smedium/wiki/routes)
> * [Sample State](https://github.com/yukichikawada/smedium/wiki/sample-sate)
> * [Component Hierarchy](https://github.com/yukichikawada/smedium/wiki/component-hierarchy-with-wireframes)

## Technologies Used


#### Backend
 * Ruby On Rails
 * jBuilder
 * PostgreSQL RDBMS
 * Heroku


#### Frontend
 * React-Redux
 * JavaScript
 * SCSS/CSS
 * npm
 * Webpack


#### Storage
 * Cloudinary for headline pictures uploaded by Users


## Features and Functionality

 * BCrypt Auth limits functionality of unregistered Users
 * RichText Editing with Quill preserves writing styling for Stories
 * Stories can receive Comments

![](https://github.com/yukichikawada/smedium/blob/master/app/assets/images/comment-form.png)

 RichText Editing adds html to writing, an html parser transforms ```string``` to jsx
 ```javascript
 import ReactHtmlParser from 'react-html-parser';
 ...
<div className="story-item-snippet">
  {ReactHtmlParser(story.body.slice(0,130))}...
</div>
```

## How to: Set up locally

 * ```npm i``` install node_modules
 * ```bundle``` install gems
 * ```rails db:create``` initialize postgreSQL db
 * ```rails db:migrate```
 * ```rails db:seed```
 * ```rails s```
 * ```npm start``` app now running on localhost:3000


## Future Direction

 * Likes on Stories
 * Follow Users
 * Filtered Feeds on Category
