<template>
  <div>
    <h2 class="text-center">Products List</h2>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Detail</th>
          <!-- <th>Actions</th> -->
        </tr>
      </thead>
      <tbody>
        <!-- <div v-if="products.length > 5"> -->

        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.detail }}</td>

          <td>{{ product.status }}</td>

          <td></td>

          <td>
            <div class="btn-group" role="group">
              <router-link
                :to="{ name: 'edit', params: { id: product.id } }"
                class="btn btn-success"
                >Edit</router-link
              >

              <router-link :to="{ name : 'viewProduct', params: { id: product.id} }">View</router-link>

              <button class="btn btn-danger" @click="deleteProduct(product.id)">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <br />

    <div v-for="item in items" :key="item.id" :style="{ color: item.color }">
      {{ item.name }}
    </div>

    <div
      v-for="item in items1"
      :key="item.id"
      :class="{ 'is-active': item.active, inactive: !item.active }"
    >
      {{ item.name }}
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Item 1", color: "red" },
        { id: 2, name: "Item 2", color: "green" },
        { id: 3, name: "Item 3", color: "blue" },
      ],

      items1: [
        { id: 1, name: "Item 1", active: true },
        { id: 2, name: "Item 2", active: false },
        { id: 3, name: "Item 3", active: true },
      ],
      products: [],
    };
  },
  mounted() {
    this.axios.get("http://localhost:8000/api/products/").then((response) => {
      this.products = response.data;
    });
  },
  methods: {
    deleteProduct(id) {
      this.axios
        .delete(`http://localhost:8000/api/products/${id}`)
        .then((response) => {
          let i = this.products.map((data) => data.id).indexOf(id);
          this.products.splice(i, 1);
        });
    },
  },
};
</script>

<style>
.is-active {
  background-color: #f5f5f5;
  padding: 10px;
}

.inactive {
  color: rgb(136, 11, 11);
}

.active {
  font-size: 16px;
  color: green;
}
</style>