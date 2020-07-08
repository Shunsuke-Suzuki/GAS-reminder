# GAS-reminder

## 使用するSlack Appについて
必要なScopeは以下の2つです。
- chat:write
- incoming-webhook

## 使用するスプレッドシート
以下のようなスプレッドシートを作成してください。
<img width="633" alt="スクリーンショット 2020-07-07 21 24 43" src="https://user-images.githubusercontent.com/49185403/86781287-a7bd8980-c098-11ea-8aaa-8aa18c0d6090.png">

## 環境構築
GAS IDE（ブラウザ:chrome）で開発します。非常に面倒です。すみません
1. **Google App Scriptのプロジェクトを作成**
2. **chromeにGASのプロジェクトをGitHub管理できる拡張機能[Google Apps Script GitHub アシスタント](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo)を追加**(参考： https://tadaken3.hatenablog.jp/entry/gas-github)
3. **GASのプロジェクト画面からGoogle Apps Script GitHub アシスタントにログインし、このリポジトリを指定してpull**

※ GitHubのアクセストークンが必要です。アクセストークンの取得方法は[こちら](https://docs.github.com/ja/github/authenticating-to-github/creating-a-personal-access-token)

4. **GASをデプロイ**

```公開 > ウェブアプリケーションとして導入 > 更新```で、デプロイ完了。(完了後に表示される"Current web app URL"は次のステップで使用します。)

5. **SlackAppをインタラクティブにする**

SlackAppInteractivityをONにし、RequestURLにステップ4の"Current web app URL"を入力する

6. **環境変数を設定**

```ファイル > プロジェクトのプロパティ > スクリプトのプロパティ```から以下を設定する。
| キー | 値 |
| ------------- | ------------- |
| SPREAD_SHEET_ID | スプレッドシートのID※ |
| SLACK_WEBHOOK_URL | SlackAppで発行したWebhook URL |

※ スプレッドシートのID
```https://docs.google.com/spreadsheets/d/[この部分がシートのIDです]/edit#gid=0```

## スクリプト名の命名規則
[Known issues](https://github.com/leonhartX/gas-github#5known-issues)に挙げられているように、スクリプトファイル名と関数名が一致するとPushできません。したがって、スクリプト名はsnake_case、関数名はcamelCaseとします。
```
// NG
myFunction.gs
function myFunction() { ... }

// OK
my_function.gs
function myFunction() { ... }
```
