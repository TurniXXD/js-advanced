// use promises e.g. for a process that will take a longer execution time
// check if num1 is equal to num2
// if numbers are equal then promise value is kept => promise will be resolved if not it will be rejected
let equals = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if(num1 == num2)
    resolve(num1 + ' is equal to ' + num2)
    else 
    reject(num1 + ' does not equal ' + num2)
  })
}

// then will be called if promise is resolved, catch will be called if promise is rejected
equals(1, 2).then((output) => {
  console.log(output)
}).catch((output) => {
  console.log(output)
})

equals(3, 3).then((output) => {
  console.log(output)
}).catch((output) => {
  console.log(output)
})

//check if num1 is greater then, equal to or smaller then 0
let numState = (num1) => {
  return new Promise((resolve) => {
    if(num1 < 0)
    resolve(num1 + ' is smaller then 0')
    else if(num1 = 0)
    resolve(num1 + ' is equal to 0')
    else 
    resolve(num1 + ' is greater then 0')
  })
}

numState(-1).then((output) => {
  console.log(output)
}).catch((output) => {
  console.log(output)
})

numState(0).then((output) => {
  console.log(output)
}).catch((output) => {
  console.log(output)
})

numState(1).then((output) => {
  console.log(output)
}).catch((output) => {
  console.log(output)
})

// combine these to promises into an array
Promise.all([numState(-1), equals(1, 1)]).then((output) => {
  console.log(output)
}).catch((output) => {
  console.log(output)
})