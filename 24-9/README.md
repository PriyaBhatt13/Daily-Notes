There are total 4 ways to configure babel.

1. babel.config.js
2. .babelrc
3. package.json
4. .babelrc.js

1. babel.config.js

It should be created at the root of the project level where package.json resides.

useful for compiling node_modules, creating dynamic configuration

multiple package.json files in a monorepo

2. .babelrc
static configuration which applies to single package.json

3. package.json

alternative to using .babelrc config in package.json

4. .babelrc.js
configuration is same as .babelrc but we can use javascript also to write configuaration

all the nodejs APIs are available 

Babel 7 will not automatically add "use strict" at the top of commonjs Module so in order to avoid this either use transform-strict-mode plugin or add "use strict" manually in each file.

