var fs = require('fs');

exports.pwd = function(args) {
  process.stdout.write(__dirname + "\n");//cwd in place of __dirname
  process.stdout.write("prompt > ");

}

exports.date = function(args) {
  let datetime = new Date();
  //if you use Date() without new keyword, will give you date string automatically
  output = datetime.toString();


  process.stdout.write(output + "\n");
  process.stdout.write("prompt > ");
}

exports.ls = function(args){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  });

}

exports.echo = function(args) {
  //

  process.stdout.write(args + "\n");
  process.stdout.write("prompt > ");
}

exports.cat = function(args) {
  fs.readFile(args, function(err,data) {
    if (err) throw err;
    process.stdout.write(data + "\n");
  })


  process.stdout.write("prompt > ");
}

exports.head = function(args) {
  fs.readFile(args, function(err,data) {
    if (err) throw err;
    var linesArr = data.toString().split("\n");
    for (var i = 0; i < 5; i++) {
      process.stdout.write(linesArr[i]);
      process.stdout.write("\n");

    }
    process.stdout.write("prompt > ");
  })

}

exports.tail = function(args) {
  fs.readFile(args, function(err,data) {
    if (err) throw err;
    var linesArr = data.toString().split("\n");
    var linesArrLength = linesArr.length;
    for (var i = linesArrLength-5 ; i < linesArr.length ; i++) {
      process.stdout.write(linesArr[i]);
      process.stdout.write("\n");

    }
    process.stdout.write("prompt > ");
  })

}



