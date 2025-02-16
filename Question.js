function romanNumber(s){
    const roman = {
        'I':1 , 'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000 
    }
    let total = 0;
    for(i=0;i<s.length;i++){
        current = roman[s[i]]
        next = roman[s[i+1]]
        if(next > current){
            total -= current;
        }else {
            total += current;
        }
    }
    return total;
}
console.log(romanNumber("IX"))