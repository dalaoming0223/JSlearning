let array = [1,4,-8,-3,6,12,9,8];
function sort(arr){
    for(let j=0;j<arr.length-1;j++){
    //两两比较，如果前一个比后一个大，则交换位置。
       for(let i=0;i<arr.length-1-j;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        } 
    }
}
sort(array)
console.log(array)