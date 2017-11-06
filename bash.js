
var commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    commands[cmd]();

    //process.stdout.write('\nprompt > ');
  
  });

