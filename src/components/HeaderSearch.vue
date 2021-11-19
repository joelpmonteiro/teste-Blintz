<template>
  <div class="headerSearch">
    <form class="container row">
      <div class="item">
        <div class="form-group">
          <input
            type="text"
            class="inputSearch"
            v-model="searchItemInput"
            @change="searchItem"
          />
          <div class="icone">
            <i class="fa fa-search"></i>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="form-group">
          <select
            name=""
            class="inputSearch"
            v-model="selectOrder"
            @change.prevent="Order"
          >
            <option value="1">Mais caros</option>
            <option value="2">Mais baratos</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectOrder: 0,
      searchItemInput: "",
    };
  },
  methods: {
    Order() {
      this.$emit("send-data-value", this.selectOrder);
    },
    searchItem() {
      console.log(this.searchItemInput);
      this.$emit("send-value-search-item", this.searchItemInput);
    },
  },
};
</script>

<style scoped>
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

.container {
  display: flex;
  width: 10rem;
  margin: 5px auto;
}

.row {
  flex-direction: row;
}

.item {
  flex: 1;
  margin: 5px;
  text-align: center;
  font-size: 1.5em;
}
</style>
