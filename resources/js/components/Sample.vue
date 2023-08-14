<template>
  <div>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />

    <br />

    <textarea v-model="message"></textarea>

    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <br />

    <div>Selected: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>

  <div class="container">
    <buttonComponent />
    <buttonComponent />

    <blogComponent title="System Analysudsd"/>
    <blogComponent title="Blog: System Analysudsd"/>

    <blogComponent v-for="post in posts" :key="post.id"
    :title="post.title" />


  </div>
</template>

<script>

import buttonComponent from '../branches/buttonComponent.vue';
import blogComponent from '../branches/blogComponent.vue';
export default {
  components: {
    buttonComponent,
    blogComponent
  },
  data() {
    return {
      message: "we",
      checked: true,
      selected: "",

      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    };
  },
};
</script>
  

  