var promise1 = Promise.resolve('resolve')

var promise2 = Promise.reject('reject')

promise2.catch(function (e) {
      console.error('Not so fast!');
    });
