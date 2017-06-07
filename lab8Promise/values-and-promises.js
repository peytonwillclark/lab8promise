function attachTitle(name) {
    return 'DR. ' + name;
}

var p = Promise.resolve('MANHATTAN');

// p.then(function(lastName) {
//     return attachTitle(lastName);
// }).then(function(nameWithTitle) {
//     console.log(nameWithTitle);
// });

p
.then(attachTitle)
.then(console.log);
