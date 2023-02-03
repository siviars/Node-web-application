$(document).ready(function () {
  $("#setMenu1").on("submit", function (event) {
    event.preventDefault();
    let value = "Menu1 text, which you can change";

    $.ajax({
      url: "/menu1",
      method: "post",
      contentType: "application/json",
      data: JSON.stringify({ quote: value }),
      success: function (res) {
        $("h1").html(`${res.response}`);
      },
    });
  });

  $("#setMenu2").on("submit", function (event) {
    event.preventDefault();
    let value = "Menu2 text, which you can change";

    $.ajax({
      url: "/menu2",
      method: "post",
      contentType: "application/json",
      data: JSON.stringify({ quote: value }),
      success: function (res) {
        $("h1").html(`${res.response}`);
      },
    });
  });
});
