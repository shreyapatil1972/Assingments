function taskExecut(){
    console.log('Task end asynchro')
}
// setTimeout(taskExecut,5000)
console.log('start')

taskEx = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('task end asynchro...')
    },5000)
})

taskEx.then((data)=>{
    console.log(data)
})

function exTask5secWait(){
    setTimeout(()=>{
        console.log('task Execute')
    },5000)
}


async function getData(){
    await exTask5secWait()
    // console.log(data)
}
getData();
console.log('end')