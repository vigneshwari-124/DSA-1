class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

let node1=new Node(10)
let node2=new Node(20)
let node3=new Node(30)

// //connect the list

node1.next=node2
node2.next=node3

// //insert in first

let startNode=new Node(5)
startNode.next=node1
node1=startNode

// //insert in end

let endNode=new Node(40)
node3.next=endNode

//insert in middle between 20 and 30
//insert in middle between 10 and 20

let midNode=new Node(15)

// midNode.next=node2.next
// node2.next=midNode

let previ=node1.next

midNode.next=previ.next
previ.next=midNode


//delete 1st node

node1=node1.next

//delete last node

node3.next=null

//delete middle node

// node1.next=node2

let mid=node1.next
mid.next=node2

// //replace first position

node1.data=100
node1.next.data=150
node3.data=300


// let current=node1
// while(current!==null){
//     console.log(current.data)
//     current=current.next
// }


//reverse linked list
function reverse(head){
let prev=null
let current=head

while(current!==null){
    let next=current.next
    current.next=prev
    prev=current
    current=next
}
 return prev
}
node1=reverse(node1)

let temp=node1
while(temp!==null){
    console.log(temp.data)
    temp=temp.next
}
