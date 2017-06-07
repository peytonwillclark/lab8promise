first()
    .then(function(someSecretValue) {
        return second(someSecretValue);
    }).then(console.log);