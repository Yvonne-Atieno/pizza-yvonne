//Business logic

$(document).ready(function () {
    function Pizza(type,topping,crust,size){
        this.type=type
        this.topping=topping
        this.crust=crust
        this.size=size
    }

    Pizza.prototype.GetTotalcost= function(){
        return this.GetToppingscost() + this.GetSizecost() + this.GetCrustcost()
    }

    Pizza.prototype.GetCrustcost= function(){
        if (this.type=="Cheese"){
            if(this.crust=="Crispy"){
                return 100
            }
            else if(this.crust=="Stuffed"){
                return 150;
            }else
                return 180;
        }
        else if (this.type=="Pepperoni"){
            if(this.crust=="crispy"){
                return 120
            }
            else if(this.crust=="stuffed"){
                return 170
            }
            else
                return 200
        }
        else(this.type=="Veggie")
            if(this.crust=="Crispy"){
                return 150
            }
            else if(this.crust=="Stuffed"){
                return 180
            }
            else
                return 200
    }
    Pizza.prototype.GetToppingscost= function(){
        if (this.type=="Cheese"){
            if(this.topping=="Mushroom"){
                return 30
            }
            else if(this.topping=="Brocoli"){
                return 50
            }
            else
                return 70
        }
        else if (this.type=="Pepperoni"){
            if(this.topping=="Mushroom"){
                return 40
            }
            else if(this.topping=="Brocoli"){
                return 60
            }
            else
                return 80
            
        }
        else
            if(this.topping=="Mushroom"){
                return 60
            }
            else if(this.topping=="Brocoli"){
                return 80
            }
            else
                return 100
            
        
    }

    Pizza.prototype.GetSizecost= function (){
        if (this.type=="Cheese"){
            if(this.size=="Small"){
                return 500
            }
            else if(this.size=="Medium"){
                return 750
            }
            else
                return 970
            
        }
        else if (this.type=="Pepperoni"){
            if(this.size=="Small"){
                return 550
            }
            else if(this.size=="Medium"){
                return 800
            }
            else
                return 1000
        }
        else
            if(size=="Small"){
                return 600
            }
            else if(size=="Medium"){
                return 850
            }
            else
                return 1050
    }

    //User Interface logic

    var customerName = "";
    var totalCost = 0;
    var pizzasOrdered = [];
    var estate = "";

    $("#pizza-form").submit(function (event) {
        event.preventDefault();
        var typeSelected = $("#type").val();
        var sizeSelected = $("#size").val();
        var toppingSelected = $("#topping").val();
        var crustSelected = $("#crust").val();
        var newPizza = new Pizza(
            typeSelected,
            sizeSelected,
            toppingSelected,
            crustSelected
        );
        pizzasOrdered.push(newPizza);
        $("#type").val("");
        $("#size").val("");
        $("#topping").val("");
        $("#crust").val("");
        totalCost = 0;
        for (let i = 0; i < pizzasOrdered.length; i++) {
            totalCost += pizzasOrdered[i].GetTotalcost();
        }
        $("#order-summary").append(
            "<tr>" +
            '<th scope="row">' +
            newPizza.type +
            " (" +
            newPizza.topping +
            ") - " +
            newPizza.GetSizecost() +
            "</th>" +
            "<td>" +
            newPizza.size +
            " - " +
            newPizza.GetToppingscost() +
            "</td>" +
            "<td>" +
            newPizza.crust +
            " - " +
            newPizza.GetCrustcost() +
            "</td>" +
            "<td>" +
            newPizza.GetTotalcost() +
            "</td>" +
            "</tr>"
        );
        if (pizzasOrdered.length > 0) {
            $("#form-title").empty();
            $("#form-title").append("Add Another Order");
        }

        $("#total-amount").fadeIn();
        $("#checkout").fadeIn();
        $("#orders-div").fadeIn();
        $("#total-amount").empty();
        $("#total-amount").append(totalCost);
        $(".total-amount").show();
    });

    $("#checkout").click(function () {
        $(".checkout-options").show();
    });
    $("#checkout-form").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var deliveryOption = $("#delivery-option").val();
        customerName = name;
        console.log(name);
        console.log(deliveryOption);
        $("#name").val("");
        $("#delivery-option").val("");
        $(".checkout-options").hide();
        if (deliveryOption === "deliver") {
            $(".location").show();
            $(".delivery-cost").show();
            $("#delivery-amount").append(200);
            totalCost += 200;
            $("#total-amount").empty();
            $("#total-amount").append(totalCost);
        } else {
            alert(customerName + ": Your total bill is Ksh. " + totalCost + ". Your order will be ready for collection in the next 15 minutes.");
        }
    });
    $("#location-form").submit(function (event) {
        event.preventDefault();
        var estateEntered = $("#estate").val();
        var houseNumberEntered = $("#house-number").val();
        estate = estateEntered;
        houseNumber = houseNumberEntered;
        console.log(estate);
        console.log(houseNumber);
        $(".location").hide();
        alert(customerName + ": Your total bill is   Ksh. " + totalCost + ". Your order will be delivered to " + estate + " Estate, House Number   " + houseNumber + " in 20 minutes time.We appriciate your coperation.");
    });
    
});
