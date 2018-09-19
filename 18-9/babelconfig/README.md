This is a basic config setup using babel.config.js at the root of the project to compile source code.

In order to compile code from src folder to lib run following command
` ./node_modules/.bin/babel src --out-dir lib `

Instead of typing entire command everytime npx can be used. In order to use npx install npx globally
`npm install -g npx`

After installing npx we can use 
`npx babel src --out-dir lib`
