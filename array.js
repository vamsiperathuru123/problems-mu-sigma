function leap(arr){
    for(let i=0;i<=arr.length;i++){
        if((arr[i]%400 == 0)||( arr[i]%4 == 0 && arr[i]%100 != 0)){
            document.write(arr[i], "is a leap year");
        }
        else{
            document.write(arr[i],"is not a leap year")
        }
    }

}
module.exports = leap