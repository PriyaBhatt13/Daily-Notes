
const presets=[
    [
      "@babel/preset-env",{
        "useBuiltIns": "usage",
        "targets":{
          "edge": "17",
          "firefox":"60",
          "chrome": "67",
          "safari": "11.1"
        }
      }
    ] 
  ]

if (process.env["ENV"] === "prod") {
  //push plugins based on environment in configuration
  //plugins.push(...);
}

module.exports = { presets };
