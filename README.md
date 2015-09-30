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

#### version bump bower & npm

```
gulp bump --patch

gulp bump --minor

gulp bump --major

```

#### Push files back to origin
```BASH
git push origin master
```
