class Queue{
    constructor(){
        this.items=[];
    }
    enQueue(element){
        return this.items.push(element);
    }
    deQueue(){
        if(this.isEmpty())
            return "underflow";
        return this.items.shift();
    }
    front(){
        if(this.isEmpty())
            return "No elements in the queue";
        return this.items[0];
    }
    isEmpty(){
        return this.items.length==0;
    }
    len(){
        return this.items.length;
    }
    printQueue(){
        var str="";
        for(var i=0;i<this.items.length;i++)
        str+=this.items[i]+"|";
        return str;
    }
}
module.exports=Queue;