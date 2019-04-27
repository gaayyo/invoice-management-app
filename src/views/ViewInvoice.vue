
<template>
  <div>
    <div id="invoice">
      <div class="container">
        <router-link to="/" class="pull-right" style="margin-top: -30px;">&lt; back</router-link>
        <b-jumbotron>
          <h3 style="text-align: left;">Invoice Details</h3>
          <hr>
          <b-form>
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-6">
                  <div style="text-align: left">
                    <p>
                      <b>Invoice Number</b>
                      : {{formData.invoiceNumber}}
                      <br>
                      <b>Invoice Date</b>
                      : {{formData.invoiceDate}}
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div style="text-align: right;">
                    <p>
                      <b>Customer Details</b>
                      <br>
                      {{formData.customer.name}}
                      <br>
                      {{formData.customer.address}}
                      <br>
                      {{formData.customer.contact}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="row">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Item Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in formData.items" :key="index">
                      <td>{{ index+1 }}</td>
                      <td>{{ item.item }}</td>
                      <td>{{ item.quantity }}</td>
                      <td>
                        <span>&#8377;</span>
                        {{ item.itemprice }}
                      </td>
                      <td>
                        <span>&#8377;</span>
                        {{ item.quantity * item.itemprice }}
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <th>Total</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colspan="3">
                      <b>
                        <span>&#8377;</span>
                        {{ totalAmount }}
                      </b>
                    </td>
                  </tfoot>
                </table>
              </div>
            </div>
          </b-form>
        </b-jumbotron>
      </div>
    </div>
    <b-button type="submit" variant="primary" @click="printReport">Print</b-button>
    <button class="btn btn-success" @click="editInvoice()">Edit Invoice</button>
    <hr>
  </div>
</template>

<script>
import invoices from '@/data/invoice-list.js'
import Printd from 'printd'
export default {
  data () {
    return {
      invoices,
      totalAmount: 0,
      formData: invoices[this.$route.params.id]
    }
  },
  mounted () {
    this.d = new Printd()
    this.calculateTotal()
  },
  methods: {
    printReport () {
      this.d.print(document.getElementById('invoice'))
    },
    calculateTotal () {
      for (var i = 0; i < this.formData.items.length; i++) {
        this.totalAmount =
          this.totalAmount +
          this.formData.items[i].quantity * this.formData.items[i].itemprice
      }
    },
    editInvoice () {
      this.$router.push({
        name: 'edit',
        params: { id: this.$route.params.id }
      })
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 0 5px;
}
</style>
