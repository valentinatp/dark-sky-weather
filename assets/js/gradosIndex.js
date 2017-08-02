$(document).ready(function() {
  $.ajax({
    url: 'https://api.darksky.net/forecast/8fe9d2d70d0d13ff0c4d66bd56b0a9ef/37.8267,-122.4233',
    type: 'GET',
    dataType: 'jsonp',
  })
  .done(function(data) {
    console.log(data);
        $('#imagen').append(data.currently.icon);
        $('#grado').append(data.currently.temperature);
        $('#wind').append(data.currently.windSpeed + 'm/s');
        $('#humidity').append(data.currently.apparentTemperature + '%');
        $("#uv").append(data.currently.uvIndex);
        $("#pressure").append(data.currently.pressure + ' hPa');


  })
  .fail(function() {
    console.log("error");
  })
  
  
});
