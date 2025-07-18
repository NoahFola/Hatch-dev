

function selectionSort(arr:Array<number>){
    const n = arr.length
    for(let i = 0 ; i<n-1;i++){
        let minIdx = i
        for(let j = i;j<n-1;j++){
            minIdx = j;
        }
        const t = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = t
    }
}