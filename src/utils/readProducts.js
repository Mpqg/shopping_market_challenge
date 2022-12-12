export default async function readProducts() {
    const productsContent = await fetch("/inventory.txt").then((response) => response.text());
    
    const products = productsContent.split("\n").map((product) => {
        const name = product.slice(0, product.indexOf(":"));
        const productParts = product.split(",");
        const inventory = productParts[0].slice(productParts[0].indexOf(":") + 1);
        const regularPrice = productParts[1];
        const memberPrice = productParts[2];
        const taxStatus = productParts[3];

        return {
            id:name,
            name: name.trim(),
            inventory: Number(inventory.trim()),
            regularPrice: Number(regularPrice.replace("$","")),
            memberPrice: Number(memberPrice.replace("$","")),
            taxStatus: taxStatus.trim(),
        };
    });
    return products;
}