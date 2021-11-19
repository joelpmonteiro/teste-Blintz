<template>
  <div class="card">
    <div class="card-title">
      <div class="card-img">
        <img src="../../assets/img/img.jpg" />
      </div>
    </div>
    <div class="card-body">
      <div>
        <span>
          <strong>{{ propierties.address }}</strong>
        </span>
      </div>
      <div>
        <span
          >{{ propierties.property_type }}

          {{
            propierties.building !== undefined
              ? " - " + propierties.building
              : ""
          }}</span
        >
      </div>
      <div>
        <span>R$ {{ propierties.asking_price.toLocaleString("pt-BR") }}</span>
      </div>
      <div>
        <span
          >{{ propierties.bedrooms }}TT {{ propierties.suites }}ST
          {{ propierties.parking_spots }}VG</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    propierties: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  max-width: 200px;
  max-height: 100%;
  padding: 2%;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border: 1px solid black;
}

.card-title {
  padding-bottom: 10px;
}

img {
  background-size: 10px;
  width: 100%;
}

.card-img {
  background-size: 100px;
}

.card-body > div {
  padding-bottom: 20px;
}
</style>
