export interface IProduct {
    id:number;
    documentId:string;
    title:string;
    description:string;
    price:number;
    thumbnail:{
        name:string,
        url:string
    }
}