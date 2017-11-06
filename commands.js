var fs = require('fs');

exports.pwd = function() {
  process.stdout.write(__dirname + "\n");
  process.stdout.write("prompt > ");

}

exports.date = function() {
  let datetime = new Date();
  output = datetime.toString();


  process.stdout.write(output + "\n");
  process.stdout.write("prompt > ");
}

exports.ls = function(){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  });
  //process.stdout.write()
}

