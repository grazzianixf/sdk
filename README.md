# sdk

## How to write a typescript library

```shell
npm install -g typescript
```

- https://www.tsmean.com/articles/how-to-write-a-typescript-library/

## Publishing on Github Packages
- `package.json` file
   - Check `name` property. It must to be like `@USER/project-name`
   - Add `publishConfig` and `registry` property with value corresponding to the github registry for your user account
- `.npmrc` file
   - create if it doesn't exist
   - specify username, registry path and authToken
- `npm` commands
```shell
npm login
```
```shell
npm publish
```

ref: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

## Installing Github Packages
- `.npmrc` file
   - create if it doesn't exist
   - specify `@USERNAME:registry=https://npm.pkg.github.com`
   - specify `//npm.pkg.github.com/:_authToken=GITHUB_TOKEN`
- `npm i @USERNAME/package-name`


ref: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package
