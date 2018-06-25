module.exports = function func(arr, sum){
    const table = {}
    if (arr.length < 2){
        return []
    }
    for (let i = 0; i < arr.length; i++){
        let opp = sum - arr[i]
        let search = opp.toString();
        if (table[search] !== undefined){
            return [table[search], i]
        }
        table[arr[i]] = i
    }
    return []
}