"use strict";
const menuButton = $("button#to-menu");
const content = $("#global-container");
const slide_1 = content.find(".slide-1"),
      slide_2 = content.find(".slide-2"),
      slide_3 = content.find(".slide-3"),
      slide_4 = content.find(".slide-4"),
      slide_5 = content.find(".slide-5");


/* Global container minimization logic */

let minimized = false;

menuButton.click(e => {

   if (!minimized) {

      content.addClass("minimized");

      setTimeout(() => {
         minimized = true;
      }, 500);

   }
});

content.click(function(e) {
   if (minimized) 
      $(this).removeClass("minimized");
   minimized = false;
});


/* -------------------------------------- */

 /* Slide-1 components */

slide_1.find("section .title").click(function(e) {
   if (!$(this).hasClass("active") && !minimized) {
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
