document.onreadystatechange = function () {
  if (document.readyState === 'interactive') renderApp();

  function renderApp() {
    var onInit = app.initialized();

    onInit
      .then(function getClient(_client) {
        window.client = _client;
        renderContactName();
      })
      .catch(handleErr);
  }
};

function renderContactName() {
  var propertyChangeCallback = function (event) {
    console.log(event.data.new)
    var date = moment().seconds(0).milliseconds(0).format();
    console.log(date, event.data.new)
    if (event.data.new < date) {
      console.log("date is past date")
      showNotification('warning', 'Planned Start Date can’t be less than today’s date');
      client.interface.trigger("setValue", { id: "plannedStartDate", value: new Date().toString('YYYY-MM-DDTHH:MM:SS±hh:mm') });
    }
  };
  client.events.on("change.plannedStartDateChanged", propertyChangeCallback);
}

function handleErr(err = 'None') {
  showNotification('error', err);
}
function showNotification(type, message) {
  client.interface.trigger("showNotify", {
    type: type,
    message: message
  });
}
