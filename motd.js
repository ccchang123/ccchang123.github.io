const motdParser = require('@sfirew/mc-motd-parser');

let mcfalloutJson = {
  "extra": [
    {
      "color": "gray",
      "text": "  "
    },
    {
      "color": "gold",
      "text": "廢土伺服器  "
    },
    {
      "color": "white",
      "text": "mcFallout.net"
    },
    {
      "color": "dark_gray",
      "text": " - "
    },
    {
      "color": "gray",
      "text": "版本 1.17.1 "
    },
    {
      "color": "gold",
      "text": "洞穴"
    },
    {
      "color": "light_purple",
      "text": "與"
    },
    {
      "color": "aqua",
      "text": "山崖\n"
    },
    {
      "color": "gray",
      "text": "  "
    },
    {
      "color": "dark_gray",
      "text": "享受工廠、農場、建築與紅石"
    }
  ],
  "text": ""
}
let result = motdParser.JSONToHtml(mcfalloutJson);
console.log(result)
