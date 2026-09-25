// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     // prepend(data){
//     //     let node=new Node(data)
//     //     if(this.head==null){
//     //         this.head=node
//     //     }else{
//     //         node.next=this.head
//     //         this.head=node
//     //     }
//     //     this.size++

//     // }

//     append(data){

//         let node=new Node(data)
//         if(this.head==null){
//             this.head=node
//         }else{
//             let current=this.head

//             while(current.next!==null){
//                 current=current.next
//             }
            
//             node.next=current.next
//             current.next=node

            
//         }

//         this.size++
//     }

//     search(value){
//         if(this.head==null){
//             return "list is empty"
//         }else{
//             let current=this.head
//             while(current!==null){
//                 if(current.data===value){
//                     return "value is found"
//                 }
//                 current=current.next
//             }
//         }
//         return "value is not found"
//     }

// insertIndex(data,ind){
//     let node=new Node(data)

//     if(ind<0 || ind>this.size ) return "you cant insert"
//     let curr=this.head

//     if(ind==0){
//         node.next=this.head
//         this.head=node

//     }else{

        
//      for(let i=0; i<ind-1; i++){
//         curr=curr.next
//      }

//      node.next=curr.next
//      curr.next=node

//     }
// this.size++

// return "successfully insert"

// }

// insertBefor(data,target){
//     let node=new Node(data)
//     let curr=this.head
//     while(curr.next.data!==target){
//         curr=curr.next
//     }
//     node.next=curr.next
//     curr.next=node
// }

// insertafter(data,target){
//     let node=new Node(data)
//     let curr=this.head

//     while(curr.data!==target){
//         curr=curr.next
//     }
//     node.next=curr.next
//     curr.next=node
// }

// // replace(value,ind){
    
// //     let curr=this.head
// //    for(let i=0; i<ind; i++){
// //     curr=curr.next
// //    }
// //    curr.data=value

// // }

// // reverse(){
// //     let prev=null
// //     let curr=this.head

// //     while(curr!==null){
// //         let next=curr.next
// //         curr.next=prev
// //         prev=curr
// //         curr=next
// //     }

// //     this.head=prev

// //     return this.head
// // }

// // removed(value){
// //     if(this.head==null) return "value in empty"

    
// //     if(this.head.data==value){
// //         let removed=this.head
// //         this.head=this.head.next
// //         this.size--
// //         return `removed value is ${removed}`
// //     }else{
// //         let curr=this.head

// //         while(curr.next!==null && curr.next.data !==value){
// //             curr=curr.next
// //         }

// //         let removed=curr.next

// //         curr.next=curr.next.next
// //         this.size--

// //         return `remove value is ${removed}`
// //     }
// // }

// dubplicate(){
//     let curr=this.head
    
//     // while(curr!==null){
//     //     let check=curr.next
//     //     while(check!==null){
//     //         if(check.data===curr.data){
//     //             console.log(`dubplicate is: ${check.data}`)
//     //         }
//     //         check=check.next
//     //     }
//     //     curr=curr.next

//     // }

//     let seen=new Set()
//     while(curr!==null){
//         if(seen.has(curr.data)){
//             console.log(`duplicate value is ${curr.data}`)
//         }else{
//             seen.add(curr.data)
//         }
//         curr=curr.next
//     }

// }
  
// removeDup(){
//     let curr=this.head
//     while(curr!==null){
//         let check=curr

//         while(check.next!==null){
//             if(check.next.data==curr.data){
//                 check.next=check.next.next
//                 this.size--
                
//             }else{
//             check=check.next
//             }
//         }
//         curr=curr.next
//     }
// }

// findMiddle(){
//     let fast=this.head
//     let slow=this.head

//     while(fast!==null && fast.next!==null){
//         slow=slow.next
//         fast=fast.next.next

//     }
//     return `middle value is :${slow.data}`
// }

// isCycle(){
//     let f=this.head
//     let s=this.head

//     while(f&&f.next){
//         s=s.next
//         f=f.next.next

//         if(s==f){
//             return true
//         }
//     }

//     return "is not cycle"
// }

// deleteCycle(){
//     let f=this.head
//     let s=this.head

//     while(f &&f.next){
//         s=s.next
//         f=f.next.next

//         if(f==s){
//             break
//         }
//     }

//     s=this.head
//     while(s!==f){
//         s=s.next
//         f=f.next

//     }

//     while(f.next!==s){
//         f=f.next
//     }

//     f.next=null
//     return "cycle deleted"
// }
// }


// let list=new Linkedlist()

// list.append(10)
// list.append(20)
// list.append(30)
// list.append(10)
// list.append(40)
// list.append(20)

// console.log(list.insertIndex(25,2))
// list.insertBefor(15,20)
// list.insertafter(28,25)

// // list.reverse()

// // list.replace(200,2)
// // list.removed(200)

// // list.prepend(10)
// // list.prepend(20)
// // list.prepend(30)

// // list.dubplicate()
// // list.removeDup()

// // console.log(list.findMiddle())


// //create cycle:

// let current=list.head
// let second=list.head.next

// while(current.next!==null){
//     current=current.next
// }
// current.next=second

// console.log(list.isCycle())
// console.log(list.deleteCycle())
// console.log(list.isCycle())

// // let current =list.head
// // while(current!==null){
// //     console.log(current.data)
// //     current=current.next
// // }


// // console.log(list.search(60))

// // console.log(list.size)

// // console.log(list.isEmpty())


//arry to ll:

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class Linkedlist{
    constructor(){
        this.head=null
    }

    append(data){
        let node=new Node(data)

        if(this.head==null){
            this.head=node
        }else{

        let curr=this.head
        while(curr.next!==null){
            curr=curr.next
        }
        
        curr.next=node
    }
    }

    arrayToLL(arr){
        for(let value of arr){
            this.append(value)
        }

    }
}

let arr=[10,20,30,40]

let link=new Linkedlist()

link.arrayToLL(arr)

let curr=link.head

while(curr){
    console.log(curr.data)
    curr=curr.next
}


