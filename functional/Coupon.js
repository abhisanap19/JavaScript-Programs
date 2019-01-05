var Utility=require('../utility/Utility.js');
/*****************************************************************************************
 *purpose   : total random number needed to have all distinct numbers.       
 * @file    : Coupon.js
 * @overview: Given N distinct Coupon Numbers, how many random numbers do you need to generate distinct
 *            coupon number? This program simulates this random process.
 * @author  : Abhijeet 
 * @version : 1.0
 * @since   : 25/12/2018 
 ***************************************************************************/
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

