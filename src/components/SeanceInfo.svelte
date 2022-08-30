<script>
  import _ from "lodash";
  import dayjs from "dayjs";
  import artTitre from "$lib/format/artTitre";
  import { get } from "$lib/api.js";
  import ba from "$lib/format/beforeAfterStr";
  import de from "$lib/format/de";
  import IconPersons from "../components/lib/icons/IconPersons.svelte";
  export let data;

  // Formatage du libellé du/des cycle(s) de la séance.
  function formatCycles(cycles) {
    return _(cycles)
      .groupBy((c) => c[0])
      .mapValues((c) =>
        _(c)
          .map((d) => d[1])
          .filter((d) => _.indexOf(["Rencontres et conférences", "Les films"], d) < 0)
          .value()
          .join(" / ")
      )
      .toPairs()
      .map((c) => `${c[0]}${ba(" (", ")", c[1])}`)
      .value();
  }

  const fromMd = (str) => (str ? str.replace(/(_)([^_]+)(_)/gi, "<em>$2</em>") : str);
</script>

<article>
  <header>
    {_.capitalize(dayjs(data.dateHeure).format("ddd D MMM"))}<span class="bullet" />{dayjs(
      data.dateHeure
    ).format("HH[h]mm")}<span class="bullet" />Salle {data.salle}
  </header>
  <div class="scroll-container">
    <section style="height: 800px;">Coco</section>
  </div>
</article>
<!-- 
<article>
  <header>
    {_.capitalize(dayjs(data.dateHeure).format("ddd D MMM"))}<span class="bullet" />{dayjs(
      data.dateHeure
    ).format("HH[h]mm")}<span class="bullet" />Salle {data.salle}
  </header>
  <section>
    <ul class="cycles">
      {#each formatCycles(data.cycle) as cycle}
        <li>
          {cycle}
        </li>
      {/each}
    </ul>
  </section> -->

<!--
  <header>
    <div class="left">{_.capitalize(dayjs(data.dateHeure).format("ddd D MMM"))}</div>
    <div class="center">{dayjs(data.dateHeure).format("HH[h]mm")}</div>
    <div class="right">Salle {data.salle}</div>
  </header>
  <section>
    <ul class="cycles">
      {#each formatCycles(data.cycle) as cycle}
        <li>
          {cycle}
        </li>
      {/each}
    </ul>
    <ul class="items">
      {#each data.items as item, i}
        <li>
          <div class="item-titre medium" class:conf={item.idConf}>
            {#if item.idConf}<IconPersons /> {/if}{artTitre(
              item.art,
              item.titre
            )}{#if item.sousTitre}. {item.sousTitre}{/if}
          </div>
          {#if item.idFilm}
            {#await get(`https://api.cnmtq.fr/film/${item.idFilm}`) then film}
              {#if film.titrevo || film.titrenx}
                <div class="item-titre sub">
                  {film.titrenx || artTitre(film.artvo, film.titrevo)}
                </div>
              {/if}

              {@html ba(
                `<div class="realisateurs">`,
                "</div>",
                `${de(film.realisateurs)}${film.realisateurs}`
              )}
              <div>
                {ba("", " / ", film.pays)}
                {ba("", " / ", film.annee)}
                {ba("", " min / ", item.duree)}
                {ba("", " / ", item.format)}
                {ba("", "", item.version)}
              </div>
              {@html ba("<div>Avec ", ".</div>", film.generique)}

              {@html ba('<p style="margin: 0.5rem 0;">', "</p>", fromMd(film.adaptation))}

              {@html ba(`<p style="margin: 0.5rem 0;">`, "</p>", fromMd(film.synopsis))}
              {#if i < data.items.length - 1}<hr class="short" />{/if}
            {/await}
          {/if}
        </li>
      {/each}
      {#if data.mention}<div class="mention">{data.mention}</div>{/if}
    </ul>
  </section>
  <footer />
-->

<!-- </article> -->
<style>
  article {
    flex: 0 0 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    color: #047;
    overflow: hidden;
  }

  header {
    position: sticky;
    top: 0;
    /* display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center; */
    text-align: center;
    background-color: #eee;
    padding: 8px;
    font-weight: 600;
    overflow: hidden;
    flex: 0 0 auto;
  }

  .scroll-container {
    overflow: hidden;
    flex: 1 1 auto;
  }

  section {
    padding: 24px;
    background-color: #fff;
    min-height: 33.33vh;
    height: 150vh;
  }

  ul.cycles li {
    font-weight: 600;
    font-size: 1rem;
  }

  .bullet:after {
    display: inline-block;
    padding: 0 4px;
    content: "•";
    color: #ccc;
  }

  /* footer {
    position: sticky;
    bottom: 0;
    background-color: #eee;
    height: 36px;
  } */

  /*

  header {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    background-color: #eee;
    padding: 8px;
    font-weight: 600;
  }

  .left,
  .center,
  .right {
    display: block;
    padding: 0 0.2rem;
  }

  .left {
    text-align: right;
    flex: 1 1 45%;
  }
  .center {
    text-align: center;
    flex: 1 1 10%;
  }
  .right {
    text-align: left;
    flex: 1 1 45%;
  }

  section {
    font-size: 0.938rem;
    padding: 12px 24px 12px 12px;
    line-height: 1.3;
  }

  ul.cycles li {
    font-weight: 600;
    font-size: 1rem;
  }

  ul.items {
    margin: 12px 0 0 0;
  }

  .item-titre {
    font-size: 1.125rem;
    font-weight: 400;
  }

  .item-titre.medium {
    font-weight: 500;
  }

  .item-titre.sub {
    font-size: 1.063rem;
  }

  .conf,
  .mention {
    color: #820;
  }

  .conf {
    font-weight: 600;
  }

  hr.short {
    width: 80px;
    border: none;
    border-bottom: solid 1px #11558840;
    margin: 18px 0;
    padding: 0;
  }
  */
</style>
