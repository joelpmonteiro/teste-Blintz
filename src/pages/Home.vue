<template>
  <div>
    <!-- <HeaderSearch
      @send-value-search-item="searchItem"
      @send-data-value="OrderItems"
    /> -->
    <div class="headerSearch">
      <form class="containerSearch row">
        <div class="itemInput">
          <div class="form-group">
            <input type="text" class="inputSearch" v-model="itemSearch" />
            <div class="icone">
              <i class="fa fa-search"></i>
            </div>
          </div>
        </div>
        <div class="itemInput">
          <div class="form-group">
            <select
              name=""
              class="inputSearch"
              v-model="selectOrder"
              @change.prevent="OrderItems"
            >
              <option value="1">Mais caros</option>
              <option value="2">Mais baratos</option>
            </select>
          </div>
        </div>
      </form>
    </div>

    <div class="container flex flex-wrap">
      <card
        class="item"
        v-for="(valor, index) in search"
        :key="index"
        :propierties="valor"
      />
    </div>
  </div>
</template>

<script>
import card from "@/components/card/Card.vue";
//import HeaderSearch from "@/components/HeaderSearch.vue";
import { getAllProperties } from "../services/api";
import { remover_acentos_espaco } from "../services/removeAccents.js";
export default {
  name: "Home",
  components: {
    card,
    //HeaderSearch,
  },
  data() {
    return {
      propierties: [],
      itemSearch: "",
      selectOrder: 0,
    };
  },
  computed: {
    search() {
      return this.propierties.filter((item) => {
        if (item.building !== undefined) {
          return this.searchWithBuilding(item);
        }
        return this.searchWithOutBuilding(item);
      });
    },
  },
  methods: {
    searchWithBuilding(item) {
      console.log(this.itemSearch.toLowerCase());
      console.log(remover_acentos_espaco(item.address).toLowerCase());
      return (
        remover_acentos_espaco(item.address)
          .toLowerCase()
          .match(this.itemSearch.toLowerCase()) ||
        remover_acentos_espaco(item.region)
          .toLowerCase()
          ?.match(this.itemSearch.toLowerCase()) ||
        remover_acentos_espaco(item.building)
          .toLowerCase()
          .match(this.itemSearch.toLowerCase())
      );
    },
    searchWithOutBuilding(item) {
      return (
        remover_acentos_espaco(item.address)
          .toLowerCase()
          .match(this.itemSearch.toLowerCase()) ||
        remover_acentos_espaco(item.region)
          .toLowerCase()
          ?.match(this.itemSearch.toLowerCase())
      );
    },
    OrderItems() {
      if (parseInt(this.selectOrder) === 1) {
        this.propierties.sort((a, b) => {
          return b.asking_price - a.asking_price;
        });
      } else {
        this.propierties.sort((a, b) => {
          return a.asking_price - b.asking_price;
        });
      }
    },
  },
  async mounted() {
    try {
      const data = await getAllProperties();
      this.propierties = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
@import "~@/assets/mobile.css";

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

.grow2 {
  flex-grow: 2;
}

.item {
  margin: 1% 1% 1% 2%;
  text-align: center;
  font-size: 1.5em;
}

.form-group {
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  padding: 5px;
}

.icone {
  width: 100%;
  text-align: end;
  margin-left: -2%;
  margin-top: -8%;
}

.form-group > select {
  width: 15rem;
  height: 45px;
  font-size: 20px !important;
  text-align: center;
  line-height: 34px;
}
.form-group .inputSearch {
  font-size: 1.5em;
  padding: 0;
  color: #000000;
}

.form-group .inputSearch > input {
  position: relative;
  width: 669px;
  height: 50px;
  font-size: 1em;
  font-weight: bold;
  color: #aecbde;
  background: transparent;
  border: 2px solid #aecbde;
  border-radius: 7px;
  padding: 5px 5px 5px 20px;
}

.headerSearch {
  margin-top: 1%;
  max-width: 200px;
}

.containerSearch {
  display: flex;
  width: 10rem;
  margin: 5px auto;
}

.row {
  flex-direction: row;
}

.itemInput {
  flex: 1;
  margin: 5px;
  text-align: center;
  font-size: 1.5em;
}
</style>
