var read = require('readline-sync');

module.exports = {


    input() {
        var readLine = require('readline');
        var rl = readLine.createInterface({

            input: process.stdin,
            output: process.stdout
        
        });
        return rl;
    },
    inputread() {
        var indices = read.question("");
        return indices;
    },

    inputReadLineArray(arr, rl) {
        console.log("Enter " + rl + " elements");
        for (let i = 0; i < rl; i++) {
            arr[i] = read.question("");
        }
        return arr;
    },

 /** Replace String :
            * @param -taking from user 
            * @description - it takes userinput and print the string with userinput
 */ 

    replace(userinput) {
        if (userinput.length >= 3){
            console.log("hello" + userinput + "! how are you?"); }
        else {
            console.log("please enter username minimum 3 characters");
        }
     },

 /** Flip Coin
           * @param st,userinput taking from the user
           * @description -Use Random Function to get value between 0 and 1. If < 0.5 then tails or
           *                heads
 */
/**p
 * 
 */
 flipcoin(st) {
        let n = 0, head = 0, tail = 0;
         for (let i = 1; i <= st; i++) {
            n = Math.random();
            if (n >0.5) {
                head++;
            }
            else {
            tail++;
            }
        }
        console.log("no of heads is :" + head);
        console.log("no of tails is :" + tail);
        let hp = (head / st) * 100;
        console.log("the head% is :" + hp + "%");
        var tp = (tail / st) * 100;
        console.log("the tail% is :" + tp + "%");
    },

   /** Leap Year :
            * @param - year taking from the user
            * @description - Determine if it is leap year and print the year is Leap year 
            *                 or Not
   */
     leapYear(year) {
        if (year.length == 4){
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            console.log("It is a leap year");
            }
            else {
                 console.log("It is not leap year");
            }
        }
        else {
            console.log("Plz enter 4 digit number");
        }
    },

 
    /** Power Of 2
            * @param - userinput taking from the user
            * @description - it will print the power values of 2 upto to the userinput given by user
    */

    findPower(num) {
          var i = 0;
          var powerOfTwo = 1;
          while (i <= num)  //repeat until i equals n
        {
            console.log(i + "\t" + powerOfTwo);    //print power of two
            powerOfTwo = 2 * powerOfTwo;
            i = i + 1;
        }
    },

   /** Harmonic Number
            * @param - num taking from the user
            * @description - it will print the Nth harmonic value
    */

    Harmonic(N) {
        var sum = 0.0;

        for (i = 1; i <= N; i++) {
            console.log("1/" + i + "+");
            sum += 1.0 / i;
        }

        console.log(sum);
    },

    /** Prime Factorization
            * @param - num taking from the user
            * @description - print the prime factors of num
    */

    primeFactor(number) {
        for (let i = 2; i <= number / i; i++) {
            console.log("{i=" + i + ",number=" + number + " }");
            while (number % i == 0) {
                number = number / i;
                console.log("Factor: " + i);
            }
        }
        if (number > 1) {
            console.log("Factor: " + number);
        }
        console.log();
    },


    /** Gambler
            * @param - userinput,stake,goal taking from the user 
            * @description - Play till the gambler is broke or has won
            *                Print Number of Wins and Percentage of Win and Loss.
    */
    gambling(stake, goal, num) {
        var bets = 0;
        var wins = 0;
        var loss = 0;for (i = 0; i < num; i++) {
            var cash = stake;
            while (cash > 0 && cash < goal) {
                bets++;
                if (Math.random() < 0.5) {
                    cash++;
                }
                else {
                    cash--;
                }
            }
            if (cash == goal) {
                wins++;
            }
            else {
                loss++;
            }
        }
        console.log(wins + " wins of " + num);
        console.log("percentage of wins=" + 100.0 * wins / num + "%");
        console.log(loss + " loss of " + num);
        console.log("percentage of loss=" + 100.0 * loss / num + "%");
    },

    /** Coupon Numbers
        * @param - number taking from the user
        * @description - Given N distinct Coupon Numbers, how many random numbers do you
        *                need to generate distinct coupon number? This program simulates this random
        *                process.
    */ 

    getCoupon(n) {
        var size = 0;
        var arr = new Array(n);
        while (size < n) {
            var x = Math.round(Math.random()*1000);
            console.log(x);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != x && x > 0) {
                    arr[i] = parseInt(x);
                    size++;
                }}
        }
    },


    
    /** 2D Array
        * @param - row taking from the user
        * @description - Print function to print 2 Dimensional Array.
    */

    array(row, coloumn) {
        var prompt = require('prompt-sync')();
        let arr = new Array(row);
       // let arr1=new Array(coloumn);
        var coloumn = prompt('enter no of coloums');
        for (let i = 0; i < row; i++) {
            arr[i] = new Array(coloumn);
            for (let j = 0; j < coloumn; j++) {
                arr[i][j] = prompt('enter element: ');
            }
        }
               console.log(arr);
    },

   /** Sum Of Three integers add to Zero
           * @param - Number of elements taking from users
           * @description - A program with cubic running time. Read in N integers and counts the
           *                number of triples that sum to exactly 0.
    */
    getTriplets(arr) {       
        var count = 0;
        var num1 = 0;
        var num2 = 0;
        var flag = false;
        for (let i = 0; i < arr.length - 2; i++) {
            for (let j = i + 1; j < arr.length - 1; j++) {
                for (let k = j + 1; k < arr.length; k++) {
                    if ((Number(arr[i]) + Number(arr[j]) + Number(arr[k])) == 0 && num1 == 0 && num2 == 0) {
                        num1++;
                        num2++;
                        count++;
                        console.log("Triplets are: ", +arr[i] + "\t" + arr[j] + "\t" + arr[k] + "\t");
                        flag = true;
                    }
                }
            }
        }
        if (flag == false) {
            console.log("No triplets found");
        }
        return count;
    },

    /** Distance
            * @param - x,y taking from the user
            * @description - takes two integer command­line arguments x
            *                and y and prints the Euclidean distance from the point (x, y) to the origin (0, 0).
    */
    getDistance(x, y) {
        var dist = Math.pow(((x * x) + (y * y)), 0.5);
        console.log("distance from (" + x + ", " + y + ") to (0, 0) = " + dist);

    },


    /** Permutation
        * @param - str taking from the user
        * @description - to return all permutations of a string
    */

    doPermute(str) {
        var a, z, A, Z;
        if ((str >= 'a' && str <= 'z') || (str >= 'A' && str <= 'Z')) {
            var permutations = [];
            doPerm1(str, []);
            console.log(permutations);
            function doPerm1(str, arr) {
                if (typeof (str) == 'string')
                    str = str.split('');
                if (str.length == 0)
                    permutations.push(arr.join(''));
                for (var i = 0; i < str.length; i++) {
                    var x = str.splice(i, 1);
                    arr.push(x);// it will add items to the end of the array
                    doPerm1(str, arr);
                    arr.pop();//it removes last element from array and returns that element
                    str.splice(i, 0, x);// from index i it will add x
                }
            }
        }
        else {
            console.log("please enter string");
        }
    },

   
    /** StopWatch Program
            * @param - startTime 1 and stopTime 0 taking as input 
            * @description - Write a Stopwatch Program for measuring the time that elapses between
            *                 the start and end clicks           
    */
     getTime()
      {   var d=new Date();
          var t=d.getTime();
          console.log(""+t);
           return t;
      },
      getElapsedTime(startTime,stopTime)
      {
          var elapsed=stopTime-startTime;
          return elapsed;
         
      },

    /** Quadratic
          * @param - a,b,c taking from the user 
          * @description - Take a, b and c as input values to find the roots of x.
    */

    findRoots(a, b, c) {
        var roots1;
        var roots2;
        var delta;
        var delta = b * b - 4 * a * c;
        if (delta > 0){
           var root1 = (-b + Math.sqrt(delta)) / (2 * a);
           var root2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log("Root1: " + root1);
            console.log("Root2: " + root2);
        }
        else if (delta == 0)     //real and equal
        {
            var root1= (-b+Math.sqrt(delta)) /(2 * a);
            console.log("Root1:" + root1);
        }
        else {   
           console.log("roots are real and imaginary");
        }
    },


    /** WindChill
            * @param - t,v taking from the user
            * @description - Given the temperature t (in Fahrenheit) and the wind speed v (in miles per hour),
            *                the National Weather Service defines the effective temperature (the wind chill) to be
            *                Note : the formula is not valid if t is larger than 50 in absolute value or if v is larger
            *                than 120 or less than 3 (you may assume that the values you get are in that range).
     */

    findWC(t, v) {
        var t, v, w, a;
        a = Math.pow(v, 0.16);
        if (t < 50 && v < 120 && v > 3) {
            w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * a;
            console.log("windchill is:" + w);
        }
        else {
            console.log("invalid input");
        }
    },



/************************************************************************* */


    angaram(str1,str2)
    {
        var x=str1.toLowerCase().split("").sort().join('');
        var y=str2.toLowerCase().split("").sort().join('');
        
         if(x.length===y.length){
             if(x===y)                //check if characters matches
             {
                 console.log(str1+" and "+str2+" are anagrams!!");
             }
             else
             {
                 console.log(str1+" and "+str2+" are not anagrams!!");
             } }
            else
            console.log("length do not match");
    },


    primeNumber(min,max)
    {
    primeArray=[];
    var cn,count;
    for(let i=min;i<=max;i++){
        cn=i;
        count=0;
        for(let j=1;j<=cn;j++){
            if(cn%j==0){
                count++;
            }
        }
         if(count==2) {
        primeArray.push(cn);
        console.log(""+cn);
                }}
    return(primeArray);
    },

    primeanapal(min,max)
    {
        var pallindrome=[];
        var primeArray=[];
        primeArray=this.primeNumber(min,max);
        console.log(primeArray);
        for(var i=0;i<primeArray.length;i++)
        {
        if(primeArray[i]==this.reverseNum(primeArray[i]))
        {
            pallindrome.push(primeArray[i]);
        }
        }
         console.log("prime numbers that are pallindrome are:\n "+pallindrome);
        for(var k=0;k<primeArray.length;k++)
        {
        for(var j=k+1;j<primeArray.length;j++)
            var num1=((primeArray[k].toString()).split("")).sort();
            var num2=((primeArray[j].toString()).split("")).sort();
            var n1=num1.join("");
            var n2=num2.join("");
            if(n1==n2)
            {
                console.log("anagram pair ("+primeArray[k]+","+primeArray[j]+")");
            }
        }
         
    },

    reverseNum(number)
    {
        var rev=0;
        var digit;
        while(number>0)
        {
        digit=number%10;
        rev=rev*10+digit;
        number=(number-digit)/10;
        }
         return(rev);
    },

    binaryInt(size)
    {
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
        for(var i=0;i<size;i++){
          arr[i]=prompt("enter the number: ");
        }
        var a=0;
        var b=0;
        var c=0; 
        var count=0;
        for(var i=0;i<arr.length;i++)
        {
        if(arr[i].search(a)==-1 && arr[i].search(c)==-1)
        {
            count++;
        }
        if(count==arr.length)
        {
            arr.sort(function(a,b){
            return a-b;
            });
            console.log(arr);
            var first=0,last=size-1;
            var value=prompt("enter the element to search: ");
            while(first<=last)
            {
                var mid=Math.floor((first+last)/2);
                if(value==arr[mid])
                {
                    a=1;
                    break;
                }       
                else
                {       
                    if(value>arr[mid])
                    {
                        first=mid+1;
                    }
                    else
                    {
                        last=mid-1;
                    }
                }
            }
                    if(a==1)
                    {
                        console.log("element found at index: "+mid);
                    }
                    else
                    {
                        console.log("element not found");
                    }
        }
           
    }
    },
    

    binarystring(size)
    {
        var prompt=require('prompt-sync')();
        var arr=new Array(size);
        var a=0;
        for(var i=0;i<size;i++)
        {
            arr[i]=prompt("enter the strings: ");
        }
        var a=/[a-zA-Z]/g;
        var b=/[0-9]/g;
        var c=/[!@#$%^&*()<>+-/"'?]/g;
        var count=0;
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i].search(b)==-1 && arr[i].search(c)==-1)
            {
                count++;
            }
        }
    
            if(count==arr.length)
            {
                arr.sort(function(a,b){
                return a-b;
                }); 
                console.log(arr);
                var first=0, last=size-1;
                var str=prompt("enter the string to search: ");
                while(first<=last)
                {
                    var mid=Math.floor((first+last)/2);
                    if(str==arr[mid])
                    {
                        a=1;
                        break;
                    }
                    else
                    {
                        if(str>arr[mid])
                        {
                            first=mid+1;
                        }
                        else
                        {
                            last=mid-1;
                        }
                    }
                }
                    if(a==1)
                    {
                        console.log("string found at index: "+mid);
                    }
                    else
                    {
                        console.log("string not found");
                    }
            }
            
    },

    insertionInteger(size)
    {
            var prompt=require('prompt-sync')();
            let arr=new Array(size);
            for(var i=0;i<size;i++)
            {
                arr[i]=prompt("enter numbers: ");
                
            }
            var a=/[a-zA-Z]/g;
            var b=/[0-9]/g;
            var c=/[!@#$%^&*()<>+-/"'?]/g;
            var count=0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].search(a)==-1 && arr[i].search(c)==-1)
                {
                    count++;
                }
            }
                if(count==arr.length)
                {
                    console.log(arr);
                    this.insertionInt(arr);
            
                    arr.forEach(element =>
                    {
                        console.log(element);
                    });
                }       
                else
                {
                    console.log("please enter integer");
                }        
    },


    insertionInt(arr)
    {
        for(let i=1;i<arr.length;i++)
        {
            var k=parseInt((arr[i]));
            var j=i-1;
                while(j>-1 && arr[j]>k)
                {
                    arr[j+1]=parseInt(arr[j]);
                    j--;
                }
                    arr[j+1]=k;
        }
    },


    insertionsortString(size)
    {
            var prompt=require('prompt-sync')();
            let arr=new Array(size);
            for(var i=0;i<size;i++)
            {
                arr[i]=prompt("enter strings: ");
            }
                var a=0;
                var b=0;
                var c=0;
                var count=0;
               for(var i=0;i<arr.length;i++)
                 {
                    if(arr[i].search(b)==-1 && arr[i].search(c)==-1)
                    {
                        count++;
                    }
                 }
        if(count==arr.length)
        {
            console.log(arr);
            this.insertionString(arr);
            for(var i=0;i<arr.length;i++)
            {
                console.log()
            }
            arr.forEach(element =>
                {
                    console.log(element);
                });
        }
        else
        {
            console.log("please enter string");
        }        
    },
    
    
    insertionString(arr)
    {
        for(let i=1;i<arr.length;i++)
        {
            var k=((arr[i]));
            var j=i-1;
            while(j>-1 && arr[j]>k)
            {
                arr[j+1]=(arr[j]);
                j--;
            }
            arr[j+1]=k;
        }
    },
    

    bubblesortInteger(size)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(size);
        for(let i=0;i<size;i++)
        {
            arr[i]=prompt("enter numbers: ");
            
        }
            var a=/[a-zA-Z]/g;
            var b=/[0-9]/g;
            var c=/[!@#$%^&*()<>+-/"'?]/g;
            var count=0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].search(a)==-1 && arr[i].search(c)==-1)
                {
                    count++;
                }
            }

        if(count==arr.length)
        {
        console.log(arr);
        this.bubbleInt(arr);
        arr.forEach(element =>
            {
                console.log(parseInt(element));
            });  
        }
        else
        {
            console.log("please enter integer");
        }
    },
    bubbleInt(arr)
    {
        for(let i=0;i<arr.length-1;i++)
        {
            for(let j=0;j<arr.length-1-i;j++)
            {
                if(parseInt(arr[j])>parseInt(arr[j+1]))
                {
                    var temp=parseInt(arr[j]);
                    arr[j]=parseInt(arr[j+1]);
                    arr[j+1]=temp;
                }
            }
        }
    },
    bubblesortString(size)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(size);
        for(let i=0;i<size;i++)
        {
            arr[i]=prompt("enter strings: ");
            
        }
            var a=/[a-zA-Z]/g;
            var b=/[0-9]/g;
            var c=/[!@#$%^&*()<>+-/"'?]/g;
            var count=0;
            for(var i=0;i<arr.length;i++)
            {
                if(arr[i].search(b)==-1 && arr[i].search(c)==-1)
                {
                    count++;
                }
            }

        if(count==arr.length)
        {
        console.log(arr);
        this.bubbleString(arr);
        arr.forEach(element =>
            {
                console.log(element);
            });  
        }
        else
        {
            console.log("please enter string");
        }
    },
    bubbleString(arr)
    {
        for(let i=0;i<arr.length-1;i++)
        {
            for(let j=0;j<arr.length-1-i;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
    },



    getCurrentTime()
    {
        var d=new Date();
        var n=d.getTime();
        return n;   
    },
    getElapsedTime(start,stop)
    {
       
       var elapsed=(stop-start)/1000;
      return elapsed;
       
    },



    questionNumber(number)
    {
        var prompt =require('prompt-sync')()
        var n = Math.pow(2,number)
        console.log('Think of a number between 0 and ' + n)
        var low = 0;
        var high = n;
        var secret = this.question(low,high)
        console.log('Your number is '+secret)
    },
        
    question(low ,high)
    {
        var prompt =require('prompt-sync')()
            if ((high - low) == 1) 
            return low;
            else        
            var mid =low + (high-low) / 2;
                console.log("Is it less than  " , +mid)
                var choice = prompt('Enter the choice in true or false : ')
                if(choice ==='true')
                 {
                    return this.question(low,mid)
                 }
                else if(choice === 'false')
                {
                    return this.question(mid,high)
                }
                else
                {
                    console.log('Not valid')
                }
    },


    binarywordlist(arr,value)
    {
            var a=0;
            arr=arr.sort();
            console.log(arr);
            var first=0,last=arr.length-1;
            while(first<=last)
            {
                
                var mid=Math.floor((first+last)/2);
                if(value==arr[mid])
                {
                    a=1;
                    break;
                }
                else
                {
                    if(value>arr[mid])
                    {
                        first=mid+1;
                    }
                    else
                    {
                        last=mid-1;
                    }
                }
            }
            if(a==1)
            {
                console.log("element found at index: "+mid);
            }
            else
            {
                console.log("element not found");
            }
           
    },



    InsertionSort(size)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(size);
         for(var i=0;i<size;i++)
         {
             arr[i]=prompt("enter elements: ");
                    
         }
          var a=/[a-zA-Z]/g;
          var b=/[0-9]/g;
          var c=/[!@#$%^&*()<>+-/"'?]/g;
          var count=0;
                
          for(var i=0;i<arr.length;i++)
          {
            if(arr[i].search(b)==-1 && arr[i].search(c)==-1)
            {
                  count++;
            }
          }
            var flag=false;
            if(count==arr.length)
            {
                console.log(arr);
                this.insertion(arr);
                
                arr.forEach(element =>
                    {
                        console.log(element);
                        flag=true;
                    });
                }
                else
                {
                    console.log("please enter a string");
                    process.exit();
                }    
                if(flag)
                process.exit();     
        },

    insertion(arr)
    {
            for(let i=1;i<arr.length;i++)
            {
                var key=((arr[i]));
                var j=i-1;
                while(j>-1 && arr[j]>key)
                {
                    arr[j+1]=(arr[j]);
                    j--;
                }
                arr[j+1]=key;
            }
    },    



    bubbleSort(size)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(size);
        for(let i=0;i<size;i++)
        {
            arr[i]=prompt("enter elements: ");
                
        }
         var a=/[a-zA-Z]/g;
         var b=/[0-9]/g;
         var c=/[!@#$%^&*()<>+-/"'?]/g;
         var count=0;
         for(var i=0;i<arr.length;i++)
         {
            if(arr[i].search(a)==-1 && arr[i].search(c)==-1)
            {
                 count++;
            }
         }
    
         var flag=false;
             if(count==arr.length)
             {
                console.log(arr);
                this.bubble(arr);
                arr.forEach(element =>
                 {
                     console.log(parseInt(element));
                     flag=true;
                 });
                            
             }        
            else
            {
                 console.log("please enter integers");
                 process.exit();
            }
            if(flag)
            process.exit();
                            
    },

    bubble(arr)
    {
        for(let i=0;i<arr.length-1;i++)
        {
            for(let j=0;j<arr.length-1-i;j++)
            {
                if(parseInt(arr[j])>parseInt(arr[j+1]))
                {
                    var temp=parseInt(arr[j]);
                    arr[j]=parseInt(arr[j+1]);
                    arr[j+1]=temp;
                }
            }
        }
          
    },

    mergeSort(size)
    {
        var prompt=require('prompt-sync')();
        let arr=new Array(size);
            for(let i=0;i<size;i++)
            {
                arr[i]=prompt("enter elements: ");
                
            }
            console.log((arr));
            this.merge((arr));
            arr.forEach(element =>
                {
                    console.log(parseInt(element));
                });
                process.exit();
    },  
    merge(arr)
    {
        if(arr.length==1)
        {
            return; 
        }
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
            for(i=0;i<a1.length;i++)
            {
                a1[i]=parseInt(arr[i]);
            }
                for(var j=0;j<a2.length;j++,i++)
                {
                    a2[j]=parseInt(arr[i]);
                }
        this.merge(a1);
        this.merge(a2);//dividing
        this.merger(a1,a2,arr);
    },
    merger(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])
            {
                c[k]=parseInt(a[i]);
                i++;
                k++;
            }
            else
            {
                c[k]=parseInt(b[j]);
                k++;
                j++;
            }
        }
        while(i<a.length)
        {
            c[k]=parseInt(a[i]);
            k++;
            i++;
        }
        while(j<b.length)
        {
            c[k]=parseInt(b[j]);
            k++;
            j++;
        }
    },

    Notes(amount)
    {
        var count = 0, countnotes = 0, countChange = 0;
        var notes = [1000, 500, 100, 50, 10, 5, 2, 1];
        var countNotes = [];
        for (let i = 0; i < notes.length; i++) 
        {
            if (amount >= notes[i]) 
            {
                countNotes[i] = Math.floor(amount / notes[i]);
                amount = amount - notes[i] * countNotes[i];
    
            if (notes[i] > 5 && countNotes[i] != 0) 
            {
                 countnotes = countnotes + countNotes[i];
            }
            if (notes[i] < 10 && countNotes[i] != 0)
            {
                 countChange = countChange + countNotes[i];
            }
            }
    
        }
    
    
            this.printNoOfNotes(notes, countNotes);
            console.log("Minimum number of notes is " + this.minimumNotes(countnotes));
            console.log("Change which you get is " + this.getChange(countChange));
    },
    
    getChange(countChange) 
    {
            return countChange;
    },
    
    printNoOfNotes(notes, countNotes) 
    {
    
        for (let i = 0; i < countNotes.length; i++) 
        {
            if (countNotes[i] != undefined) {
                console.log(notes[i] + "  Rupees notes : " + countNotes[i]);
            }
        }
    
    },
    
    minimumNotes(count) 
    {
        return count;
    },


    dayOfWeek(day, month, year) {
        var y0 = year - Math.floor((14 - month) / 12);
        var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
        m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
        var d0 = (day + x + Math.floor((31 * m0) / 12)) % 7;
        var res = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "saturday"];
        if (d0 <= res.length) {
            console.log("Day is " + res[d0]);
        }
        else {
            console.log("Invalid day ")
        }
    },

monthPay(P,Y,R)
{

    var P,Y,R,payment;
    var n=12*Y;
    var r=R/(12*100);
       
    var payment=  (P*r)/(1-Math.pow((1+r),(-n)));
    console.log("Payment: ",+payment);


},

newtonsqrt(c)
{
    var t=c;
    var epsilon=1e-15;
    while(Math.abs(t-(c/t))>epsilon*t)
      {
                    
             t=((c/t)+t)/2;
      }
      console.log("the square root of number is: "+t);
},

toBinary(n) 
{
    if(n==0)
    {
        console.log(0);
    }
    else
    {
        var arr=[],i;
    }
    for(var i=0;n>0;i++)
    {
        arr[i]=Math.floor(n%2);
        n=Math.floor(n/2);
    }
    console.log("\n Binary of given number is: ");
    console.log(arr.reverse());
},

binarynibbles(n)
{
    var flag=0,s1,s2;
    s1=n & 0x0F;//0x0F means it takes last 4 bits one
    s2=n & 0xF0;// 0xF0 means it takes last but one 4 bits one
    s1=s1<<4;// shifting 4 bits left
    s2=s2>>4;// shifting 4 bits right
    var res=s1 | s2;
    console.log(res);
    for(var i=res;i>0;i--)
    {
        if(res==Math.pow(2,i))
        {
            flag=1;
            break;
        }
    }
        if(flag==1)
        {
            console.log("number is power of: "+i);
        }
        else
        {
            console.log("not a power of 2");
        }

},

}

















































