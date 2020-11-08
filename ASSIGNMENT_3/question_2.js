function prac(){
  var rectangle= {
  height:15,
  width:10,

  getArea:function(){
    return this.height*this.width;
  }
};
  document.getElementById("one").innerHTML="Area of rectangle are: "+rectangle.getArea();
}
