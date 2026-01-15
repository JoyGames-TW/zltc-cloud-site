# 湛盧科技企業官網 | ZLTC Corporate Website

湛盧科技有限公司 (Zhan-Lu Technology Co., Ltd.) 企業官網 - 可直接部署到 GitHub Pages 的靜態網站。

## 📋 專案概述

這是一個純靜態的企業官網，使用 Bootstrap 5 + Vanilla JavaScript 建構，無需任何後端服務即可運行。

### 特色

- ✅ 純靜態網站 (HTML/CSS/JS)
- ✅ 響應式設計 (RWD)
- ✅ SEO 優化 (meta tags, Open Graph, sitemap, robots.txt)
- ✅ 高質感醫療科技企業風格
- ✅ 細緻的 hover 效果與 scroll reveal 動畫
- ✅ 可直接部署到 GitHub Pages

### 頁面結構

| 頁面 | 檔案 | 說明 |
|------|------|------|
| 首頁 | `index.html` | 企業價值主張、客戶背書、產品亮點 |
| 解決方案 | `solutions.html` | B2B 敘事：痛點→方法→交付→效益 |
| 產品 | `products.html` | 三大產品線詳細介紹 |
| 案例 | `case-studies.html` | 成功案例展示與篩選 |
| 關於我們 | `about.html` | 公司介紹、使命價值觀、合作流程 |
| 聯絡我們 | `contact.html` | 聯絡資訊與表單選項 |
| 資源 | `resources.html` | FAQ、文件下載、文章 |

---

## 🚀 部署到 GitHub Pages

### 方式一：直接部署

1. **建立 GitHub Repository**
   - 在 GitHub 建立新的 repository（例如：`zltc-website`）

2. **上傳檔案**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/zltc-website.git
   git push -u origin main
   ```

3. **啟用 GitHub Pages**
   - 進入 Repository → Settings → Pages
   - Source 選擇 `Deploy from a branch`
   - Branch 選擇 `main` / `/ (root)`
   - 點擊 Save

4. **等待部署**
   - 約 1-2 分鐘後，網站將在 `https://YOUR_USERNAME.github.io/zltc-website/` 上線

### 方式二：使用自訂網域

1. **設定 CNAME 檔案**
   - 編輯 `CNAME` 檔案，將 `zltc-cloud.net` 替換為您的網域

2. **DNS 設定**
   - 在您的網域 DNS 服務商處新增以下記錄：
   
   **A Records (擇一):**
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   
   **或 CNAME Record:**
   ```
   www -> YOUR_USERNAME.github.io
   ```

3. **在 GitHub 啟用自訂網域**
   - Repository → Settings → Pages → Custom domain
   - 輸入您的網域並儲存
   - 勾選 "Enforce HTTPS"（建議）

---

## 📁 檔案結構

```
OfficialWebsite/
├── index.html              # 首頁
├── solutions.html          # 解決方案頁
├── products.html           # 產品頁
├── case-studies.html       # 案例頁
├── about.html              # 關於我們頁
├── contact.html            # 聯絡我們頁
├── resources.html          # 資源頁
├── sitemap.xml             # SEO Sitemap
├── robots.txt              # 爬蟲規則
├── CNAME                   # 自訂網域設定
├── README.md               # 本說明文件
└── assets/
    ├── css/
    │   └── style.css       # 自訂樣式
    ├── js/
    │   └── main.js         # JavaScript 模組
    └── img/
        ├── clients/        # 客戶 Logo (placeholder)
        └── mockups/        # 產品截圖 (placeholder)
```

---

## 🔧 需要替換的 Placeholder

在正式上線前，請替換以下項目：

### 1. 網域相關

| 檔案 | 位置 | 說明 |
|------|------|------|
| `CNAME` | 整份檔案 | 替換為您的自訂網域 |
| `sitemap.xml` | 所有 `<loc>` | 將 `zltc-cloud.net` 替換為實際網域 |
| `robots.txt` | Sitemap URL | 將 `zltc-cloud.net` 替換為實際網域 |
| 所有 `.html` | `<link rel="canonical">` | 替換為實際網址 |
| 所有 `.html` | `og:url`, `twitter:url` | 替換為實際網址 |

### 2. 圖片資源

| 路徑 | 說明 |
|------|------|
| `assets/img/favicon-32x32.png` | 32x32 favicon |
| `assets/img/favicon-16x16.png` | 16x16 favicon |
| `assets/img/apple-touch-icon.png` | 180x180 Apple Touch Icon |
| `assets/img/og-image.png` | Open Graph 圖片 (建議 1200x630) |
| `assets/img/clients/` | 客戶 Logo (如有) |
| `assets/img/mockups/` | 產品截圖 (如有) |

### 3. 表單設定 (contact.html)

如需使用線上表單，請選擇以下方式之一：

**Google 表單：**
1. 建立 Google 表單
2. 取得嵌入網址
3. 在 `contact.html` 中將 placeholder 區塊替換為 iframe

**Formspree：**
1. 在 [formspree.io](https://formspree.io) 註冊
2. 建立表單，取得 form ID
3. 將 `contact.html` 中的 `YOUR_FORM_ID` 替換為實際 ID
4. 移除 submit 按鈕的 `disabled` 屬性

---

## 🎨 設計系統

### 顏色變數

```css
--zltc-primary: #0d4a6f;       /* 主色 - 深藍 */
--zltc-primary-dark: #083550;   /* 主色深 */
--zltc-primary-light: #1a6fa8;  /* 主色淺 */
--zltc-secondary: #2d8a9e;      /* 次要色 - 青綠 */
--zltc-accent: #3ba3b8;         /* 強調色 */
```

### 字型

預設使用 Google Fonts 的 **Noto Sans TC**，自動 fallback 到系統字型。

### 響應式斷點

使用 Bootstrap 5 預設斷點：
- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1200px
- `xxl`: 1400px

---

## 🛠 技術細節

### 相依套件 (CDN)

- Bootstrap 5.3.2
- Bootstrap Icons 1.11.1
- Google Fonts (Noto Sans TC)

### JavaScript 功能

- **共用元件載入**：Navbar 與 Footer 透過 JavaScript 注入
- **Scroll Reveal**：使用 IntersectionObserver 實現滾動動畫
- **Navbar 滾動效果**：滾動時變更背景與陰影
- **案例篩選**：支援按類別篩選案例卡片
- **Modal 動態內容**：案例詳情透過 data attributes 動態載入

### SEO 配置

每頁皆包含：
- 獨立的 `<title>` 與 `meta description`
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Canonical URL
- 結構化的 HTML5 語意標籤

---

## 📝 維護注意事項

1. **新增頁面時**
   - 複製現有頁面結構
   - 更新 `data-page` 屬性
   - 在 `main.js` 的 NavbarComponent 中新增導覽連結
   - 更新 `sitemap.xml`

2. **修改共用元件**
   - Navbar 與 Footer 定義在 `assets/js/main.js`
   - 修改後會自動套用到所有頁面

3. **樣式修改**
   - 自訂樣式在 `assets/css/style.css`
   - CSS 變數定義在 `:root` 選擇器中

---

## 📞 聯絡資訊

**湛盧科技有限公司**  
Zhan-Lu Technology Co., Ltd. (ZLTC)

- Email: [contact@zltc-cloud.net](mailto:contact@zltc-cloud.net)

---

## 📄 授權

© 2026 湛盧科技有限公司 版權所有。
