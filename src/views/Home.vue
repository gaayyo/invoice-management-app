<template>
  <div class="home">
    <div class="container">
      <b-jumbotron>
        <div class="row">
          <div v-for="(invoice, index) in invoices" :key="index">
            <div class="widgetBox mb-2 mr-2 ml-2 mt-2" @click="showEditModal(index)">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-6">
                    <img src="../assets/invoice.png" class="img-fluid">
                  </div>
                  <div class="col-sm-6" style="vertical-align: middle;">
                    <p class="alignClass">{{invoice.invoiceNumber}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import invoices from "@/data/invoice-list.js";

export default {
  data() {
    return {
      invoices
    };
  },
  methods: {
    showEditModal(index) {
      this.$router.push({ name: "view", params: { id: index } });
    }
  }
};
</script>

<style scoped>
.widgetBox {
  width: 300px;
  height: 150px;
  text-align: center;
  background-color: #ffcd6a;
  cursor: pointer;
  border-radius: 5px;
}

.widgetBox:hover {
  box-shadow: 0 0 15px rgba(19, 17, 17, 0.2);
}

img {
  height: 150px;
  width: 200px;
}

.alignClass {
  position: absolute;
  top: 45%;
  height: 5%;
  width: 100%;
}
</style>
