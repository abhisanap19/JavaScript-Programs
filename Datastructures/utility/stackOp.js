class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length==0)
           return "Underflow";
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length==0;
    }
    printStack(){
        var str="";
        for(var i=0;i<this.items.length;i++){
            str+=this.items[i]+"";
        }
            return str;
        
    }
}
module.exports={
    simpleB(expression){
        var stack=new Stack();
        var count=0;
        var counter=0;
        for(var i=0;i<expression.length;i++){
            if(expression[i]=="("){
                stack.push(expression[i]);
                count++;
            }
            else if(expression[i]==")"){
                stack.pop();
                counter++;
            }
        }
        if(count==counter){
            console.log("True"+"\n"+"This arithmetic expression is balanced");
        }
        else{
            console.log("False"+"\n"+"The arithmetic expression is not balanced");
        }
    }
}