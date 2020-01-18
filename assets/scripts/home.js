let UserAgent = new UAParser();
let currentDeviceType = UserAgent.getDevice().type;
if(currentDeviceType == "mobile") {
  document.querySelectorAll(".home-bg")[0].src = "";
}