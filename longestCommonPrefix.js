module.exports = function func (arr){
    let min = Infinity;
    let final = '';
    for(let i = 0; i < arr.length; i++){
        if (arr[i].length < min){
            min = arr[i].length}}
    let i = 0;
    while(i < min){
       const l =  arr[0][i]
       if (arr.every((word) => {
        return word[i] === l})){
        final += l}
    i++}
    return final}