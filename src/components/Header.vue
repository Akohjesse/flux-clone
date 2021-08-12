<template>
    <header>
      <div @click="emitsom" class="logo">
         <img src='../assets/flux-logo.webp' alt="">
      </div>
      <nav>
        <ul>
          <li>About Us</li>
          <li>Flux Store</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>
            <button>{{ header }}</button>
          </li>
        </ul>
      </nav>
    </header>

</template>

<script>
export default {
  props: ['header'],
  methods: {
    emitsom(){
      this.$emit('enter')
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  width:90%;
  margin:0 auto;
  margin-bottom: 20px !important;
  height:84px;
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding:10px;
  .logo{
    img{
      width:44px;
      height:44px;
    }
  }
  nav{
    ul{
      display: flex;
      padding:20px;
      justify-content: space-between;
      li{
         list-style-type: none;
         padding-left: 60px;
         color: rgb(34,34,34);
         font-size:0.84em;
         align-self:right;
         font-weight: 600;
         align-self: center;
         button{
           color: white;
           background:#8364b1 ;
           border: none;
           font-weight: 600;
           border-radius: 5px;
           padding:16px 20px;
           font-family: inherit;
         }
      }
    }
  }
}
  @font-face {
    font-family: 'Caros Regular';
    font-style: normal;
    font-weight: normal;
    src: url('../assets/cretype  Caros.woff') format('woff');
    }

    @media (max-width:1020px){
      nav{
        display: none;
      }
    }
</style>
