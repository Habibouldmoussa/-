var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var canvas = document.createElement("canvas")
document.body.appendChild(canvas);

var Rasm = null;

Qlb.globalEnvironment.merge({
  "ابدأ-رسم":
  function(w, h) {
    Rasm = new Processing(canvas);
    Rasm.size(w, h); 
    Rasm.background(255, 255, 255)

    // console.log(Rasm)
  },

  "ارسم":
  function(fn) {
    Rasm.draw = fn;

    Rasm.background(255, 255, 255);
    Rasm.loop()
  },

  "خط":
  function(x1, y1, x2, y2) {
    Rasm.line(x1, y1, x2, y2);
  },

  "خط":
  function(x1, y1, x2, y2) {
    Rasm.line(x1, y1, x2, y2);
  },

  "نقطة":
  function(x, y) {
    Rasm.point(x, y);
  },

  "إهليلج":
  function(x, y, w, h) {
    Rasm.ellipse(x, y, w, h);
  },

  "دائرة":
  function(x, y, r) {
    Rasm.ellipse(x, y, r, r);
  },

  "مستطيل":
  function(x, y, w, h) {
    Rasm.rect(x, y, w, h);
  },

  "مربع":
  function(x, y, s) {
    Rasm.rect(x, y, s, s);
  },

  "ضجة":
  function(r, g, b) {
    Rasm.noise(r, g, b);
  },

  "تحجيم":
  function(x, y, z) {
    Rasm.scale(x, y, z);
  },

  "انزلاق":
  function(x, y, z) {
    Rasm.translate(x, y, z);
  },

  "دوران":
  function(x, y, z) {
    Rasm.rotate(x, y, z);
  },

  "لون":
  function(r, g, b) {
    Rasm.color(r, g, b);
  },

  "خلفية":
  function(r, g, b) {
    Rasm.background(r, g, b);
  }
});

}
/*
     FILE ARCHIVED ON 02:58:32 Jun 23, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:55:31 May 11, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.619
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  esindex: 0.009
  cdx.remote: 69.812
  LoadShardBlock: 70.068 (3)
  PetaboxLoader3.datanode: 49.043 (4)
  PetaboxLoader3.resolve: 88.11 (2)
  load_resource: 112.671
*/