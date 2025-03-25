const pizzaoperation = new Promise((resolve,reject)=>{
    console.log('ordered Pizza')
    success = true
    setTimeout(()=>{
        if(success){
            resolve('PizzaDelivered')
        }else{
            reject('Order Cancled')
        }
    },5000)
})

pizzaoperation
.then((response)=>console.log(response))
.catch((error)=>console.log(error))
.finally(()=>console.log('pizza delivered after 5 sec'))
