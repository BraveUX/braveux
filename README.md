# BraveUX GH-Pages
This branch serves as a stagining environment for our agency website.

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
