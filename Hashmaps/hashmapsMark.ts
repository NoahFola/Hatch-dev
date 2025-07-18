class ListNode<k,v>{
    key:k;
    val:v;
    next: ListNode<k,v>| null;


    constructor(key:k,value:v){
        this.key = key;
        this.val = value;
        this.next = null;
    }
}


class HashMark<k,v>{
    private buckets:Array<ListNode<k,v>|null>;
    private size: number;


    constructor(size:number=10){
        this.size = size;
        this.buckets = new Array(this.size).fill(null);
    }


    private hash(key:k):number{
        const strk = String(key);
        
    }
}