fruits = ['Apple','Banana','orange','grapes']
len=fruits.length
for(i=0;i<len;i++){
    console.log(fruits[i])
}
const revFruits = []
for(i=len-1;i>=0;i--){
    revFruits.push(fruits[i])
}
console.log(revFruits);


const num =[2,4,6,10,7,12]
largestValue = 0
secondValue = 0
for (let n of num){
    if(n> largestValue){
        secondValue=largestValue;
        largestValue=n;
    }
}
console.log("secondLargest",secondValue,"largestValue",largestValue)

function arraymerge(arr1,arr2){
    return[...new Set([...arr1,...arr2])]
}
arr1 = [1,2,3,4]
arr2 = [5,6,7,8]
mergedarray = arraymerge(arr1,arr2)
console.log(mergedarray)

function freqofelement(arr){
    freqcount = {}
    for(let num in arr){
        freqcount[num]=(freqcount[num] || 0) + 1
    }
    return  freqcount;
}
console.log(freqofelement([1,2,2,3,3,3]))


function manualinclude(arr,value){
    for(let index in arr){
        if(arr[index] === value)return true;
    }
    return false
}
console.log(manualinclude([1,2,3],2))
console.log(manualinclude([1,2,3],4))


function arrshift(arr){
    if(arr.length===0) return arr
    first = arr.shift()
    arr.push(first);
    return arr
}
console.log(arrshift([1,2,3,4]))

function removeduplicates(arr){
    return [...new Set(arr)]
}
console.log(removeduplicates([1,2,2,3,4,4,5]))

function rotateRight(arr,k){
    k %=arr.length
    return arr.slice(-k).concat(arr.slice(0,-k))
}
console.log(rotateRight([1,2,3,4,5],2))

function multiplicationTable(){
    table = []
    for(let i=1;i<=10;i++){
        let row = []
        for(j=1;j<=10;j++){
            row.push(i*j)
        }   
    }
    return table
}
console.table(multiplicationTable())


function intersection(arr1,arr2){
    return arr1.filter(item => arr2.includes(item))
}
console.log(intersection([1,2,3],[3,4,2]))