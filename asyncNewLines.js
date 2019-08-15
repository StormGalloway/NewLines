var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data){
    if (err){
        return console.log(err);
    } else {
        var read = data.toString();
        var numOfLines = read.split('\n').length - 1;
        console.log(numOfLines);
    }
});