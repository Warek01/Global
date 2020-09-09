const menuButton = $("button#to-menu");
const content = $("#global-container");


menuButton.click(e => {
   content.addClass("minimized");
});
