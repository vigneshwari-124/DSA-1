class Node{
    constructor(data){
        this.data=data
        this.next
    }
}

class CircleLL{
    constructor(){
        this.head=null
    }

    append(data){
        let node=new Node(data)

        if(this.head==null){
            this.head=node
            node.next=this.head //single node irutha itself same node point pannikum
        }else{
            let curr=this.head
            while(curr.next!==this.head){
                curr=curr.next
            }
            curr.next=node
            node.next=this.head
        }
    }
}

let list=new CircleLL()

list.append(10)
list.append(30)
list.append(40)