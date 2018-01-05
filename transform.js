var fs = require('fs');

var log = (...args) => {
	console.log(new Date().toISOString().concat(" ", args.join(" ")))
}

var fileToRead = 'data.csv'
var fileToWrite = 'clean_data.csv';
var count = 0;

if (!fs.existsSync(fileToWrite)) {
	fs.writeFile(fileToWrite, "", (e, r) => {
		console.log(e, r);
	})
}

var transformRow = (line) => {
	//TODO transform each row as needed
	if (a = line.match(/ObjectId\((.*?)\)/)) {
		var rawId = a[1];
		line = line.replace(a[0], rawId);
		line = line.trim();
	}
	return line;
}

log("Starting to read file", fileToRead);

var lineReader = require('readline').createInterface({
	input: fs.createReadStream(fileToRead)
});


lineReader.on('line', function(line) {
	count++;
	log('Entries completed:', count);
	line = transformRow(line)
	fs.appendFile(fileToWrite, line + "\r\n", (e, c) => {})
});

//test code to check the transform logic
// var line = 'ObjectId(597fcb7c55aaeadc0e18c82d),test,2017-08-01T00:43:35.713Z'
// log(transformRow(line));