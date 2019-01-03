class Stack{
    /**
     * create a new constructor to create object of item.
     */
    constructor(){
        this.items=[];
    }
    /**
     * push elements into the stack.
     */
    push(element){
        this.items.push(element);
    }
    pop(){
        /**
         * if there is no element in stack and we perform pop then it get underflow.
         */
        if(this.items.length==0)
           return "Underflow";
        return this.items.pop();
    }
    peek(){
        /**
         * it will return top element of stack without removing it.
         */
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length==0;
    }
    printStack(){
        /**
         * print stack */
        var str="";
        for(var i=0;i<this.items.length;i++){
            str+=this.items[i]+"";
        }
            return str;
        
    }
}
/**
 * exports is a object that get exposed to a module and it is by default in every js file.
 */
module.exports={
    simpleB(expression){
        /**
         * create a new stack. */
        var stack=new Stack();
        var count=0;
        var counter=0;
        for(var i=0;i<expression.length;i++){
            /**
             * if parantheses opens we will perform push operation. */
            if(expression[i]=="("){
                stack.push(expression[i]);
                count++;
            }
            /**
             * while closing parantheses we will perform pop opeartion. */
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