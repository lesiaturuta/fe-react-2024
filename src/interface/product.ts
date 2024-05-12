interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}

export default Product;
