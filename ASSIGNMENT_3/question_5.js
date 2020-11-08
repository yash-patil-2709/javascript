function prac(){
  var name=function(fname,mname,lname){
    this.fname=fname;
    this.mname=mname;
    this.lname=lname;
  }

  var n=new name("yash","dhondu","patil");
  document.getElementById("one").innerHTML=n.mname;
}
