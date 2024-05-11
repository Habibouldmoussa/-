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

Qlb.globalEnvironment.merge({
  // general

  "رأس":          // head
  function(x) {
    return x[0];
  },

  "ذيل":    // tail
  function(x) {
    return x.slice(1);
  },

  "كونس":    // cons
  function(x, y) {
    return [x].concat(y)
  },

  "طول":    // cons
  function(lst) {
    return lst.length;
  },

  "حال":    // cond
  function() {
    for (var i = 0; i < arguments.length; i++) {
      var cond = Qlb.eval(arguments[i][0]),
          val = arguments[i][1];
    }
  },

  "كرر":
  function(n, fn) {
    for (var i = 0; i < n; i++) { fn(n); }
  },

  "عكس":
  function(l) {
    return l.reverse();
  },

  "عدم": // null
  function() {
    return [];
  },

  "عدم؟": // null?
  function(lst) {
    return lst instanceof Array && lst.length == 0;
  },

  "لائحة؟": // list?
  function(lst) {
    return lst instanceof Array;
  },

  "و":    // and
  function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prv, cur, idx, ary) {
      if(idx > 0) return prv && !!cur;
      else return !!cur;
    });
  },

  "أو":    // or
  function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prv, cur, idx, ary) {
      if(idx > 0) return prv || !!cur;
      else return !!cur;
    });
  },

  "طبق":    // map
  function(fn, lst) {
    return lst.map(fn);
  },

  "طبق-مع-مؤشر":    // map-with-index
  function(fn, lst) {
    var ary = [];
    for (var i = 0; i < lst.length; i++) {
      ary[i] = fn(lst[i], i)
    }
    return ary;
  },

  "أجل":
  function(fn, millis) {
    return window.setTimeout(fn, millis)
  },

  "عنصر":
  function(n, lst) {
    return n < 1 || n > lst.length ? 0 : lst[n-1];
  },

  // input/output

  "قول":    // say
  function(str) {
    Qlb.console.log(str);
    return str;
  },

  "ضمن":    // require
  function(url) {
    var code = Qlb.http.get("/lib/" + url.replace("\\", "/") + ".qlb");
    return Qlb.execute(code);
  },

  "ضمن-تمديد":    // require-extension
  function(url) {
    importScripts("/lib/tamdeed/" + url + "-worker.js");
  },

  // comparison
   
  "يساوي؟":     // equals
  function(a, b) {
    return a == b;
  },

  "أكبر؟":     // greater
  function(a, b) {
    return a > b;
  },

  "أكبر-أو-يساوي؟":     // greater or equal 
  function(a, b) {
    return a >= b;
  },

  "أصغر؟":     // less
  function(a, b) {
    return a < b
  },

  "أصغر-أو-يساوي؟":     // less or equal
  function(a, b) {
    return a <= b;
  },

  // arithmetic

  "سقف":     // ceil
  function(x) {
    return Math.ceil(x)
  },

  "أرض":     // floor
  function(x) {
    return Math.floor(x)
  },

  "القيمة-المطلقة":     // abs
  function(x) {
    return Math.abs(x)
  },

  "الأكبر":     // max
  function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prv, cur, idx, ary) {
      if(idx > 0) return cur > prv ? cur : prv
      else return cur
    });
  },

  "الأصغر":     // min
  function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prv, cur, idx, ary) {
      if(idx > 0) return cur < prv ? cur : prv
      else return cur
    });
  },

  "جمع":     // add
  function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prv, cur, idx, ary) {
      return prv + cur;
    });
  },

  "طرح":    // subtract
  function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prv, cur, idx, ary) {
      return prv - cur;
    });
  },

  "ضرب":     // multiply
  function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prv, cur, idx, ary) {
      return prv * cur;
    });
  },

  "قسم":     // divide
  function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(prv, cur, idx, ary) {
      return prv / cur;
    });
  }
});

}
/*
     FILE ARCHIVED ON 02:58:30 Jun 23, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:55:28 May 11, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.543
  exclusion.robots: 0.061
  exclusion.robots.policy: 0.052
  esindex: 0.009
  cdx.remote: 16.343
  LoadShardBlock: 107.44 (3)
  PetaboxLoader3.datanode: 116.872 (4)
  load_resource: 76.981
  PetaboxLoader3.resolve: 24.502
*/