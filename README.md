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
$ cd website
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
