function deQueue(){
    this.s=new Array();
    this.popback=function(){
        return this.s.pop();
    }
    this.pushback=function(item){
        return this.s.push(item);
    }
    this.popfront=function(){
        return this.s.shift();
    }
    this.pushfront=function(item){
        return this.s.unshift(item);
    }
    this.printQueue=function(){
        var str='';
        for(var i=0;i<this.s.length;i++){
            str+=this.s[i]+" ";
        }
        return str;
    }
    this.size=function(){
        return this.s.length;
    }
}
module.exports={
    Pallindrome(str){
        var d=new deQueue();
        var a=[];
        a=str.split('');
        for(var i=0;i<a.length;i++){
            d.pushback(a[i]);
        }
        console.log(d.printQueue());
        var flag=true;
        if(d.size()%2==0){
            while(d.size()>0)
            {
                var a=d.popfront();
                var b=d.popback();
                if(a!=b){
                    flag=false;
                }
            }
        }
        else{
            while(d.size()>1){
                var a=d.popfront();
                var b=d.popback();
                if(a!=b){
                    flag=false;
                }
            }
        }
        if(flag==true){
            console.log("pallindrome");
        }
        else{
            console.log("Not pallindrome");
        }
    }
}