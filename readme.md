# Readme

After running `npm install` you should run this commands since `gulp-sass` package has a bad dependency with an issue:

```
cd node_modules/gulp-sass/
npm install node-sass@3.4.2
cd ../..
gulp
```

When this issue with `node-sass` gets fixed, you can edit this additional step.
