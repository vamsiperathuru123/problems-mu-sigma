let str2=""


function palin(str){
    for(let i=str.length-1;i>=0;i-- ){
       str2=str2+str[i];
       
}
if(str2==str){
    console.log(str," is a palin");

}
else{
    console.log(str,"is not a palin");
}
}
palin("malayalam")
