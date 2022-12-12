export default function generateReceipt(cart_products, bill){
    const separator = "----------------------------------------";
    const transactionDate = new Date();
    const receiptDate = ` ${transactionDate.toLocaleDateString()}`;
    const receiptId = `TRANSACTION: ${bill.id}`;
    const receiptHeader = `ITEM    QUANTITY    UNIT PRICE    TOTAL`;
    const receiptItems = cart_products.map((product) => {

        const name = product.name;
        const quantity = product.quantity;
        const price = bill.customertype === "Rewards Members" ? product.memberPrice : product.regularPrice;
        const total = product.quantity * price;
        
        return `${name}    ${quantity}    ${price}    ${total}`;
    }).join("\n");

    const receiptSoldItems = `TOTAL NUMBER OF ITEMS SOLD: ${bill.totalQuantity}`;
    const receiptSubtotal = `SUB-TOTAL: ${bill.subtotal}`;
    const receiptTax = `TAX (6.5%): ${bill.tax}`;
    const receiptTotal = `TOTAL: ${bill.total}`;
    const receiptCash = `CASH: ${bill.cash}`;
    const receiptChange = `CHANGE: ${bill.change}`;
    const receiptSaving = `YOU SAVED: ${bill.saving}!`;
    const receiptData = [
        receiptDate,
        receiptId,
        receiptHeader,
        receiptItems,
        separator,
        receiptSoldItems,
        receiptSubtotal,
        receiptTax,
        receiptTotal,
        receiptCash,
        receiptChange,
        separator,
        receiptSaving

    ]
    return {
        receipt: receiptData.join("\n"),
        bill,
        transactionDate
    }
}