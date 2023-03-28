<br/>
<br/>

## Color


<div class="color-itembox">
  <li class="primary">
    <span class="title">主要颜色</span>
    <span class="color">$primary</span>
    <span class="color">#409EFF</span>
  </li>
</div>

<div class="color-itembox">
  <li class="success">
    <span class="title">成功状态</span>
    <span class="color">$success</span>
    <span class="color">#67C23A</span>
  </li>
</div>

<div class="color-itembox">
  <li class="danger">
    <span class="title">危险状态</span>
    <span class="color">$danger</span>
    <span class="color">#F56C6C</span>
  </li>
</div>

<div class="color-itembox">
  <li class="warning">
    <span class="title">警告状态</span>
    <span class="color">$warning</span>
    <span class="color">#E6A23C</span>
  </li>
</div>

<div class="color-itembox">
  <li class="text">
    <span class="title">文本颜色</span>
    <span class="color">$text</span>
    <span class="color">#303133</span>
  </li>
</div>

<!-- <div class="color-itembox">
  <li style="border:1px solid #f0f0f0;color:#333">
    <span class="title">边框颜色</span>
    <span class="color">#f0f0f0</span>
    <span>rgba(240,240,240,1)</span>
  </li>
</div>

<div class="color-itembox">
  <li style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);;color:#333">
    <span class="title">阴影颜色</span>
    <span class="color">0 2px 12px 0 rgba(0, 0, 0, 0.1)</span>
  </li>
</div> -->

<style lang="scss" scoped>
  .primary {
    background-color: $primary;
  }
  .success {
    background-color: $success;
  }
  .danger {
    background-color: $danger;
  }
  .warning {
    background-color: $warning;
  }
  .text {
    background-color: $text;
  }
  .color-itembox{
    height: 100px;
    display: inline-block;
  }
  .color-itembox li{
    list-style: none;
    width: 10vw;
    height: 100%;
    left: none;
    float: left;
    margin-right: 0.5vw;
    border-radius: 4px;
    color: #fff;
    text-align: center;
  }
  .color-itembox li span{
    width: 100%;
    display: inline-block;
    line-height: 24px;
    font-size: 14px;
  }
        
</style>
