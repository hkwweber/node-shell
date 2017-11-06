exports.pwd = function() {
  // process.stdout.write(__dirname);
  return __dirname.toString();
}

exports.date = function() {
  let datetime = new Date();
  output = datetime.toString();
  return output;

  // process.stdout.write(output);
}
