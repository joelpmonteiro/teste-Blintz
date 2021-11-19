<template>
  <div id="nav">
    <div class="Icon">
      <div class="IconVerify">Blintz</div>
    </div>
    <button
      aria-label="Abrir Menu"
      id="btn-mobile"
      aria-haspopup="true"
      aria-controls="menu"
      aria-expanded="false"
      type="button"
      @click.prevent="toggleMenu"
    >
      Menu

      <span id="hamburger"></span>
    </button>

    <ul class="nav-list center space-between">
      <li class="nav-item">
        <a href="#"><i class="fa fa-building" aria-hidden="true"></i></a>
      </li>
      <li class="nav-item">
        <a href="#"><i class="fa fa-handshake-o" aria-hidden="true"></i></a>
      </li>
      <li class="nav-item">
        <a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> </a>
      </li>
      <li class="nav-item">
        <a href="#"><i class="fa fa-bell" aria-hidden="true"></i> </a>
      </li>
      <li class="nav-item">
        <a href="#"><i class="fa fa-cog" aria-hidden="true"></i> </a>
      </li>
    </ul>
    <div class="headerLeft">
      <span class="txt"> Bem-vindo,<b>usuario@email.com</b> </span>
      <a href="#" class="ico"
        ><i class="fa fa-sign-out" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    toggleMenu() {
      const nav = document.getElementById("nav");
      nav.classList.toggle("active");
    },
  },
};
</script>
<style scoped>
#btn-mobile {
  display: none;
}

#nav {
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #c0c0c0;
  width: 100%;
  height: 40px;
}
.txt {
  margin-top: 1%;
}
.headerLeft {
  position: relative;
  margin-top: -2.1rem;
  float: right;
}

.ico {
  position: relative;
  padding: 18px;
  font-size: 20px;
  color: black;
  transition: color 0.4s ease-in-out;
}
/* .headerLeft a > i {
  margin-left: 10%;
  font-size: 20px;
  color: black;
  transition: color 0.4s ease-in-out;
} */

.Icon {
  position: absolute;
  width: 10px;
  padding: 1px;
  left: 10px;
}

.space-between {
  justify-content: space-between;
}
.Icon .IconVerify {
  margin: 0.75rem 1%;
  font-size: 30px;
  line-height: 15px;
}
.nav-list {
  display: flex;
  list-style: none;

  margin: 0 auto;
}

.center {
  justify-content: center;
}

.nav-list .nav-item {
  font-size: 20px;
  padding: 10px;
  margin: 0 5px;
  margin-left: 1.25rem;
  /* text-transform: capitalize; */
}

.nav-list .nav-item a {
  color: black;
  transition: color 0.4s ease-in-out;
}

.nav-item .nav-item a:hover {
  color: #c0c0c0;
}
</style>
