function prac(){
  var rect=function(height,width){
    this.height=height;
    this.width=width;
    this.getArea=function(){
      return this.height*this.width;
    };
  }

  var r=new rect(5,4);
  r.height=6;
  document.getElementById("one").innerHTML="Area of rectangle is: "+r.getArea();
}
