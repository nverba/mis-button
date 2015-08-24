## Make it Social popup launcher


#### Development

```BASH 

# download 

git clone git@github.com:make-it-social/mis-button.git

# install 

npm install

# develop with watchify auto build & live Browser-Sync reloading across local network

gulp serve 

# Note: Visit localhost:3000/examples/buttons.html to see the demo.

# develop with watchify auto build

gulp build --development

# generate production file.min.jsv

gulp build

# version bump bower & npm

gulp bump # patch

gulp bump --minor # minor

gulp bump --major # major


```
Note: in order for name & pid to be recieved from the embedded iframe, the iframe origin address needs to be whitelisted.
```
if (event.origin !== "https://popup-sandbox.herokuapp.com" && event.origin !== "https://popup.makeitsocial.com/") { return; }
```

When pushing a release to master, using the following command will also sync the live gh-pages demo, which can be viewed @ [make-it-social.github.io/mis-button](http://make-it-social.github.io/mis-button)

```
git push origin master
git push origin master:gh-pages
```