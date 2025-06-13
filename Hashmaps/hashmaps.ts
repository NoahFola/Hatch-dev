class HashmapNoah{
    private array: Array<any>;
    private size = 16;
    
    constructor(){
        this.array = new Array(16)
    }

    
    private hash(key:string):number{
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }

    public set(a:string,b:any){
        let index = this.hash(a)
        if (!this.array[index]) {
            this.array[index] = [];
          }
        this.array[index].push([a, b]); 
    }

    public get(a: string): any {
        const index = this.hash(a);
        const bucket = this.array[index];
        if (!bucket) return undefined;
    
        for (let pair of bucket) {
            if (pair[0] === a) {
                return pair[1];
            }
        }
    
        return undefined;
    }

    public resize(): void {
        const oldArray = this.array;
        this.size *= 2;
        this.array = new Array(this.size);
    
        for (let bucket of oldArray) {
            if (bucket) {
                for (let [key, value] of bucket) {
                    this.set(key, value); 
                }
            }
        }
    }
}
