# FLATCHR SYSTEM-DESIGN 🐙 👍 

This monorepository is the main place for all the __components__ we wan't to share between our projects (app, app native, career)

This project use [rollup.js](https://rollupjs.org/guide/en/) for builiding.

## Git config

```
git config --global user.name "John Doe"
git config --global user.email johndoe@flatchr.io
```

⚠️ This package use `Yarn`

#### __Global installation__

```
npm install -g yarn
```

## Dependencies install

#### `yarn install`

## Storybook

This project has a storybook to see and test your icons.

#### `yarn storybook`

It will be accessible at [http://localhost:6076/](http://localhost:6076/)

## Build the package

#### `yarn build`

## Publish the package

It's __required__ to commit the `/dist` directory.

Commit and push your work, and when your code is on `main` branch, you can launch:

#### `yarn publish`

And fill the correct new version of the package.

When your new icons has been published, you will need to create a new branch `update-version-X.X.X`, update the version for the correct version in the package.json at the root directory.

All the published versions are here : https://gitlab.com/flatchr/shared/system-design/-/packages
## How add a new component?

TO FILL
## How to use the published package?

Before install, you will need to register gitlab repository as available for your device:
```cmd
npm config set @flatchr:registry https://gitlab.com/api/v4/projects/32444154/packages/npm/
```
```cmd
npm config set -- "//gitlab.com/api/v4/projects/32444154/packages/npm/:_authToken=glpat-GzA7zW-iwKH5wLHHhsir"
```

In the repository you want to use Flatchr system-design: 

```cmd
npm i --save @flatchr/system-design
```
or
```cmd
yarn add @flatchr/system-design
```

🎉 __Enjoy your new components!__ 🎉

## TODO README
- explain `yarn link` usage for testing
