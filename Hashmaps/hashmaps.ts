class HashmapNoah {
    private array: Array<[string, any][]>; // array of buckets
    private size: number;
    private count: number;

    constructor() {
        this.size = 16;
        this.count = 0;
        this.array = new Array(this.size);
    }

    private hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }

    public set(key: string, value: any): void {
        const index = this.hash(key);
        if (!this.array[index]) {
            this.array[index] = [];
        }   

        const bucket = this.array[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // overwrite
                return;
            }
        }

        bucket.push([key, value]);
        this.count++;

        // Auto-resize if load factor > 0.75
        if (this.count / this.size > 0.75) {
            this.resize();
        }
    }

    public get(key: string): any {
        const index = this.hash(key);
        const bucket = this.array[index];
        if (!bucket) return undefined;

        for (let [k, v] of bucket) {
            if (k === key) return v;
        }
        return undefined;
    }

    private resize(): void {
        const oldArray = this.array;
        this.size *= 2;
        this.count = 0;
        this.array = new Array(this.size);

        for (let bucket of oldArray) {
            if (bucket) {
                for (let [key, value] of bucket) {
                    this.set(key, value); // rehash using new size
                }
            }
        }
    }
}
