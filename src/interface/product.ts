interface Product {
    id: number;
    title: string;
    description: string;
    image: string[];
    creationAt: string;
    updatedAt: string;
    category: Category;
}

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

export default Product;
