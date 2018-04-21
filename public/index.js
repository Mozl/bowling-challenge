$( document ).ready(function() {
  var thermostat = new Thermostat();

  $('#temp1').css("background-color", thermostat.usage());

  function raiseTemp() {
  thermostat.upTemp();
    $("#temp_text").html(thermostat.temp);
    $('#temp1').css("background-color", thermostat.usage());
  }

  $('#hotter').click(function() {
    raiseTemp();
  });


  $('#powersave').click(function() {
    if (thermostat.powersave === true) {
        thermostat.powersaveOff();
        $("#powersavebox").css("background-color", "red");
        $('#temp1').css("background-color", thermostat.usage());
    }
    else if (thermostat.powersave === false) {
        thermostat.powersaveOn();
        $("#powersavebox").css("background-color", "green");
        $('#temp1').css("background-color", thermostat.usage());
    }
  });

});