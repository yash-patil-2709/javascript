function prac(){
  function person(fname,lname,age,skills,dateofbirth,address,married,profession)
     {
     this.fname=fname;
     this.lname=lname;
     this.age=age;
     this.skills=skills;
     this.dateofbirth=dateofbirth;
     this.address=address;
     this.married=married;
     this.profession=profession;
     }

     amithab=new person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst");
     abhisheik=new person("abhisheik",21,"HTML","08/06/1997","false","jr analyst");
    // var abhisheik=Object.create(this.amithab);

    aardhya=new person("aardhya",07,"no skills","23/01/03","false","jr analyst");

    abhisheik.lname=amithab.lname;
    abhisheik.address=amithab.address;

    aardhya.lname=amithab.lname;
    aardhya.address=amithab.address;


     console.log(amithab);
     console.log(abhisheik);
     console.log(aardhya);
     

     console.log(aardhya.lname);
     console.log(aardhya.address);
}
