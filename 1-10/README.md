import statement in ES6 are static, whereas it can be dynamic in commonjs, which means doing something like this is not possible

import foo from 'some_module'+VARIABLE_NAME;

loaders are executed from right to left

webpack expects javascript to be returned by the last loader.

a loader is expected to export a function and be written in node.js compatible javascript 

npm init -y is used to create default package.json

3 ways to make development process fast

1. webpack watch mode - required to reload page manually to see changes

2. webpack dev server - page will automatically reload(live reloading)

3. webpack dev middleware - webpack dev server internally uses this mechanism to live reload

3 ways to do code splitting effectively

1. entry points - manually split code using entry configuration

2. prevent duplication - use splitchunkplugin to avoid dedupe and split chunks

3. dynamic imports - split code via inline function calls within modules