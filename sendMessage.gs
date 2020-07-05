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
  const NAME_COLUMN = 0
  const ROOM_COLUMN = 1
  
  cleaningList.forEach(function(row) {
    blockKit.push(section(row))
  })
  
  function section(row) {
    const name = row[NAME_COLUMN]
    const room = row[ROOM_COLUMN]
    
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
  const payload = {'blocks' : blockKit};
  const options = {
                  'method' : 'POST',
                  'payload': JSON.stringify(payload)
                };

  UrlFetchApp.fetch(url, options);
}
