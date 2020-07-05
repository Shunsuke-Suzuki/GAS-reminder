function myFunction() {
  const sheet = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"));
  const cleaningList = sheet.getRange("A1:B3").getValues()
  
  const url = PropertiesService.getScriptProperties().getProperty("SLACK_WEBHOOK_URL");
  console.log(url)
  
  var blockKit = [
    {
       "type": "section",
       "text": {
         "type": "plain_text",
         "text": "今日の掃除当番",
         "emoji": true,
       }
    },
    {
       "type": "section",
       "text": {
         "type": "plain_text",
         "text": "==========",
         "emoji": true,
       }
    }
  ]
  cleaningList.forEach(function(row) {
    blockKit.push(section(row[0], row[1]))
  })
  
  function section(name, room) {
    return {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": name + " " + room
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "text": "完了しました",
          "emoji": true
        },
        "style": "primary",
        "value": "done!!!!!!"
      }
    }
  }


  // Slackに送信する
  var payload = {'blocks' : blockKit};
  var options = {
                  'method' : 'POST',
                  'payload': JSON.stringify(payload)
                };

  UrlFetchApp.fetch(url, options);
}
