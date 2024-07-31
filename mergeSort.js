const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

function mergeSort(arr) {
    if (arr.length === 1){
        return arr;
    }else{
        let midIndex = Math.ceil(arr.length/2)
        let leftArr = mergeSort(arr.slice(0, midIndex));
        let rightArr = mergeSort(arr.slice(midIndex, arr.length));

        let mergedArr = [];
        let l = 0;
        let r = 0;
        for (let i = 0; i< arr.length - 1; i++){
            if (leftArr[l] > rightArr[r]){
                mergedArr.push(rightArr[r]);
                r++;
            }else if (leftArr[l] < rightArr[r]){
                mergedArr.push(leftArr[l]);
                l++;
            }else if (leftArr[l] === rightArr[r]){
                mergedArr.push(rightArr[r]);
                r++;
            }   
            if (l >= leftArr.length){
                mergedArr.push(rightArr[r]);
                r++;                
            }else if (r >= rightArr.length) {
                mergedArr.push(leftArr[l]);
                l++;
            }
        }

        return mergedArr;
    }
};

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));

console.log(JSON.stringify(mergeSort(arr1)) === JSON.stringify([0, 1, 1, 2, 3, 5, 8, 13]))
console.log(JSON.stringify(mergeSort(arr2)) === JSON.stringify([79, 100, 105, 110]));