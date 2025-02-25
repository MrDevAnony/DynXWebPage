const jsonData = {
    "dns": {
      "servers": [
        "https+local://dns.dynx.pro/dns-query",
        "1.1.1.1",
        "1.0.0.1",
        "8.8.8.8",
        "8.8.4.4",
        "9.9.9.9"
      ],
      "queryStrategy": "UseIP",
      "disableCache": false,
      "disableFallback": false,
      "disableFallbackIfMatch": false
    }
  };
  
  document.getElementById("json-output").textContent = JSON.stringify(jsonData, null, 4);