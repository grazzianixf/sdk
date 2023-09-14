# sdk

## Publishing on Github Packages
- `package.json` file
   - Check `name` property. It must to be like `@USER/project-name`
   - Add `publishConfig` and `registry` property with value corresponding to the github registry for your user account
- `.npmrc` file
   - create if it doesn't exist
   - specify username, registry path and authToken