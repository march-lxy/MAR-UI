<template>
  <div class="container">
    <h1 class="logo">MAR UI</h1>
    <div class="tips">
      <span class="text">Vue3轻量级UI组件库</span>
    </div>
    <div class="button-container">
      <button class="begin-use btn-box" @click="handleJToUse">立即上手</button>
      <button class="go-github btn-box" @click="handleToGitHub">GitHub</button>
      <button class="go-npm btn-box" @click="handleToNpm">NPM</button>
    </div>
    <div class="user">by Thomas</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const handleJToUse = () => {
  router.push({
    path: "introduce",
  });
};

const handleToGitHub = () => {
  // window.location.href = "https://github.com/Down-1998/m-ui";
};
const handleToNpm = () => {
  window.location.href = "https://www.npmjs.com/package/mar-v3-ui";
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-image: url(../public/assets/imgs/bgi.jpg);
  background-size: cover;
  .logo {
    display: block;
    width: 100%;
    margin: 20vh 0 10px;
    text-align: center;
    font-size: 8vw;
    font-weight: 100;
    background: linear-gradient(
      45deg,
      #409eff,
      #10d39d,
      #00a0e9,
      #10d39d,
      #409eff
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: logo 16s linear infinite;
    img {
      width: 100%;
      display: block;
    }
  }
  @keyframes logo {
    0%,
    100% {
      backgroud-position: 0 0;
    }

    50% {
      background-position: 1000px 0;
    }
  }

  .tips {
    text-align: center;
    .text {
      display: inline-block;
      font-size: 1vw;
      font-weight: 100;
      color: #ddd;
      padding: 3px 16px;
      border-radius: 10px;
      overflow: hidden;
      backdrop-filter: blur(80px);
    }
  }
  .button-container {
    width: 100%;
    text-align: center;
    height: auto;
    overflow: hidden;
    margin-top: 20vh;
    .btn-box {
      font-size: 16px;
      font-weight: 100;
      transition: all 0.15s ease-in;
      cursor: pointer;
      width: 120px;
      height: 40px;
      border-radius: 15px;
      opacity: .7;
      margin-right: 2vw;
      &:hover {
        opacity: 1;
      }
    }
    .begin-use {
      border: 1px solid #0e80eb;
      color: #fff;
      background-color: #0e80eb;
    }

    .go-github {
      border: 1px solid #d9d9d9;
      background: #fff;
      color: #333;
      &:hover {
        color: #0e80eb;
      }
    }

    .go-npm {
      border: 1px solid #d9d9d9;
      background: #fff;
      color: #333;
      &:hover {
        color: #0e80eb;
      }
    }
  }
  .user {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #ccc;
    padding: 0 10px;
    border-radius: 10px;
    overflow: hidden;
    backdrop-filter: blur(80px);
    background: linear-gradient(45deg, #409eff, #10d39d, #409eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: user 16s linear infinite;
  }
  @keyframes user {
    0%,
    100% {
      backgroud-position: 0 0;
    }

    50% {
      background-position: 100px 0;
    }
  }
}
</style>
