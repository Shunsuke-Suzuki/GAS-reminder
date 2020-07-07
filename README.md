# GAS-reminder

## 使用するSlack Appについて
必要なScopeは以下の2つです。
- chat:write
- incoming-webhook

## 環境構築
GAS IDE（ブラウザ:chrome）で開発します。
1. **Google App Scriptのプロジェクトを作成**
2. **chromeにGASのプロジェクトをGitHub管理できる拡張機能[Google Apps Script GitHub アシスタント](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo)を追加**(参考： https://tadaken3.hatenablog.jp/entry/gas-github)
3. **GASのプロジェクト画面からGoogle Apps Script GitHub アシスタントにログインし、このリポジトリを指定してpull**
4. **環境変数を設定**

```ファイル > プロジェクトのプロパティ > スクリプトのプロパティ```から以下を設定する。
| キー | 値 |
| ------------- | ------------- |
| SPREAD_SHEET_ID | スプレッドシートのID |
| SLACK_WEBHOOK_URL | SlackAppで発行したWebhook URL |

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
