# Product Mockups

此資料夾用於存放產品截圖與示意圖。

## 預期檔案

- `pathology-system.png` - 病理系統介面截圖
- `dashboard.png` - 醫療儀器數據儀表板截圖
- `mobile-game.png` - 手機遊戲畫面

## 建議規格

- 格式：PNG 或 JPEG
- 尺寸：建議 800-1200px 寬度
- 注意：請勿包含任何敏感資料（PHI、個資等）

## 使用方式

在 `products.html` 和 `index.html` 中的產品卡片區塊，
將 `<i class="bi bi-xxx"></i>` 圖示替換為 `<img src="..." alt="...">` 標籤。

範例：
```html
<div class="product-card-image">
  <img src="assets/img/mockups/pathology-system.png" alt="病理系統介面" class="img-fluid">
</div>
```
