<template>
  <div>
    <h2 class="text-center">Products List - {{ totalNames }}</h2>

    <div>
      <label for="search">Search:</label>
      <input type="text" id="search" v-model="searchQuery">
    </div>

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
        <tr v-for="product in filteredData" :key="product.id">
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
              <button class="btn btn-danger" @click="deleteProduct(product.id)">
                Delete
              </button>
            </div>
          </td>

   
        </tr>

        <button @click="prevPage">Prev</button>
      <!-- <button v-for="page in totalPages" :key="page" @click="goToPage(page)">{{ page }}</button> -->
      <button v-for="page in totalPages" :key="page" @click="(event) => goToPage(page)">{{ page }}</button>

      <button @click="nextPage">Next</button>

       
      </tbody>
    </table>



    <br />
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      products: [],

      currentPage: 1,
      itemsPerPage: 4,

      searchQuery: '',
      names:[
        'sydney','tony','esnas','Ljay'
      ],

    };
  },

  computed: {

    totalNames(){
     return this.names.length

    },

    filteredData() {
      const query = this.searchQuery.toLowerCase()
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(query) || product.id.toString().includes(query)
      })
    },
  

    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      return this.products.slice(startIndex, startIndex + this.itemsPerPage)
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage)
    }
  },

  methods:{
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    // goToPage(page) {
    //   this.currentPage = page
    // },

    goToPage: function(page) {
    this.currentPage = page
  }

 


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

