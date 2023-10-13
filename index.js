const phoneInput = document.getElementById("phoneNumber");
const carrierLogo = document.getElementById("carrierIcon");

// Add an event listener to the phone input
phoneInput.addEventListener("input", function () {
  const phoneNumber = phoneInput.value;

  // Prefix expressions to match carrier prefixes

  const mtnPrefixes = [
    "0803",
    "0703",
    "0706",
    "0813",
    "0806",
    "0810",
    "0816",
    "0814",
    "+234803",
    "+234703",
    "+234706",
    "+234813",
    "+234806",
    "+234810",
    "+234816",
    "+234814",
  ];
  const airtelPrefixes = [
    "0802",
    "0708",
    "0808",
    "0812",
    "0907",
    "+234802",
    "+234708",
    "+234808",
    "+234812",
    "+234907",
  ];
  const gloPrefixes = [
    "0805",
    "0705",
    "0811",
    "0807",
    "0815",
    "0905",
    "+234805",
    "+234705",
    "+234811",
    "+234807",
    "+234815",
    "+234905",
  ];
  const etisalatPrefixes = [
    "0809",
    "0817",
    "0818",
    "0909",
    "+234809",
    "+234817",
    "+234818",
    "+234909",
  ];
  const intelprefixes = ["0804"];

  // Next define a Function to determine the carrier based on prefixes
  function getCarrier(phoneNumber) {
    if (
      mtnPrefixes.some((prefix) => phoneNumber.startsWith(prefix))) {
      return "MTN";
    } else if (
      airtelPrefixes.some((prefix) => phoneNumber.startsWith(prefix))
    ) {
      return "Airtel";
    } else if (
      gloPrefixes.some((prefix) => phoneNumber.startsWith(prefix))) {
      return "Glo";
    } else if (
      etisalatPrefixes.some((prefix) => phoneNumber.startsWith(prefix))) {
      return "Etisalat";
    } else if (
      ntelprefixes.some((prefix) => phoneNumber.startsWith(prefix))) {
      return "Ntel";
    } else {
      return "others";
    }
  }
  //still within the evenlistener, we Set the logo based on the detected carrier using the switch case
  const detectedCarrier = getCarrier(phoneNumber);
  switch (detectedCarrier) {
    case "MTN":
      carrierLogo.src = "mtn.png";
      break;
    case "Airtel":
      carrierLogo.src = "airtel.png";
      break;
    case "Glo":
      carrierLogo.src = "glo.jpg";
      break;
    case "Etisalat":
      carrierLogo.src = "9moile.jpg";
      break;
    default:
      carrierLogo.src = "others.jpg";
  }
});
