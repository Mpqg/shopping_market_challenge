
import fs from 'fs';

export default function readProducts(file_path) {
    const productsContent = fs.readFileSync(file_path, 'utf8');
    const products = productsContent.split("\n").map((product) => {
        const name = product.slice(0, product.indexOf(":"));
        const productParts = product.split(",");
        const inventory = productParts[0].slice(productParts[0].indexOf(":") + 1);
        const regularPrice = productParts[1];
        const memberPrice = productParts[2];
        const taxStatus = productParts[3];

        return {
            id:name,
            name,
            inventory,
            regularPrice,
            memberPrice,
            taxStatus
        };
    });
    return products;
}