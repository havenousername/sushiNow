function ajax(url, method, functionName, dataArray) {
  // create new XMLHTTP Request
  let xhttp = new XMLHttpRequest();
  xhttp.open(method, url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  let data = requestData(dataArray);
  xhttp.send(data);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      functionName(this.response);
    }
  }
}

function requestData(dataArray) {
  let out = '';
  for(key in dataArray){
    out+= `${key}=${dataArray[key]}&`;
  }
  return out;
}

