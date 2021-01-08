<script>
  let data = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  ];

  // $: setTimeout(() => {
  //   data[0][0] = 1;
  // }, 1500);
</script>

<style>
  header {
    /* height: 300px; */
    background-color: #036;
    padding: 2px 0;
  }

  .container {
    /* max-width: 1100px; */
    width: 580px;
    margin: 0 auto;
  }

  .row {
    overflow: hidden;
    width: 100%;
    display: block;
    float: none;
    box-sizing: border-box;
  }

  .row > div {
    display: block;
    float: left;
    width: 40px;
    height: 40px;
    margin: 2px;
    background-color: #369;
    box-sizing: border-box;
  }
  .row > div.hi {
    animation: 1s cubic-bezier(0.45, 0, 0.55, 1) 12 alternate bub;
  }

  @keyframes bub {
    0% {
      border-radius: 0;
      transform: scale(1);
      background-color: #369;
    }
    50% {
      border-radius: 0;
      transform: scale(1);
      background-color: #369;
    }
    100% {
      border-radius: 40px;
      transform: scale(0.5);
      background-color: rgb(188, 224, 255);
    }
  }
</style>

<header>
  <div class="container">
    {#each data as r}
      <div class="row">
        {#each r as c, i}
          <div class:hi={!!c} style="animation-delay: {i * 25}ms" />
        {/each}
      </div>
    {/each}
  </div>
</header>
