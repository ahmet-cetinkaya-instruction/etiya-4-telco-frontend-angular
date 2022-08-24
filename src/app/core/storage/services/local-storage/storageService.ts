export interface StorageService{
    get(key:string): string | null;
    set(key:string,value:any):void;
    remove(key:string):void;
}