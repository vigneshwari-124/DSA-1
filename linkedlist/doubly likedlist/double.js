class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}

class Double{
    constructor(){
        this.head=null
    }

    append(data){
        let node=new Node(data)
        if(this.head==null){
            this.head=node
        }else{
            let current=this.head
            while(current.next!==null){
                current=current.next
            }
            current.next=node
            node.prev=current
        }
    }
}

let list=new Double()

list.append(10)
list.append(20)
list.append(30)
list.append(40)

let curr=list.head


//ithu forword print :

// while(curr){
//     console.log(curr.data)
//     curr=curr.next
// }


//ithu reverse first last node ku poganum 

while(curr.next!==null){
    curr=curr.next
}



while(curr!==null){
    console.log(curr.data)
    curr=curr.prev
}