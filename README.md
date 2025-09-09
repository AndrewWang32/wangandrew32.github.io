# 個人網站（可免費部署）

這是一個無後端、可直接部署在 **GitHub Pages** 的個人網站。也可一鍵搬到 **Netlify / Vercel**。

## 你可以得到什麼
- ✅ 清楚的資訊架構（關於我 / 作品 / 文章 / 聯絡）
- ✅ 良好互動回饋（表單成功頁、NPS 反饋小工具、Toast 訊息）
- ✅ 完整無後端表單（使用 [FormSubmit](https://formsubmit.co)）
- ✅ 100% 免費部署

## 使用方法

### 1) 編輯內容
- 在 `index.html` 搜尋 `Your Name` 換成你的名字、社群連結。
- 編輯作品卡片、段落文字。
- 在 `posts.json` 新增文章摘要卡。

### 2) 開啟表單轉寄（免費）
1. 前往 https://formsubmit.co
2. 把 `contact` 表單的 `action="https://formsubmit.co/youremail@example.com"` 換成你的 Email。
3. 第一次提交時會收到確認信，點擊即可啟用。

### 3) GitHub Pages 免費部署
1. 在 GitHub 建立 repo，名稱建議：`<你的帳號>.github.io`
2. 上傳本資料夾所有檔案（`index.html`, `styles.css`, `script.js`, `posts.json`, `thanks.html` 等）。
3. 進入 repo 的 Settings → Pages，若需要，選擇 `Deploy from a branch`（main）。
4. 幾十秒後即可用 `https://<你的帳號>.github.io/` 造訪。

> 想用 Netlify / Vercel：直接把 repo 連過去，選擇靜態站台部署即可（免費方案足夠）。

## 無障礙與效能
- 色彩對比 ≥ WCAG AA，支援鍵盤操作（含對話框）。
- 檔案純靜態、無框架，首屏載入極輕。

## 結構
- `index.html`：主頁
- `styles.css`：樣式
- `script.js`：互動腳本（文章載入 / 反饋元件 / 導覽開關）
- `posts.json`：文章資料
- `thanks.html`：表單成功頁

---

**小技巧**：想要自訂網域？在 repo 新增 `CNAME` 檔，內容填你的網域，然後在 DNS 設定 CNAME 指向 `<你的帳號>.github.io` 即可。
