"use strict";
const menu_button = $("button#to-menu");
const content = $("#global-container");
const side_menu = $("nav#side-menu");
const side_map = $("#side-map-wrap");
const slide_1 = content.find(".slide-1"),
      slide_2 = content.find(".slide-2"),
      slide_3 = content.find(".slide-3"),
      slide_4 = content.find(".slide-4"),
      slide_5 = content.find(".slide-5");


/* Global container minimization logic */

let is_minimized = false;

menu_button.click(minimize);

content.click(maximize);

function maximize(e) {
   if (is_minimized) {
      content.removeClass("minimized");
      side_menu.attr("id", "side-menu");
      side_map.css({
         "filter": "opacity(1)",
         "pointer-events": "all"
      });
   }
   is_minimized = false;
}

function minimize(e) {
   if (!is_minimized) {

      content.addClass("minimized");
      side_map.css({
         "filter": "opacity(0)",
         "pointer-events": "none"
      });

      setTimeout(() => {
         side_menu.attr("id", "side-menu-active");
      }, 100);

      setTimeout(() => {
         is_minimized = true;
      }, 500);

   }
}


/* -------------------------------------- */


/* Side-Menu components */

let active_slide = 1;

side_menu.find("button").click(function(e) {
   let calc = (active_slide - $(this).data("order")) * $("#slide-container").height() - 200 /* / 5 */;
   if (active_slide !== $(this).data("order")) {
      if (calc < 0) {
         $("#slide-container").css("top", calc);
      } else {
         $("#slide-container").css("top", 0);
      }
      active_slide = $(this).data("order");
   }
   maximize();
});

/* -------------------------------------- */


 /* Slide-1 components */

slide_1.find("section .title").click(function(e) {
   if (!$(this).hasClass("active") && !is_minimized) {
      slide_1.find("section .active").removeClass("active");
      $(this).addClass("active");
      $(this).next().next().next().addClass("active");
   }
});


/* -------------------------------------- */


/* Slide-2 components */

/* -------------------------------------- */

/* Slide-3 components */

/* -------------------------------------- */

/* Slide-4 components */

/* -------------------------------------- */

/* Slide-5 components */

/* -------------------------------------- */
