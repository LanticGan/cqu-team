const ajax = {}

// 内部函数,将JS对象解析为'key1=value1&key2=value2'模式的字符串并返回
  ajax._parseObj = (data) => {
    let query = [];
    for (let i in data) {
      query.push(`${i}=${data[i].toString()}`)
    }
    return query.join('&')
  }

// 创建XMLHttpRequest对象
  ajax._createHttpRequest = () => {
    let httpRequest;
    if (window.XMLHttpRequest) {
      httpRequest = new XMLHttpRequest();
      return httpRequest;
    } else {
        // 支持低版本IE浏览器
        httpRequest = new XMLHttpRequest("Microsoft.XMLHTTP");
        if (httpRequest != null) {
          return httpRequest;
        } else {
          throw 'Your browser does not support XMLHTTP.'
        }
    }
  }

// 发送请求
  ajax.send = (method, url, data, callback, async) => {
    // 默认异步
    if (async === undefined) {
      async = true
    }
    // 初始化XMLHttpRequest对象,整理函数参数
    let [httpRequest,requestMethod, params] = [, method.toUpperCase(), ajax._parseObj(data)]
    try {
      httpRequest = ajax._createHttpRequest();
    } catch (err) {
      console.error(err)
      return;
    }
    // 执行回调函数
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == 4) {
        callback(httpRequest.responseText)
      }
    }
    // 处理POST请求
    if (requestMethod == 'POST') {
      httpRequest.open(requestMethod, url)
      httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      httpRequest.send(params)
    } 
    // 处理其它请求
    else {
      let requestUrl = `${url}?${params}`
      httpRequest.open(requestMethod, requestUrl)
      httpRequest.send()
    }
  } 
