export class Product {
    id: String;
     name: String;
     price: Number;
    description: String;
    category: String;
     productDate: String;
    image:String
    constructor(
        id: String,
     name: String,
     price: Number,
    description: String,
    category: String,
     productDate: String,
    image:String
    )
    {

        this.id=id,
        this.name=name,
        this.price=price,
        this.description=description,
        this.category=category,
        this.productDate=productDate,
        this.image=image
    }
}