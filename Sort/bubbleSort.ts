



function bubbleSort(arr:Array<number>){
    let swap = false
    const n = arr.length
    for(let i=0;i<n-1;i++){
        for(let j = 0 ; j<n-1-i;j++ ){
            if(arr[j]>arr[j+1]){
                const t = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=t
                swap = true
            }
        }

        if(!swap){
            break;
        }
    }
}