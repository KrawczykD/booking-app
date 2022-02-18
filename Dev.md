# Development Guide

## Setup

1. Clone the Repostory using
   [Github Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)
2. Run `project:prepare` script to install npm's mentioned in [package.json](package.json) and install husky
3. setup `cdnConfig` in [releaseSettings.js](.\gulpfile.js\shared\releaseSettings.js) with cdn cloudinary details
4. setup `cdnPath` in [releaseSettings.js](.\gulpfile.js\shared\releaseSettings.js) with path to claudinary folder

## Testing

1. Run the npm script using `npm run serve`
   - Alternatively you can download the npm extension, select `enable run from folder` in the settings, select npm script in the explorer to easily activate the npm scripts.
2. To close testing use `ctrl C` then `Y` within the terminal to shut down correctly

### NPM Scrits Available

- [serve](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve) - starts a dev server
- [build](https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-build) - produces a production-ready bundle in the `dist/` directory
- project:prepare - This runs npm install and husky install to get the project ready for development
- [lint:check](https://cli.vuejs.org/core-plugins/eslint.html#injected-commands) - scans for syntax errors, wrong use of [Vue.js Directives](https://v3.vuejs.org/api/directives.html) and violation for
  [Vue.js Style Guide](https://v3.vuejs.org/style-guide/)
- lint:fix - It will check for eslint violations and attempt to fix them
- format:check - This runs prettier and checks if there are any formatting errors
- format:fix - Runs prettier and will fix any formatting errors
- lint:format:check - Runs both lint and prettier checks
- lint:format:fix - This runs both lint and prettier fix commands
- preversionUpdate -
- versionUpdate -
- postversionUpdate -
- release -
- postrelease -
- preversion -
- postversion -
- testRelease -
- cloudinaryUploadFiles - upload App files from dist folder in to claudinary based on [releaseSettings.js](.\gulpfile.js\shared\releaseSettings.js)
- cloudinaryGetLastestFiles - obtain lastest version https path uploaded to claudinary
- cloudinaryDeleteFiles - delete files from claudinary folder base on provided version number in format `x.x.x` as parameter for example `gulp deleteVersion --bv x.x.x`
- boprRelease -

### Gulp tasks

1. `gulp upload` upload App files from dist folder in to claudinary based on [releaseSettings.js](.\gulpfile.js\shared\releaseSettings.js)
2. `gulp deleteVersion` delete files from claudinary folder base on provided version number in format `x.x.x` as parameter for example `gulp deleteVersion --bv x.x.x`
3. `gulp getLatestVersion` obtain lastest version https path uploaded to claudinary
4. `gulp versionUpdate` update AppVersion.ts file base on package.json verison
5. `gulp boprRelease` create [bopr/release/Default.aspx](./bopr/release/Default.aspx) file base on [bopr/release/Default.aspx](./bopr/template/Default.aspx) including all required cdn.

[ <h2>:page_with_curl: Contribution Guide</h2>](Contributing.md)

Read this documentation before contributing to the project.

[ <h2>:page_with_curl: GitHub Guide</h2>](Github.md)

Read this documentation before contributing to the project.

## New version release to CDN

1. `npm version patch` will bump version and upload fields to cloudinary

## Release on Azure

1. Create a web app with name of repo and branch you want to deploy. Follow bopr-feature-xxx-master or bopr-feature-xxx-main patern.
2. For Deployment setup commit on branch and setup Github deploy action
3. Make sure github deploy action is using Linux as a runner
4. Setup workflow deloy directory to use ./dist/ directory **before first deployment**.

## New version release to BOPR

In order to release on bopr we have following assumptions:

- Bopr has a folder with feature name suitable for customer to understand.
- Bopr has already got a single page setup in feature folder with Default.aspx and its server side Default.aspx.cs
- Any css js and assets folder for feature release must go inside this folder.
- Folder `bopr/template/` folder contains a copy of files that need to be produced when building for bopr. For example [borp/template/Default.aspx](./bopr/template/Default.aspx)
- First line of this file defines the server side control and should be same as one produced in bopr.
- This uses htmlreplace to fill up scripts and styles from the application files uploaded on cloudinary. Any other lines should be exactly same as in bopr.
- Any local files produced can be moved to this folder after build and hard coded in to the page.
- Local files that need version based cache busting use html replace to place final version link into Default.aspx.

From the above assumptions we follow this process to release for bopr

1. Make sure you have latest commit of master branch.
2. If needed update the version on master branch with `npm version patch|minor|major`
3. Note down the version number and create a branch in bopr repo for this project scope and version. For example "release-feature-name-v0-0-1"
4. Create a PR on this repo from master to Staging and name it "Staging Release v0.0.1"
5. Merge and obtain latest version of Staging branch.
6. Bopr npm script `npm run boprRelease` which calls `gulp releaseBOPR` to create latest version of scripts and styles in Default.aspx and get the `bopr/release/` folder ready.
7. Move this folder to BOPR repo on the "release-feature-name-v0-0-1" branch and create PR called "Feature Staging Release v0.0.1".
8. Test this PR on bopr that its working with correct token and latest version files. You might need to press ctrl+f5 to get latest version of js and css from CDN if its cached in your previous test
   on this repo.
9. If cleanup is needed then perform cleanup on old files and remove them in separate commit (this will only include deletions).
10. Commit the additions and changes in one commit so you can go back easily while testing on bopr.
11. Merge it into Staging branch on bopr and release to Staging customers.
12. If you want to release to Live branch then create a PR from Staging to Live in this repo and follow same process as you did for master to Staging and replace word Staging with Live.
13. [npm bopr] create `bopr/release/Default.aspx` file base on `bopr/template/Default.aspx` including all required cdn.
