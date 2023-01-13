//스크립트가 너무 많아질경우 하나로 합치기 위해서 사용 [웹팩]
const paht = require("path");

module.exports = {
    entry : {
        app : path.join(__dirname, 'main.js'), //하나로 합쳐질 파일의 이름 -> app.js
    },
    module : {
        rules : [{

        }]
    },
    plugins : [], 
    output : {
        filename : '[name].js',
        path : path.join(__dirname, 'dist'),
    },
};