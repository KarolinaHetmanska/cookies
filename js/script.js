$(document).ready(function () {
  $('#save-cookie').click(function setCookie() {
    var tempObject = {};
    tempObject.name = $('#input-name').val()
    tempObject.season = $('#dropdown-favourite-season').val()

    var jsonString = JSON.stringify(tempObject)
    document.cookie = "cookieObject=" + jsonString + "; max-age=" + (60 * 60 * 24) + ";"
  })

  $(document).ready(function getCookie() {
    if (document.cookie.length != 0) {
      console.log("document.cookie =", document.cookie);
      var cookieValueArray = document.cookie.split(";")

      function includesCookie(someArrayItem) {
        if (someArrayItem.includes('cookieObject')) {
          return someArrayItem
        }
      }
      var cookieValueArraySplited = cookieValueArray.find(includesCookie).split("=")
      var cookieValueFinalObject = JSON.parse(cookieValueArraySplited[1])

      if ((cookieValueFinalObject.name.length != 0) && (cookieValueFinalObject.season != 'wybierz')) {
        console.log('name is not zero')

        $('#if-empty-cookies').addClass('non-display')
        $('#if-notempty-cookies').removeClass('non-display').addClass('display')
        $('#cookie-name').text(cookieValueFinalObject.name)
        $('#cookie-season').text(cookieValueFinalObject.season)
        $('#cookie-season').addClass(cookieValueFinalObject.season);
      } else {
        $('#missed-information').addClass('display')
        $('#missed-information').text('Nie podaleś wszystkich informacji')
      }
    }
  })
})
