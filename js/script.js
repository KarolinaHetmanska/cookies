function setCookie()
{
  var tempObject = {};
  tempObject.name = document.getElementById('input-name').value
  tempObject.season = document.getElementById('dropdown-favourite-season').value

  var jsonString = JSON.stringify(tempObject)
  document.cookie = "cookieObject=" + jsonString +"; max-age=" + (60*60*24) + ";"

  // var inputValue = document.getElementById('example-input').value
  // if (inputValue != "") {
  //    document.cookie = "name=" + inputValue + ";max-age=" + (60*60*24) + ";"
  // }
}

$(document).ready(function getCookie() {
  if (document.cookie.length != 0) {
    console.log("document.cookie =", document.cookie);
      var cookieValueArray = document.cookie.split(";")

      function includesCookie(someArrayItem) {
        if (someArrayItem.includes('cookieObject')) {
            return someArrayItem
        }
      }

      var cookieValueArrayReady = cookieValueArray.find(includesCookie).split("=")

      var cookieValueObject = JSON.parse(cookieValueArrayReady[1])
      // tempObject.name = document.getElementById('input-name').value
      console.log(cookieValueObject.name);
      // tempObject.season = document.getElementById('dropdown-favourite-season').value
      console.log(cookieValueObject.season);

    if (cookieValueObject.name.length != 0) {
      console.log('name is not zero')

      $('#empty-cookies').addClass('non-display');
      $('#notempty-cookies').removeClass('non-display').addClass('display');
      $('#cookie-name').html(cookieValueObject.name)
    }

    if (cookieValueObject.season != 'select') {
      if (cookieValueObject.season == 'spring') {
        $('#notempty-cookies').addClass('spring')
      }
      else {
        $('#notempty-cookies').addClass('autumn')

      }
    }


  }

  // if (document.cookie.length != 0) {
  //   var cookieValueArray = document.cookie.split("=")
  //   alert('hello, this is my first cookie :DD and its name is: ' + cookieValueArray[0] + 'and value is: ' + cookieValueArray[1])
  // }
  // else {
  //   alert('sorry, there is no cookie :(')
  // }
}
)
