class BSTNode{
    val:number;
    left:BSTNode|null;
    right:BSTNode|null;
    constructor(val:number){
        this.val = val;
        this.left = null
        this.right = null
    }
}


class BST{
    root:BSTNode|null
    constructor(root:BSTNode|null = null){
        this.root = root
    }

    addNode(val: number){
        let head = this.root
        const newNode = new BSTNode(val)
        if(head==null){
            head= newNode;
            return;
        }
        while(head){
            if(val>head.val){
                head
            }
        }
    }

    search(val:number):BSTNode|null{
        if(this.root ==null){
            return null;
        }
        let head:BSTNode|null = this.root
        
        while(head){
            if(head==null){
                return null;
            }
            if(head.val==val){
                break;
            }
            if(head.val<val){
                head = head.right
            }else{
                head = head.left
            }
            
        }
        return head;
    }
}