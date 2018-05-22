// set up an array to hold the months
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// lets be fancy for the demo and select the current month.
var activeMonth = new Date().getMonth();

$(".slider")

    // activate the slider with options
    .slider({
        min: 0,
        max: months.length-1,
        value: activeMonth
    })

    // add pips with the labels set to "months"
    .slider("pips", {
        rest: "label",
        labels: months
    })

    // and whenever the slider changes, lets echo out the month
    .on("slidechange", function(e,ui) {
        $("#labels-months-output").text( "You selected " + months[ui.value] + " (" + ui.value + ")");
    });
