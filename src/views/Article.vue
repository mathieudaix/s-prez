<template>
  <div class="article">
    <img :src="'http://localhost:8082' + article.Image.formats.medium.url">
    <ul>
      <li v-for="category in article.categories" v-bind:key="category.id">{{ category.Name }}</li>
    </ul>
    <h1>{{ article.Title }}</h1>
    <p>{{ article.Content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      article: {}
    }
  },
  mounted() {
    fetch('http://localhost:8082/articles/' + this.$route.params.id)
      .then(res => res.json())
      .then(data => this.article = data)
      .then(data => console.log(data.Image.formats.medium.url))
  }
}
</script>

<style scoped lang="scss">
.article {
  margin: 0 5vw;
  width: 100%;
  max-width: 40rem;
  img {
    width: 100%;
    margin: 0 0 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      display: inline-block;
      text-transform: uppercase;
      font-size: 0.7rem;
      &:not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  }
  h1 {
    margin: 0.5rem 0 1rem;
    font-size: 1.5rem;
    font-weight: 400;
  }
  p {
    margin: 0;
    font-size: 0.9;
    line-height: 1.4;
  }
}
</style>
