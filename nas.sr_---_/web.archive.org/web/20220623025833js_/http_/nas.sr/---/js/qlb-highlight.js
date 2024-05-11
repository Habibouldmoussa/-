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

Rainbow.extend('qlb', [
  {
    'matches': {
      1: 'special-form'
    },
    'pattern': /\((لامدا|حرفي|إفعل|حدد|عدل|إذا)/g
  },
  {
    'matches': {
      1: "function"
    },
    'pattern': /\(([ؤئـأابجدهوزحتيكلمنقشعرتطةسدفغخصذنمظىآإضث\-؟]{2,})/g
  },
  {
    'name': 'string',
    'pattern': /"[^"]+"/g
  },
  {
    'name': 'number',
    'pattern': /[١٢٣٤٥٦٧٨٩٠،]+/g
  },
  {
    'matches': {
      1: 'latin'
    },
    'pattern': /\s(\w+)/g
  }
], true);



}
/*
     FILE ARCHIVED ON 02:58:33 Jun 23, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:55:14 May 11, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.464
  exclusion.robots: 0.057
  exclusion.robots.policy: 0.05
  esindex: 0.009
  cdx.remote: 10.348
  LoadShardBlock: 74.067 (3)
  PetaboxLoader3.datanode: 62.486 (4)
  PetaboxLoader3.resolve: 91.107 (2)
  load_resource: 82.133
*/