var commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    // var argArr = process.argv;
    // console.log(argArr);

    var cmdArr = cmd.split(' ');
    // if (cmdArr.length === 1) {
    //  commands[cmdArr[0]]();
    // }
    // else {
      var restOfArg = cmdArr.slice(1).join(' ');
      commands[cmdArr[0]](restOfArg);
    // }

  });