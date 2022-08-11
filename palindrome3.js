let str2="";
let str3="";
function palin(str){
    let len=(str.length);
    for(let i=0;i<=len/2;i++){
        str2=str2+str[i];
        str3=str3+str[len-1-i];

    }
    if(str2==str3){
    console.log("palin");
    }
    else{
        console.log("not palin")
    }

}
palin("alayalama");