<template>
  <nav>
    <ul>
      <li>
          <router-link to="/">Home</router-link>
      </li>
      <li>
          <router-link to="/articles">Articles</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss">
nav {
  margin: 4rem 5vw;
  width: 100%;
  max-width: 40rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    li {
      display: inline-block;
      font-size: 0.9rem;
      &:not(:last-of-type) {
        margin-right: 1rem;
      }
      a {
        text-decoration: none;
        color: blue;
      }
    }
  }
}
</style>
