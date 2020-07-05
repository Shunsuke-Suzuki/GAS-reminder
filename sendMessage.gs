function myFunction() {

  // ====================================
  // ヘッダーテキスト
  // ====================================
  const blockKit = [
    {
       "type": "section",
       "text": {
         "type": "plain_text",
         "text": "今日の掃除当番",
         "emoji": true,
       }
    },
    {
       "type": "divider",
    }
  ]
  
  // ====================================
  // スプレッドシートを参照してメッセージを作成する
  // ====================================
  const sheet = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"));
  const cleaningList = sheet.getRange("A1:B3").getValues()
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

  // ====================================
  // Slackにメッセージを送信する
  // ====================================
  const url = PropertiesService.getScriptProperties().getProperty("SLACK_WEBHOOK_URL");
  var payload = {'blocks' : blockKit};
  var options = {
                  'method' : 'POST',
                  'payload': JSON.stringify(payload)
                };

  UrlFetchApp.fetch(url, options);
}
