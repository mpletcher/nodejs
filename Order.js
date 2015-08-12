/**
 * Created by Marcos Pletcher on 8/11/15.
 */
// Passes order number
function placeOrder(orderNumber){

    console.log("Customer order: ", orderNumber);

    cookAndDeliverFood(function(){
        console.log("Delivered food order: ", orderNumber)
    });
}

// Simulate a five second operation
function cookAndDeliverFood(callback){
    setTimeout(callback, 5000); // Callback runs each customer order in 5 sec
}

// Simulate users requests
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);