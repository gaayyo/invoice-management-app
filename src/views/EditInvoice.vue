<template>
  <div>
    <div class="container">
      <router-link :to="`/view/${$route.params.id}`"
        class="pull-right" style="margin-top: -30px;">&lt; back</router-link>
      <b-jumbotron>

        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Invoice Number</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="formData.invoiceNumber">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Invoice Date</label>
            <div class="col-sm-10">
              <input type="date" class="form-control"
              v-model="formData.invoiceDate"
              >
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Customer Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="formData.customer.name">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Customer Address</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="formData.customer.address">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Customer Contact</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="formData.customer.contact">
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Item Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in formData.items" :key="index">
                <td>{{ index+1 }}</td>
                <td>
                  <input type="text" class="form-control" v-model="item.item">
                </td>
                <td>
                  <input type="text" class="form-control" v-model="item.quantity">
                </td>
                <td>
                  <input type="text" class="form-control" v-model="item.itemprice">
                </td>
                <td>{{ item.quantity * item.itemprice }}</td>
                <td>
                  <icon class="fa fa-trash" @click.prevent="deleteItem(index)"
                  style="cursor: pointer"></icon>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="form-group row col-sm-2">
          <button class="btn btn-success" @click.prevent="addItem"
          :disabled="formData.items[formData.items.length - 1].description === ''
          || formData.items[formData.items.length - 1].quantity === 0
          || formData.items[formData.items.length - 1].itemprice === 0">+ Add Item</button>
          </div>

        </form>
      </b-jumbotron>
       <button class="btn btn-info" @click.prevent="submitData">Submit</button>
       <hr>
    </div>
  </div>
</template>

<script>
import invoices from "@/data/invoice-list.js";

export default {
  data() {
    return {
      invoices,
      formData: {},
      invoiceDate: ''
    };
  },
  mounted() {
    this.formData =  JSON.parse(JSON.stringify(this.invoices[this.$route.params.id]));
    //this.invoiceDate = new Date(this.formData.invoiceDate.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2-$1-$3"));
    console.log(this.formData.invoiceDate);
  },
  methods: {
    addItem() {
      this.formData.items.push({
        'description' : '',
        'quantity': 0,
        'itemprice': 0
      })
    },
    deleteItem(index) {
      this.formData.items.splice(index, 1);
      this.invoices.items.splice(index, 1);
    },
    submitData() {
      this.invoices[this.$route.params.id] = JSON.parse(JSON.stringify(this.formData));

      this.$router.push({ name: 'view', params: { id: this.$route.params.id}});
    }
  },
  filters: {
    dateFilter(value) {
      return new Date(value)
    }
  }
};
</script>

