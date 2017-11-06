var fs = require('fs');

exports.pwd = function(e) {
  process.stdout.write(__dirname + "\n");
  process.stdout.write("prompt > ");

}

exports.date = function(e) {
  let datetime = new Date();
  output = datetime.toString();


  process.stdout.write(output + "\n");
  process.stdout.write("prompt > ");
}

exports.ls = function(e){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  });
  //process.stdout.write()
}

exports.echo = function(str) {
  //

  process.stdout.write(str + "\n");
  process.stdout.write("prompt > ");
}

exports.cat = function(file) {
  fs.readFile(file, function(err,data) {
    if (err) throw err;
    process.stdout.write(data + "\n");
  })
  // files.forEach(function(file) {
    // process.stdout.write(file.toString() + "\n");
  // })

  process.stdout.write("prompt > ");
}

exports.head = function(file) {
  fs.readFile(file, function(err,data) {
    if (err) throw err;
    var linesArr = data.toString().split("\n");
    for (var i = 0; i < 5; i++) {
      process.stdout.write(linesArr[i]);
      process.stdout.write("\n");
      
    }
    process.stdout.write("prompt > ");
  })
  
}

exports.tail = function(file) {
  fs.readFile(file, function(err,data) {
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



