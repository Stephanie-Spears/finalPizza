function Pizza(){
  var toppings = [];
  this.pizzaSize =  $("#pizzaDetailsForm input[type='radio']:checked").val();
  $("#pizzaDetailsForm input[type='checkbox']:checked").each(function(){
    toppings.push($(this).val());
  });
  this.pizzaToppings = toppings;
  this.pizzaPrice = 0;
  for (var i = 0; i < this.pizzaToppings.length; i++)
  {
    this.pizzaPrice +=2.50;
  }
  if (this.pizzaSize === 'Small'){
    this.pizzaPrice += 5;
  } else if (this.pizzaSize === 'Medium'){
    this.pizzaPrice += 10;
  } else if (this.pizzaSize === 'Large') {
    this.pizzaPrice += 20;
  }
}

var formatOutput = function(myPizza) {
  return "<button type='click' class='list-group-item'>" +  myPizza.pizzaSize + " " + myPizza.pizzaToppings + " pizza ($" + myPizza.pizzaPrice.toFixed(2) + ")<span class='glyphicon glyphicon-heart-empty' aria-hidden='true'></span></button>";
};

$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $(this).remove();
    $("#showForm").show();
  });
    var total = 0;
    $("#orderPizzaButton").click(function(event){ //if i take out the prevent default, after changing my html button to "click" instead of "submit", it immediatley throws me out of this loop, so I can only add one pizza
    event.preventDefault();
    var myPizza = new Pizza();
    $("#customerOrder").show();
    $("#checkoutButton").show();
    total += myPizza.pizzaPrice;
    $(".pizzaList").prepend(formatOutput(myPizza));
    $("#showTotal").text("$" + total.toFixed(2));
  });
  $("#checkoutButton").click(function(event){
    event.preventDefault();
    $("#showForm").hide();
    $("#customerDetailsForm").show();
  });
});
