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

var Qlb = {};

Qlb.Environment = function(table, outer) {
  this.table = table
  this.outer = outer
  this.find = function (sym) { return this.table[sym] === undefined ? (this.outer ? this.outer.find(sym) : undefined) : this.table[sym] }
  this.envForSym = function (sym) { return this.table[sym] === undefined ? (this.outer ? this.outer : undefined) : this }
  this.merge = function(other) { for(var name in other) { Qlb.symbols[name] = true; this.table[name] = other[name] } }
};

Qlb.globalEnvironment = new Qlb.Environment({});

Qlb.symbols = {
  "حرفي": true,
  "إفعل": true,
  "إذا": true,
  "حدد": true,
  "لامدا": true
};

Qlb.isSymbol = function(sym) {
  return !!Qlb.symbols[sym];
};

Qlb.eval = function(exp, env) {
  if(typeof exp == "string") {            // evaling string/symbol
    var sym = env.find(exp);
    if(sym === undefined) return exp;
    else return sym;

  } else if(!(exp instanceof Array)) {    // evaling literal
    return exp;

  } else {                                // evaling list
    var first = exp[0]
    var rest = exp.slice(1)

    if(first == "حرفي") {
      return rest

    } else if(first == "إفعل") {
      rest = run(rest, env);
      return rest[rest.length - 1];

    } else if(first == "إذا") {
      var test = rest[0],
          ifex = rest[1],
          elex = rest[2]

      return Qlb.eval(Qlb.eval(test, env) ? ifex : elex, env)

    } else if(first == "حدد") {
      var sym = rest[0],
          val = rest[1]
      return (env.table[sym] = Qlb.eval(val, env))

    } else if(first == "عدل") {
      var sym = rest[0],
          val = rest[1]

      if(env.envForSym(sym))
        return (env.envForSym(sym).table[sym] = Qlb.eval(val, env));
      return undefined;

    } else if(first == "لامدا") {
      var params = rest[0],
          body = rest.slice(1)

      return function() {
        var table = {}
        for (var i = 0; i < params.length; i++)
          table[params[i]] = arguments[i]

        return Qlb.eval(body, new Qlb.Environment(table, env))
      }

    } else {
      var exps = run(exp, env);

      if(typeof exps[0] == "function")
        // first element evaluates to a function
        return exps.shift().apply(this, exps)

      else if(Qlb.isSymbol(exps[0])) {
        throw new ReferenceError(exps[0]);

      } else
        // return last element
        return exps[exps.length - 1];
      

    }
  }
};


function run(ast, env) {
  try {
    var val;
    var ret = [];
    for (var i = 0; i < ast.length; i++) {
      val = Qlb.eval(ast[i], env);
      ret.push(val);
    };
    return ret;
  } catch(e) {
    Qlb.handleUncaughtException(e);
  }
}

Qlb.execute = function(code) {
  try {
    var ast = Qlb.parser.parse(code);
    return run(ast, Qlb.globalEnvironment).pop();
  } catch (e) {
    Qlb.handleUncaughtException(e);
  }
};

Qlb.handleUncaughtException = function(e) {
  switch(e.name) {
    case "SyntaxError":
      Qlb.console.warn("خطأ: حرف '" + e.found + "' غير متوقع");
      break;

    case "ReferenceError":
      Qlb.console.warn("خطأ: رمز '" + e.message + "' غير موجود");
      break;

    default:
      throw e;

  }
};

var global = this;

// Default console is window consle
Qlb.console = global.console;

// Default http adapter.
Qlb.http = {
  // Warning this is a Sync AJAX request. It's good 
  // because async is contageois and would make the interpreter async.
  // However this is bad in the main thread;
  get: function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();

    if (xhr.status === 200) {
      return xhr.responseText;
    } else {
      // XXX: Better error handling.
      Qlb.console.warn("خطأ: نص '" + url + "' غير موجود");
    }
  }
  // implement other http methods?
};

Qlb.init = function (options) {
  if (options.console) {
    Qlb.console = options.console;
  }
  if (options.ajax) {
    Qlb.ajax = options.ajax;
  }
};



}
/*
     FILE ARCHIVED ON 02:58:31 Jun 23, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:55:25 May 11, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.207
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.09
  esindex: 0.011
  cdx.remote: 13.625
  LoadShardBlock: 119.826 (3)
  PetaboxLoader3.datanode: 164.528 (4)
  PetaboxLoader3.resolve: 76.676 (2)
  load_resource: 177.607
*/