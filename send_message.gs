function sendMessage(memberRows) {

  // ====================================
  // ベースメッセージ
  // ====================================
  const BASE_MESSAGE = [
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
  // メッセージを作成する
  // ====================================

  const ID_COLUMN = 0
  const NAME_COLUMN = 1
  const ROOM_COLUMN = 2
  
  function section(row) {
    const id = row[ID_COLUMN]
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
        "value": String(id) + "," + '"07/06"' // TODO: ベタ書き修正する
      }
    }
  }
  
  const sections = memberRows.map(row => {
    return section(row)
  })
  const blockKitMessage = BASE_MESSAGE.concat(sections)

  // ====================================
  // Slackにメッセージを送信する
  // ====================================
  const url = PropertiesService.getScriptProperties().getProperty("SLACK_WEBHOOK_URL");
  const payload = {'blocks' : blockKitMessage};
  const options = {
                  'method' : 'POST',
                  'payload': JSON.stringify(payload)
                };

  UrlFetchApp.fetch(url, options);
}
