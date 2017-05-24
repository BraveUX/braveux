# BraveUX
http://braveux.com/

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

### Getting Started
In command line, do the following steps:
```command
# Clone repo to your local machine
$ git clone https://github.com/BraveUX/braveux.git
```
```command
# Move into the downloaded repo
$ cd braveux
```
```command
# Install NPM packages
$ npm i
```
```command
# Run localhost (use for dev)
$ gulp default
# OR build (use for production files)
$ gulp build
```

### Folder Structure
`src` - This directory is where all development should take place. Use gulp to then process the content to the public folder.
`public_html` - This directory containsthe distribution files which should be uploaded to the FTP when changes are made.

### Future TODO's
* Add lazy loading across site due to the high content nature of our site
* Consider page loader so that we can animate content once a user visits the site.

## Deploying to Staging
The [gh-pages branch](https://github.com/BraveUX/braveux/tree/gh-pages) is automatically built for staging out development goals of the site.

[Click here to view our stagining site.](http://braveux.github.io/braveux/)


### How to deploy a branch to GH-Pages
First, check that the `if` statement in `src/views/partials/_head.ejs` has `var deploy = true;`. Failing to do so will result in the website not rendering correctly!

In command line, do the following steps:
```command
# Navigate to the branch you wish to demo for staging
$ git checkout dev
```
```command
# Ensure you have all NPM packages installed
$ npm i
```
```command
# Build project
$ gulp build
# OR if you want to actively do work in the branch
$ gulp default
```
```command
# Deploy to GH-Pages
$ gulp deploy
```

Once done, you should be able to view the branch at http://braveux.github.io/braveux//

**Remember to discard or change back the variable in the `_head.ejs` file back to `false` or your localhost/live site will fail to render correctly!**
