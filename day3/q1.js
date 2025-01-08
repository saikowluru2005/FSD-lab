let arr=[[1,2],[3,4],[5,6]]
function mergeArrays(...arrays) {
    return [...arrays.flat()];
}
console.log(mergeArrays(arr[0], arr[1], arr[2]));