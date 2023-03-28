<style scoped lang="scss">
.container{
   margin-top: 20px; 
   text-align: left;
   margin-left: 10px;
   .title-box {
    font-weight: 100;
   }
   .subTitle-box {
    font-size: 16px;
    font-weight: 100;
   }
}
.doc{
    font-size: 16px;
    background: #fff;
    color: #333;
    text-decoration: none;
}
.doc:hover{
     font-size: 16px;
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
}
.title{
    font-size: 25px;
    color: #000;
    font-weight: bold;
}
.use-text{
    color: #333;
    font-size: 16px;
}
.content{
    margin-top: 20px;
    width: 400px;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
}
</style>

<div align="left" class="container">
  <h1>
    <p class="title-box">MAR-UI组件库</p>
    <p class="subTitle-box">Vue3轻量级UI组件库</p>
  </h1>
  <div class="content">
    <p class="title">快速使用</p>
    <p class="use-text"><code>npm install mar-v3-ui -S</code></p>
    <p class="use-text"><code>cnpm install  mar-v3-ui -S</code></p>
    <p class="use-text"><code>yarn add mar-v3-ui</code></p>
  </div>
  <div class="content">
    <p class="title">引入</p>
    <p class="use-text"> <code>import MARUI from 'mar-v3-ui'</code> </p>
    <p class="use-text"><code>import '../node_modules/mar-v3-ui/dist/style.css'</code></p>
    <p class="use-text"><code>app.use(MARUI)</code></p>
  </div>
  <div class="content">
    <p class="title">按需引用</p>
    <p class="use-text"><code>import { mButton, mInput } from 'mar-v3-ui'</code></p>
  </div>
</div>
<br/>
