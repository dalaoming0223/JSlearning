const xhr = new XMLHttpRequest()
xhr.open('GET','./DATA.json',false)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(
        // JSON.parse(xhr.responseText)
        xhr.responseText
      )
    }else{
      console.log('其他情况')
    }
  }
}
xhr.send(null)