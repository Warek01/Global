"use strict";

/* Config */
const loadScreen = false;
const loadScreen_timer = 2000; 
const start_slide = 2;         

/* Components */
const menu_button = $("button#to-menu");
const content = $("#global-container");
const side_menu = $("nav#side-menu");
const side_map = $("#side-map-wrap");
const header = $("header");
const slide_1 = content.find(".slide-1"),
      slide_2 = content.find(".slide-2"),
      slide_3 = content.find(".slide-3"),
      slide_4 = content.find(".slide-4"),
      slide_5 = content.find(".slide-5");

const active_slide = {
   num: 1,
   prev: null,
   change: function(newSl) {
      if (this.num !== newSl) {
         newSl !== 1 ?
            header.find("#hire-us").addClass("active") :
            header.find("#hire-us").removeClass("active");
         
         this.prev = this.num;
         this.num = newSl;

         side_map.find(".active").removeClass("active");
         side_map.find(".display").eq(this.num - 1).addClass("active");
      }
   }
};


/* Global container minimization logic */

let is_minimized = false;

menu_button.click(() => {
   if (!is_minimized)
      minimize();
   else
      maximize();
});

content.click(maximize);

function maximize(e) {
   if (is_minimized) {
      content.removeClass("minimized");
      side_menu.attr("id", "side-menu");
      side_map.css({
         filter: "opacity(1)",
         pointerEvents: "all"
      });

      header.find("button#to-menu")
      .find("img").remove().end()
      .append($("<img />", {
         alt: "maximize",
         src: "./img/HAMBURGER-MENU.png"
      }));
   }
   is_minimized = false;
}

function minimize(e) {
   if (!is_minimized) {

      content.addClass("minimized");
      side_map.css({
         filter: "opacity(0)",
         pointerEvents: "none"
      });

      header.find("button#to-menu")
      .find("img").remove().end()
      .append($("<img />", {
         alt: "minimize",
         src: "./img/X.png"
      }));

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

side_menu.find("button").click(function(e) {

   let calc = (active_slide.num - $(this).data("order")) * $(".slide-1").height();

   side_menu.find("button.active").removeClass("active");
   $(this).addClass("active");

   $("#slide-container").css("top", parseInt($("#slide-container").css("top")) + calc);

   active_slide.change($(this).data("order"));

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

(() => {

   const slider = slide_2.find("#slider"),
         wrap = slider.find(".wrapper");

   const button_left = slider.find("#slide-left"),
         button_right = slider.find("#slide-right");

   let stage = 1;
         
   button_left.click(function(e) {

      if (stage === 1) {
         wrap.find("img").eq(1).css({
            left: -218
         }).removeClass("active")

         .prev("img").css({
            left: 600
         }).end()

         .next("img").css({
            left: -218
         }).addClass("active");

         activate(3);
         stage++;
      } else if (stage === 2) {
         wrap.find("img").eq(1).css({
            left: 218
         })

         .prev("img").css({
            left: 218
         }).addClass("active").end()

         .next("img").css({
            left: -600
         }).removeClass("active");

         activate(1);
         stage++;
      } else {
         wrap.find("img").removeClass("active").css("left", "0")
         .eq(1).addClass("active");

         activate(2);
         stage = 1;
      }
   });

   button_right.click(function(e) {
      if (stage === 1) {
         wrap.find("img").eq(1).css({
            left: 218
         }).removeClass("active")

         .prev("img").css({
            left: 218
         }).addClass("active").end()

         .next("img").css({
            left: -600
         });

         activate(1);
         stage++;
      } else if (stage === 2) {
         wrap.find("img").eq(1).css({
            left: -218
         })

         .prev("img").css({
            left: 600
         }).removeClass("active").end()

         .next("img").css({
            left: -218
         }).addClass("active");

         activate(3);
         stage++;
      } else {
         wrap.find("img").removeClass("active").css("left", "0")
         .eq(1).addClass("active");

         activate(2);
         stage = 1;
      }
   });

   function activate(num) {

      let titles = $("#titles");
      titles.find("span").removeClass("active");

      switch (num) {
         case 1:
            titles.find("span").eq(0).addClass("active");
            titles.find("span").eq(3).addClass("active");
         break;
         case 2:
            titles.find("span").eq(1).addClass("active");
            titles.find("span").eq(4).addClass("active");
         break;
         case 3:
            titles.find("span").eq(2).addClass("active");
            titles.find("span").eq(5).addClass("active");
         break;
      }
   }

})();


/* -------------------------------------- */

/* Slide-3 components */

/* -------------------------------------- */

/* Slide-4 components */

/* -------------------------------------- */

/* Slide-5 components */

/* -------------------------------------- */


/* Load screen */

if (loadScreen && loadScreen_timer) {
   $(document).ready(function(e) {
      setTimeout(() => {
         $("#load-screen").hide(500);
      }, loadScreen_timer);
   });
} else {
   $("#load-screen").hide();
}

/* -------------------------------------- */


/* Acive slide */

if (start_slide !== 1) {
   side_menu.find("button").eq(start_slide - 1).trigger("click");
}

let is_tranzitioning = false;

$(window).keypress(e => {
   if (!is_tranzitioning && /[1-5]/.test(e.key)) {
      side_menu.find("button").eq(parseInt(e.key) - 1).trigger("click");
      is_tranzitioning = true;

      setTimeout(() => {
         is_tranzitioning = false;
      }, 400);
   }
});

/* -------------------------------------- */
