## Dev process

Steps to follow when editing source. __NOTE: Do not edit contents of the `dist` folder, as this will be overwritten by the build process, follow the instructions bellow.__

#### download 
```BASH
git clone git@github.com:make-it-social/mis-button.git
```

#### Install
```BASH
npm install
```

#### Launch live server
```BASH
gulp serve --development
```

You're now set up to edit files in the `src` folder. As you make edits, changes will automatically be compiled into the dist folder, and the open web page will automatically update to reflect the new content/styles.


## Saving and pushing

#### Build minified/optimised versions of files 
```BASH
gulp build
```

#### Commit files to GIT
```BASH
git add --all 
git commit -m "<My informative commit message>"
```

#### Version bump bower & npm, !!! always do this just befor a push !!!, select only one option based on the level of bump.
```BASH
gulp bump # default is patch

gulp bump --minor

gulp bump --major
```

#### Push files back to origin
```BASH
git push origin master
```
