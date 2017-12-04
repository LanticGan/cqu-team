'use strict';

var ajax = {};

// 内部函数,将JS对象解析为'key1=value1&key2=value2'模式的字符串并返回
ajax._parseObj = function (data) {
  var query = [];
  for (var i in data) {
    var item =  data[i];
    if (item instanceof Array) {
        item.forEach(function (j) {
          query.push(i + '[]' + '=' + j)
      })
    }
    else if (item instanceof Object) {
      for (var t in item) {
        query.push(i + '[' + t + ']' + '=' + item[t].toString());
      }
    }
    else {
      query.push(i + '=' + data[i].toString());
    }
  }
  return query.join('&');
};

// 创建XMLHttpRequest对象
ajax._createHttpRequest = function () {
  var httpRequest = void 0;
  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
    return httpRequest;
  } else {
    // 支持低版本IE浏览器
    httpRequest = new XMLHttpRequest("Microsoft.XMLHTTP");
    if (httpRequest != null) {
      return httpRequest;
    } else {
      throw 'Your browser does not support XMLHTTP.';
    }
  }
};

// 发送请求
ajax.send = function (method, url, data, callback, async) {
  // 默认异步
  if (async === undefined) {
    async = true;
  }
  // 初始化XMLHttpRequest对象,整理函数参数
  var _ref = [, method.toUpperCase(), ajax._parseObj(data), ''],
      httpRequest = _ref[0],
      requestMethod = _ref[1],
      params = _ref[2],
      err = _ref[3];

  try {
    httpRequest = ajax._createHttpRequest();
  } catch (err) {
    console.error(err);
    return;
  }
  // 执行回调函数
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4) {
      if (httpRequest.status != 200) {
        err = 'error';
      }
      callback(err, httpRequest.responseText);
    }
  };
  // 处理POST请求
  if (requestMethod == 'POST' || requestMethod == 'PUT') {
    httpRequest.open(requestMethod, url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(params);
  }
  // 处理其它请求
  else {
      var requestUrl = url + '?' + params;
      httpRequest.open(requestMethod, requestUrl);
      httpRequest.send();
    }
};