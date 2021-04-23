var num=4;
var a=0;
var b=1;
var c;
function fibonacci(){
       num=parseInt(document.getElementById('pallin').value);
       if(num==1){
        document.getElementById('result').innerHTML=0;
       }
       if(num==2){
        document.getElementById('result').innerHTML="0"+","+"1";
       }
       console.log('fibonacci series');
       var ou='0'+","+"1";
       for(var i=3;i<=num;i++)
       {  
             c=a+b;
             a=b;
             b=c;
             ou+=","+c;
             document.getElementById('result').innerHTML=ou;
            

        }
        console.log(ou);
        return false;
}
