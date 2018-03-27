var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      }else {
        reject('Arguments must be number.')
      }
    }, 2500);
  })
};

asyncAdd(5,7).then((res) => {
  console.log('Result:', res);
  return asyncAdd(res, 32);
}).then((res) => {
  console.log('New result:', res);
}).catch((errorMessage) => {
  console.log('Error: ', errorMessage);
});