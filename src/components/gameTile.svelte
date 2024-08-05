<script>
  import PopupTile from "./popupTile.svelte";

  export let gameName;
  export let gameDescription;
  export let gameLink;
  export let primaryThumbnail;
  export let secondaryThumbnail;
  export let descriptionPicture;
  export let playButton;

  let isPrimary = true;
  function tileHover() {
    isPrimary = !isPrimary;
  }

  let showModal = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="tile" id="{gameName}"
  on:mouseenter={tileHover}
  on:mouseleave={tileHover}
  on:mouseup={() => (showModal = true)}
  on:touchstart={tileHover}
  on:touchend={tileHover}
  on:touchend={() => (showModal = true)}
  on:touchcancel={() => (showModal = false)}
>
  <img class="tile-picture {isPrimary ? 'visible' : ''}" src={primaryThumbnail} alt="{gameName}"/>
  <img class="tile-picture {!isPrimary ? 'visible' : ''}" src={secondaryThumbnail} alt="{gameName}"/>
  <p class="title">{ gameName }</p>
</div>

<PopupTile
  {gameLink}
  {playButton}
  {gameDescription}
  {descriptionPicture}
  bind:showModal
/>


<style>
  .tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 28vw;
    height: 32vw;
    margin: 1vw;
    padding-bottom: 3%;
    background-color: rgba(22, 30, 95, 0.75);
    color: rgba(51, 226, 230, 0.75);
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 1.5vw;
    filter: drop-shadow(0 0 0.1vw #010020);
    cursor: pointer;
    text-decoration: none;
    flex: none;
  }

  .tile:hover, .tile:active {
    background-color: rgba(51, 226, 230, 0.3);
    color: #010020;
    filter: drop-shadow(0 0 0.5vw #33e2e6);
  }

  .tile-picture {
    display: none;
    object-fit: cover;
    width: 95%;
    height: 80%;
    margin: 2.5%;
    margin-bottom: 0;
    border: 0.05vw solid rgba(51, 226, 230, 0.75);
    border-radius: 1vw;
  }

  .visible {
    display: block;
  }

  .title {
    font-size: 3vw;
    line-height: 3vw;
    white-space: nowrap;
    text-shadow: 0 0 1vw #010020;
  }


  @media only screen and (max-width: 600px) {
    .tile {
      width: 40vw;
      height: 48vw;
    }

    .title {
      font-size: 1em;
      line-height: 1.5em;
    }
  }
</style>