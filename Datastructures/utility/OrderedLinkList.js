
/**
 * creating node function to create any new node with null values.
 */
function Node(element) { 
    this.element = element; 
    this.next = null; 
} 
function LinkedList(){ 
    /**
     * refernces for each function used in linked list operations.
     */
    this.head = new Node("head"); 
    this.find = find; 
    this.insert = insert; 
    this.remove = remove; 
    this.display = display; 
    this.findPrevious = findPrevious; 
    this.remove = remove;
    this.search=search;
    this.size=size;
    this.getval=getval;
    this.num_getval=num_getval;
    this.search_num=search_num;
    this.insert_pos=insert_pos;
} 
function find(item) { 
    /**
     * find each item if available.
     */
    var currNode = this.head; 
    while (currNode.element != item ) { 
        currNode = currNode.next; 
    } 
    return currNode;
} 
function insert(newElement, item) {
    /**
     * creating a new node-Node. */ 
    var newNode = new Node(newElement); 
    var current = this.find(item); 
    newNode.next = current.next; 
    current.next = newNode; 
}
function display() { 
    /**
     * display the updated string of integer. */
    var currNode = this.head; 
    while (!(currNode.next == null)) {
        console.log(currNode.next.element); 
        currNode = currNode.next; 
    } 
} 
function findPrevious(item) { 
    var currNode = this.head; 
    while (!(currNode.next == null) && (currNode.next.element != item)) { 
        currNode = currNode.next; 
    } 
    return currNode; 
} 
function remove(item) { 
    var prevNode = this.findPrevious(item); 
    if(!(prevNode.next == null)) { 
        prevNode.next = prevNode.next.next; 
    } 
}
function search(val)
{ 
    /**
     * search element from list and print it. 
     */
    var temp=this.head
    while(temp.element!=val && temp.next !=null)
    {
        temp=temp.next;
    }
  console.log('element is'+temp.element)
    if(temp.element===val)
    {
        return true; }
    else 
    {
        return false; }
}
function size()
{
    var temp=this.head;
    var count=0;
    while(temp.next!=null)
    {
        temp=temp.next
        count++;
    }
    return count;
}
function getval()
{
    var temp=this.head;
    var a='';
    while (!(temp.next == null))
    {        
        temp=temp.next;
        a=a+temp.element;
        a=a+' '     
    }
return a;
}
function num_getval()
{
    var temp=this.head;
    var a='';
    while(!(temp.next==null))
    {
        temp=temp.next;
        a=a+temp.element
        a=a+' '
    }
return a;
 }
 function search_num(val)
{
    var temp=this.head
    while((temp.element)!== val && temp.next !== null)
{
        temp=temp.next;   
}
    if((temp.element)==val)
    {
        return true;
    }
    else 
    {
        return false;
    }
}
function insert_pos(val)
{ 
    /**
     * insert at specific position.
     */
    var newNode = new Node(val)  
    var curr=this.head.next;
    var temp=this.head;
    while(curr!=null&&(curr.element)<newNode.element)
    {  
        temp=curr;
        curr=curr.next;
    }
    newNode.next=curr;
    temp.next=newNode;
}
module.exports={
    orderedList: function (data,num) {
        /**
         * open file */
        var fs = require('fs'); 
        var arr1 = []
        for (var i = 0; i < data.length; i++) {
            var a = data[i]
            arr1.push(a);
        }
        arr1 = arr1.sort(function (a, b) {
            return a - b;
        });
        var l = new LinkedList();
        l.insert(arr1[0], 'head')
        for (var i = 1; i < arr1.length; i++) {
            l.insert(arr1[i], arr1[i - 1])
        }
        l.display()
        var bool = l.search_num(num)
        if (bool) {
            l.remove(num);
            var a = l.num_getval();
            console.log(a);
            fs.writeFileSync('file1.txt', a.trim())
            console.log('deleted sucessfully..')
            process.exit();
        }
        else
        console.log('adding....')
        l.insert_pos(num);
        var a = l.num_getval();
        console.log(a)
        fs.writeFileSync('file1.txt', a.trim())
        console.log('added sucessfully')
        process.exit();
    }
}