var $ = (function() {
  "use strict";

  var types = "Array Object String Date RegExp Function Boolean Number Null Undefined".split(
    " "
  );

  function type() {
    return Object.prototype.toString.call(this).slice(8, -1);
  }

  for (var i = types.length; i--; ) {
    $["is" + types[i]] = (function(self) {
      return function(elem) {
        return type.call(elem) === self;
      };
    })(types[i]);
  }

  return $;
})(); //类型判断

function copy(obj, deep) {
  if (obj === null || (typeof obj !== "object" && !$.isFunction(obj))) {
    return obj;
  }

  if ($.isFunction(obj)) {
    return new Function("return " + obj.toString())();
  } else {
    var name,
      target = $.isArray(obj) ? [] : {},
      value;

    for (name in obj) {
      value = obj[name];
      if (value === obj) {
        continue;
      }

      if (deep && ($.isArray(value) || $.isObject(value))) {
        target[name] = copy(value, deep);
      } else {
        target[name] = value;
      }
    }
    return target;
  }
}
