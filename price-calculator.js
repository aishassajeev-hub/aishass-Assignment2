
// 1. Declare product variables

const name = "Christmas Gift Hamper";
const basePrice = 1200;
const discountPercent = 10;
const taxRate = 5;
const stockStatus = "in_stock";


// 2. Calculate discounted price

function calculateDiscountedPrice(price, discount) {
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
}


// 3. Calculate tax

function calculateTax(price, taxRate) {
    return (price * taxRate) / 100;
}


// 4. Calculate final price

function calculateFinalPrice(price, discount, taxRate) {
    const discountedPrice = calculateDiscountedPrice(price, discount);
    const taxAmount = calculateTax(discountedPrice, taxRate);

    return discountedPrice + taxAmount;
}


// 5. Check free shipping

function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}


// 6. Get stock message

function getStockMessage(status) {
    if (status === "in_stock") {
        return "In Stock";
    } else if (status === "limited") {
        return "Limited Stock";
    } else if (status === "out_of_stock") {
        return "Out of Stock";
    } else {
        return "Invalid Stock Status";
    }
}


// 7. Call all functions

const discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);

const taxAmount = calculateTax(discountedPrice, taxRate);

const finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);

const shippingMessage = isFreeShipping(finalPrice);

const stockMessage = getStockMessage(stockStatus);


// 8. Print complete price summary

console.log("========== PRODUCT PRICE SUMMARY ==========");

console.log("Product Name:", name);
console.log("Base Price: Rs.", basePrice);
console.log("Discount:", discountPercent + "%");
console.log("Discounted Price: Rs.", discountedPrice);
console.log("Tax Rate:", taxRate + "%");
console.log("Tax Amount: Rs.", taxAmount);
console.log("Final Price: Rs.", finalPrice);
console.log("Shipping:", shippingMessage);
console.log("Stock Status:", stockMessage);

