seajs.config({
    base: "./js/",//基本路径
    alias: {
        "jquery": "./sea_jquery_min.js"//引用jquery.min jquery规范和sea不同，所以需要包装一下，就是套一个define
    }})