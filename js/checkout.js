function submitForm(){

    if (HasInvalidFields()){
        alert("Моля попълнете всички полета правилно!");
        return;
    }
    const items = getCartItems();
    if (items.length === 0){
        alert("Количката е празна!");
        return;
    }

    const form = document.getElementById("form");
    items.map(item => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = `product_${item.productId}`;
        input.value = `name:${products.filter(s => s.id == item.productId)[0].name}; qty:${item.quantity}`;
        form.appendChild(input);
    });
    clearCartItems();
    form.submit();
}

function HasInvalidFields()
{
    let hasInvalidFields = false;
    const form = document.getElementById("form");
    form.querySelectorAll("input").forEach(input => {
        if (!input.checkValidity()){
            hasInvalidFields = true;
        }
    });
    return hasInvalidFields;
}