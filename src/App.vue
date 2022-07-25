<template>
  <nullResponsive :config="nullconf" />
  <Header :header="header" />
  <main>
    <div class="banner">
      <div class="text">
        <h1>International and Local cash transfers, simplified.</h1>
        <span
          >With Flux, international and local cash transfers just got easier,
          faster, cheaper and better.</span
        >

        <div class="cta">
          <button>Go to web</button>
          <button>Contact Us</button>
        </div>
      </div>

      <div class="graphic">
        <div class="image">
          <img src="./assets/banner-iphone.webp" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      header: "Go to web",
      nullconf: {
        breakpoint: 1100,
        bg_color: "#e6e6fb",
        text_color: "#858586",
        imglink: "https://c.tenor.com/fkPxqJwOVhoAAAAM/qforce-stat.gif",
        inputText: "This site no dey pass desktop view, mfjpm",
      },
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  font-family: Caros Regular;
}
main {
  width: 90%;
  margin: 0 auto;
  .banner {
    height: 80vh;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    margin-top: 4%;
    .text {
      max-width: 576px;
      h1 {
        margin: 0.67em 0px;
        font-size: 3em;
        font-weight: 900;
        color: rgb(34, 34, 34);
      }
      span {
        display: block;
        font-weight: 300;
        font-size: 1.3em;
      }
      .cta {
        margin: 2em 0px;
        justify-content: space-between;
        display: flex;
        width: 45%;
        button {
          border: none;
          padding: 15px 20px;
          font-size: 0.9em;
          font-family: inherit;
          border-radius: 5px;
          &:nth-child(1) {
            background: #8364b1;
            color: white;
          }
          &:nth-child(2) {
            background: white;
            color: #8364b1;
          }
        }
      }
    }
    .graphic {
      width: 396px;
      justify-self: right;
      .image {
        width: 100%;
        z-index: 2;
        &::before {
          content: "";
          display: block;
          height: 50px;
          width: 50px;
          border: 4px solid rgb(131, 100, 177);
          position: absolute;
          right: 23rem;
          background: transparent;
        }
        &::after {
          content: "";
          height: 40px;
          width: 40px;
          border: 4px solid rgb(131, 100, 177);
          position: absolute;
          z-index: -1;
          bottom: 15%;
          left: 87.5%;
          border-radius: 50%;
          background: transparent;
        }
        img {
          width: 100%;
          position: relative;
          top: -2rem;
        }
      }
      &::after {
        content: "";
        display: block;
        top: 22.5%;
        z-index: -2;
        height: 490px;
        right: 1rem;
        width: 490px;
        border-radius: 50%;
        position: absolute;
        background: linear-gradient(
            153deg,
            rgb(249, 246, 251) 0px,
            rgb(242, 223, 255) 100%
          )
          0px 0px no-repeat padding-box padding-box transparent;
      }
    }
  }
}
</style>
