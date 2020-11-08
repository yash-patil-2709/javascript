function prac(){
  var name=function(fname,lname){
    this.fname=fname;
    this.lname=lname;
  }

  var n=new name("yash","patil");
  document.getElementById("one").innerHTML=n.fname;
}
