var myList=[0,38,12,91,234,1000,456];
function option(){
    var max=0;
    for(i=0;i<myList.length;i++){
        if(myList[i]>max){
            max= myList[i];
        }
        else{
            max=max;
        }

    }
    return max;
}
document.getElementById("c").innerHTML="The maximum is: " +option(myList);
