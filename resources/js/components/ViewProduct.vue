<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <router-link :to="{ name: 'home' }" class="btn btn-success"
            >Go Back</router-link
          >

          <div v-if="loading">Loading...</div>
          <div v-else>
            <ul class="list-group">
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Product No
                <span class="badge badge-primary badge-pill">{{
                  product.id
                }}</span>
              </li>

              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Product Name
                <span class="badge badge-primary badge-pill">{{
                  product.name
                }}</span>
              </li>

              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Description
                <span class="badge badge-primary badge-pill">{{
                  product.detail
                }}</span>
              </li>

              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Product Status
                <span class="badge badge-primary badge-pill">{{
                  product.status
                }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      product: {},
    };
  },

  async mounted() {
    try {
      await this.axios
        .get(`http://localhost:8000/api/products/${this.$route.params.id}`)
        .then((res) => {
          this.product = res.data;
        });
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
