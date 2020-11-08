function fibonacci(num)
    {

        var num1=1;
        var num2=1;
        var sum;
        var i=2;
        while (i<num)
        {
            sum=num1+num2;
            num1=num2;
            num2=sum;
            i+=1;
        }
        return num2;
    }
document.getElementById("c").innerHTML="Fibonacci series is: "+fibonacci(100);
