<script>
  let data = [

[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

[0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
[0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0],
[0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
[0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
[0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],

[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


  ];

  // $: setTimeout(() => {
  //   data[0][0] = 1;
  // }, 1500);
</script>

<style>
  header {
    /* height: 300px; */
    background-color: #123;
    padding: 12px 0;
  }

  .container {
    /* max-width: 1100px; */
    width: 1000px;
    margin: 0 auto;
  }

  .row {
    overflow: hidden;
    width: 100%;
    display: block;
    float: none;
    box-sizing: border-box;
    /* animation: 4s cubic-bezier(0.45, 0, 0.55, 1) 12 alternate rot; */
  }

  .row > div {
    display: block;
    float: left;
    width: 20px;
    height: 20px;
    margin: 2px;
    background-color: #369;
    box-sizing: border-box;
  }
  .row > div.hi {
    animation: 1s cubic-bezier(0.45, 0, 0.55, 1) 12 alternate bub;
  }

  .row > div.hi2 {
    animation: 3s cubic-bezier(0.45, 0, 0.55, 1) 12 forwards rot;
  }

  @keyframes rot {
    0% {
      transform: rotate(0) scale(1);
      background-color: #369;
      border-radius: 0;
    }
    50% {
      transform: rotate(90deg) scale(.35);
      background-color: #fff;
      border-radius: 20px;
    }
    100% {
      transform: rotate(180deg) scale(1);
      background-color: #369;
      border-radius: 0;
    }
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
      border-radius: 30px;
      transform: scale(0.5);
      background-color: #fff;
    }
  }
</style>

<header>
  <div class="container">
    {#each data as r, i}
      <div class="row">
        {#each r as c, j}
          <div
            class:hi2={c === 1}
            style="animation-delay: {j * 15 + i * 5}ms" />
        {/each}
      </div>
    {/each}
  </div>
</header>
