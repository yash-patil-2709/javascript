function longestToken(str){
  var a="";

  for (var i = 0; i < str.length; i++) {

    if(str[i]!='a' && str[i]!='b'){

        for (var j = i+1; j < str.length; j++) {

          if(str[j]!='a' && str[j]!='b'){
            continue;
          }
          else{
            if(a.length<(str.substr(i,j-i).length)){
              a=str.substr(i,j-i);
            }
            i=j+1;
            break;
          }
        }

        }
        else{
          i+=1;
    }
  }
  console.log(a);
}

longestToken("ababcdababefgababhiab");
