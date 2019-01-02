var Utility=require('../utility/Utility.js');
function getCoupon()
{
    var read=Utility.input();
    read.question("enter no. of coupons:",function(n)
    {
        if ((n>='a'&&n<='z')||(n>='A'&&n<='Z'))
        {
            console.log("plz enter numbers only");
        }
        else{
          Utility.getCoupon(n);
        }  
      read.close();       
    }); 
}
getCoupon();

