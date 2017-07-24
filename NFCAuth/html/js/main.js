session.subscribeToEvent("NFC/Start", function (value) {
    console.log("From Event raised!")
    showLoading();
});

session.subscribeToEvent("NFC/Found", function (value) {
    console.log("From Event raised!")
    hideLoading();
});


function showLoading() {
    $("#loading_container").css("visibility", "visible");


}

function hideLoading() {
    $("#loading_container").css("visibility", "hidden");
}


$(document).ready(function () {
   hideLoading()

});


function exit()
{
   session.raiseEvent("NFC/ExitApp", 0);
}