<template>
  <section class="not-found">
    <div>
      <h1>No Definitions Found</h1>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking for. You can try the
        search again at later time or head to the web instead.
      </p>
    </div>
  </section>
</template>
<style scoped>
.not-found {
  font-size: var(--app-font);
  display: flex;
  justify-items: center;
  text-align: center;

  div {
    text-align: center;
  }
  div h1 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 1.5rem;
  }
  div p {
    font-size: 18px;
  }
}
</style>
