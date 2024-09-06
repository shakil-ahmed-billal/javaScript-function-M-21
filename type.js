function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number *2 ;
        return result;
    }
    else{
        const result = number * 3 ;
        return result ;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));


// problem........
function numberOfElements(number){
    const len = number.lenght;
    return len;
}

numberOfElements([23,35,23,645,34,764,46,78]);
//console.log(element);