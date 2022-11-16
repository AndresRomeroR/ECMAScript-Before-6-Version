const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Funciona');
        } else {
            reject('No Funcionó');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));