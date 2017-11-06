process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line



process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    var output;
    if (cmd === "pwd") {
        output = commands.pwd();
        // output = __dirname;
    } else if (cmd === "date") {
        output = commands.date();
        // let datetime = new Date();
        // output = datetime.toString();
    }


    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  
  });



// require("./fileb.js")
var commands = require('./commands.js');
// console.log(commands);

commands.pwd;