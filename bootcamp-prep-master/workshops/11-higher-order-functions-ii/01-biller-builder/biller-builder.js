// YOUR CODE BELOW

function billerBuilder(stateName) {
    
    let nyShipping = 1.03;
    let njShipping = 1.05;

    let nySales = 1.04;
    let njSales = 1.06625;

    return function finalPrice(itemPrice) {
        
        if(stateName === 'NY'){

            return itemPrice*nySales*nyShipping;
        }
        else{
            return itemPrice*njSales*njShipping;
        }
    }
}