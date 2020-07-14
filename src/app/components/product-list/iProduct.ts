

export class IProduct {

    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: String;

    constructor(
        productId: number, productName: string, productCode: string,
        releaseDate: string, description: string, price: number, rating: number,
        imageUrl: string
    ) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.releaseDate = releaseDate;
        this.description = description;
        this.price = price;
        this.starRating = rating;
        this.imageUrl = imageUrl

    }
    // calculateDiscount(percentage: number): number;

}