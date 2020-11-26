<template>
  <div class="articles">
    <div v-for="article in articles" v-bind:key="article.id">
      <ul>
        <li v-for="category in article.categories" v-bind:key="category.id">{{ category.Name }}</li>
      </ul>
      <h2>{{ article.Title }}</h2>
      <p>{{ article.Description }}</p>
      <router-link :to="{ path: `/articles/${article.id}`, params: { id: article.id }}">
        <button>Read more</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  data() {
    return {
      articles: {}
    }
  },
  mounted() {
    fetch('http://localhost:8082/articles')
      .then(res => res.json())
      .then(data => this.articles = data)
  }
}
</script>

<style scoped lang="scss">
.articles {
  margin: 0 5vw;
  width: 100%;
  max-width: 40rem;
  > div {
    &:not(:last-of-type) {
      margin-bottom: 4rem;
    }
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
  h2 {
    margin: 0.5rem 0 1rem;
    font-size: 1.5rem;
    font-weight: 400;
  }
  p {
    margin: 0 0 1rem;
    font-size: 0.9;
    line-height: 1.4;
  }
  button {
    cursor: pointer;
  }
}
</style>
