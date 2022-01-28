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
  console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
  var propertyChangeCallback = function (event) {
    client.interface.trigger("showNotify", {
      type: "warning", title: "Warning",
      message: "This is a sample warning notification."
    });
  };
  client.events.on("change.plannedStartDateChanged", propertyChangeCallback);
}

function handleErr(err = 'None') {
  console.error(`Error occured. Details:`, err);
}

client.interface.trigger("setValue", {id: "plannedStartDate", value: "YYYY-MM-DDTHH:MM:SS±hh:mm"})