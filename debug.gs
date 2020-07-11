function debug(value) {
  const url = PropertiesService.getScriptProperties().getProperty("SLACK_WEBHOOK_URL");
  const options = {
    "method": "post",
    "payload": JSON.stringify({
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "plain_text",
            "text": JSON.stringify(value)
          }
        }
      ]
    })
  };
  UrlFetchApp.fetch(url, options);
}
