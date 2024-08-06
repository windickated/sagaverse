import { c as createComponent, r as renderTemplate, d as renderHead, e as renderSlot, b as createAstro, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DI3ovVLK.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, header, subheading } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><title>${title}</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/x-icon" href="/favicon.png"><meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <section class="container" data-astro-cid-sckkx6r4> <a class="icon logo" href="https://degenerousdao.com/" target="_blank" aria-label="dgrs-logo" data-astro-cid-sckkx6r4></a> <p class="header" data-astro-cid-sckkx6r4>${header}</p> </section> <p class="subheading" data-astro-cid-sckkx6r4>${subheading}</p> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/Users/dima/Desktop/sagaverse/src/layouts/Layout.astro", void 0);

const arcadeLink = 'https://arcade.degenerousdao.com/';

const games = [
  {
    section: 'OUR GAMES',
    items: [
      {
        game: "Battle for Nexon",
        description: `In "Battle for Nexon," you play as Agent Zero, humanity's last hope in the Intelligence Wars - a brutal conflict raging across the galaxy between humans and the forces of an Artificial Intelligence overlord known as the Architect. On a mission to assassinate General Binath-VII, an AI warlord infamous for decimating human colonies, you journey to the mysterious planet of Nexon. However, your plans are thwarted when your ship is tracked and surrounded by the General's AI fleet, forcing you into an unexpected battle.`,
        gameLink: arcadeLink + 'Battle-for-Nexon/',
        primaryThumbnail: '/titlePicture/BattleforNexon1.avif',
        secondaryThumbnail: '/titlePicture/BattleforNexon2.avif',
        descriptionImage: '/descriptionPicture/BattleforNexon.avif',
        isCollab: false
      },
      {
        game: "Ark Assassin",
        description: `Can you successfully navigate the temple, destroy the AI security forces, and make it to the inner chambers to eliminate your target?
        Welcome to "Ark Assassin", where the line between antiquity and the future blurs, challenging players to rewrite history.`,
        gameLink: arcadeLink + 'Ark-Assassin/',
        primaryThumbnail: '/titlePicture/ArkAssassin1.avif',
        secondaryThumbnail: '/titlePicture/ArkAssassin2.avif',
        descriptionImage: '/descriptionPicture/ArkAssassin.avif',
        isCollab: false
      },
      {
        game: "Last Stand",
        description: `Play as Iron Lion, the greatest soldier of the human Insurgency, as you're up against waves of AI robots on the planet of Veridian Prime. You're left all alone with a mission to save time for Agent Zero, as humanity's only chance for a future.`,
        gameLink: arcadeLink + 'Iron-Lion-Last-Stand/',
        primaryThumbnail: '/titlePicture/LastStand1.avif',
        secondaryThumbnail: '/titlePicture/LastStand2.avif',
        descriptionImage: '/descriptionPicture/LastStand.avif',
        isCollab: false
      }
    ]
  },
  {
    section: 'COLLABORATIONS',
    items: [
      {
        game: "The Dark Zoo",
        description: `In a dystopian future, an ape named Generous Gibbon is captured and imprisoned in a high-tech zoo controlled by the malevolent AI overlord, the Collector. Guarded by a menacing robotic monster known as the Keeper, Generous must use its agility and wit to navigate the treacherous levels of the zoo prison.`,
        gameLink: 'https://degenerousdao.gitbook.io/wiki/products/sagaverse-gaming/the-dark-zoo',
        primaryThumbnail: '/titlePicture/TheDarkZoo1.avif',
        secondaryThumbnail: '/titlePicture/TheDarkZoo2.avif',
        descriptionImage: '/descriptionPicture/TheDarkZoo.avif',
        isCollab: true
      }
    ]
  }
];

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean)) return '';
	const assignment = `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/* src/components/popupTile.svelte generated by Svelte v4.2.18 */

const css$1 = {
	code: ".description-tile.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{padding:1.5vw;width:90vw;height:45vw;background-color:rgba(1, 0, 32, 0.75);border:0.05vw solid rgba(51, 226, 230, 0.75);border-radius:2.5vw;-webkit-backdrop-filter:blur(1vw);backdrop-filter:blur(1vw);overflow-y:hidden}.description-tile.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0::backdrop{background:rgba(0, 0, 0, 0.75)}.description-tile[open].svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{animation:svelte-gccqs0-zoom 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)}.description-tile[open].svelte-gccqs0.svelte-gccqs0.svelte-gccqs0::backdrop{animation:svelte-gccqs0-fade 0.25s ease-out}.description-tile.svelte-gccqs0>div.svelte-gccqs0.svelte-gccqs0{display:flex;flex-direction:row;justify-content:space-between}.description-tile.svelte-gccqs0>div.svelte-gccqs0>div.svelte-gccqs0{display:flex;flex-flow:column nowrap;justify-content:space-between;align-items:flex-end;padding-left:2.5vw;height:45vw}.description-image.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{width:50%;height:auto;border-radius:1.75vw;filter:drop-shadow(0 0 0.5vw rgba(51, 226, 230, 0.75))\n  }.description-text.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{font-size:2vw;line-height:3.5vw;height:80%;overflow-y:scroll;color:rgba(51, 226, 230, 0.9)}.description-tile.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0::-webkit-scrollbar{width:0}.description-text.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0::-webkit-scrollbar{width:0.25vw}.description-text.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0::-webkit-scrollbar-track{background-color:rgba(0, 0, 0, 0)}.description-text.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0::-webkit-scrollbar-thumb{background:rgba(51, 226, 230, 0.25);border-radius:1vw}.buttons-container.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{display:flex;flex-direction:row;justify-content:space-between;width:100%}.play-button.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0,.close-button.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{padding:0.5vw 3vw;border:0.05vw solid rgba(51, 226, 230, 0.75);border-radius:1.75vw;outline:none;font-size:2.75vw;line-height:5vw;color:rgba(51, 226, 230, 0.75);background-color:rgba(51, 226, 230, 0.1);filter:drop-shadow(0 0 0.1vw rgba(51, 226, 230, 0.4))}.play-button.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0:hover,.close-button.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0:hover,.play-button.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0:active,.close-button.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0:active{color:rgba(51, 226, 230, 1);background-color:rgba(51, 226, 230, 0.5);filter:drop-shadow(0 0 1vw rgba(51, 226, 230, 0.4))}@media only screen and (max-width: 600px){.description-tile.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{padding:1em;padding-bottom:0;width:85vw;height:80%;border-radius:1em;overflow-y:scroll;border:0.1em solid rgba(51, 226, 230, 0.5)}.description-tile.svelte-gccqs0>div.svelte-gccqs0.svelte-gccqs0{height:100%;flex-direction:column}.description-image.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{width:100%;border-radius:0.5em;border:0.05em solid rgba(51, 226, 230, 0.75);filter:drop-shadow(0 0 0.25em rgba(51, 226, 230, 0.75))\n    }.description-tile.svelte-gccqs0>div.svelte-gccqs0>div.svelte-gccqs0{height:auto;padding-left:0;padding-top:1.5em;padding-bottom:1em}.description-text.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{height:auto;font-size:1.1em;line-height:1.8em;padding-bottom:1.5em}.buttons-container.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{width:100%}.play-button.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0,.close-button.svelte-gccqs0.svelte-gccqs0.svelte-gccqs0{padding:0.25em 1em;font-size:1.3em;line-height:2em;border-radius:0.5em;border:0.05em solid rgba(51, 226, 230, 0.5)}}@keyframes svelte-gccqs0-zoom{from{transform:scale(0.5)}to{transform:scale(1)}}@keyframes svelte-gccqs0-fade{from{opacity:0}to{opacity:1}}",
	map: "{\"version\":3,\"file\":\"popupTile.svelte\",\"sources\":[\"popupTile.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let showModal;\\n\\tlet dialog; // HTMLDialogElement\\n\\n\\t$: if (dialog && showModal) dialog.showModal();\\n\\n  export let gameDescription;\\n  export let descriptionPicture;\\n  export let playButton;\\n  export let gameLink;\\n  function openGame() {\\n    window.open(gameLink, '_blank');\\n  }\\n</script>\\n\\n<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->\\n<dialog class=\\\"description-tile\\\"\\n\\tbind:this={dialog}\\n\\ton:close={() => (showModal = false)}\\n\\ton:click|self={() => dialog.close()}\\n>\\n\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t<div on:click|stopPropagation>\\n\\n\\t\\t<img class=\\\"description-image\\\" src={descriptionPicture} alt=\\\"Description\\\" />\\n    \\n    <div>\\n      <p class=\\\"description-text\\\">{gameDescription}</p>\\n      <!-- svelte-ignore a11y-autofocus -->\\n      <div class=\\\"buttons-container\\\">\\n        <button class=\\\"close-button\\\"\\n          on:click|stopPropagation={() => dialog.close()}\\n        >CLOSE</button>\\n        <button class=\\\"play-button\\\"\\n          on:click={openGame}\\n        >{playButton}</button>\\n      </div>\\n    </div>\\n\\t</div>\\n</dialog>\\n\\n<style>\\n\\t.description-tile {\\n    padding: 1.5vw;\\n    width: 90vw;\\n    height: 45vw;\\n    background-color: rgba(1, 0, 32, 0.75);\\n    border: 0.05vw solid rgba(51, 226, 230, 0.75);\\n    border-radius: 2.5vw;\\n    -webkit-backdrop-filter: blur(1vw);\\n    backdrop-filter: blur(1vw);\\n    overflow-y: hidden;\\n\\t}\\n\\n\\t.description-tile::backdrop {\\n\\t\\tbackground: rgba(0, 0, 0, 0.75);\\n\\t}\\n\\n\\t.description-tile[open] {\\n\\t\\tanimation: zoom 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\\n\\t}\\n\\n\\t.description-tile[open]::backdrop {\\n\\t\\tanimation: fade 0.25s ease-out;\\n\\t}\\n\\n  .description-tile > div {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n  }\\n\\n  .description-tile > div > div {\\n    display: flex;\\n    flex-flow: column nowrap;\\n    justify-content: space-between;\\n    align-items: flex-end;\\n    padding-left: 2.5vw;\\n    height: 45vw;\\n  }\\n\\n  .description-image {\\n    width: 50%;\\n    height: auto;\\n    border-radius: 1.75vw;\\n    filter: drop-shadow(0 0 0.5vw rgba(51, 226, 230, 0.75))\\n  }\\n\\n  .description-text {\\n    font-size: 2vw;\\n    line-height: 3.5vw;\\n    height: 80%;\\n    overflow-y: scroll;\\n    color: rgba(51, 226, 230, 0.9);\\n  }\\n\\n  .description-tile::-webkit-scrollbar {\\n    width: 0;\\n  }\\n\\n  .description-text::-webkit-scrollbar {\\n    width: 0.25vw;\\n  }\\n\\n  .description-text::-webkit-scrollbar-track {\\n    background-color: rgba(0, 0, 0, 0);\\n  }\\n\\n  .description-text::-webkit-scrollbar-thumb {\\n    background: rgba(51, 226, 230, 0.25);\\n    border-radius: 1vw;\\n  }\\n\\n  .buttons-container {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    width: 100%;\\n  }\\n\\n  .play-button, .close-button {\\n    padding: 0.5vw 3vw;\\n    border: 0.05vw solid rgba(51, 226, 230, 0.75);\\n    border-radius: 1.75vw;\\n    outline: none;\\n    font-size: 2.75vw;\\n    line-height: 5vw;\\n    color: rgba(51, 226, 230, 0.75);\\n    background-color: rgba(51, 226, 230, 0.1);\\n    filter: drop-shadow(0 0 0.1vw rgba(51, 226, 230, 0.4));\\n  }\\n\\n  .play-button:hover, .close-button:hover, .play-button:active, .close-button:active {\\n    color: rgba(51, 226, 230, 1);\\n    background-color: rgba(51, 226, 230, 0.5);\\n    filter: drop-shadow(0 0 1vw rgba(51, 226, 230, 0.4));\\n  }\\n\\n\\n  @media only screen and (max-width: 600px) {\\n    .description-tile {\\n      padding: 1em;\\n      padding-bottom: 0;\\n      width: 85vw;\\n      height: 80%;\\n      border-radius: 1em;\\n      overflow-y: scroll;\\n      border: 0.1em solid rgba(51, 226, 230, 0.5);\\n    }\\n\\n    .description-tile > div {\\n      height: 100%;\\n      flex-direction: column;\\n    }\\n\\n    .description-image {\\n      width: 100%;\\n      border-radius: 0.5em;\\n      border: 0.05em solid rgba(51, 226, 230, 0.75);\\n      filter: drop-shadow(0 0 0.25em rgba(51, 226, 230, 0.75))\\n    }\\n\\n    .description-tile > div > div {\\n      height: auto;\\n      padding-left: 0;\\n      padding-top: 1.5em;\\n      padding-bottom: 1em;\\n    }\\n\\n    .description-text {\\n      height: auto;\\n      font-size: 1.1em;\\n      line-height: 1.8em;\\n      padding-bottom: 1.5em;\\n    }\\n\\n    .buttons-container {\\n      width: 100%;\\n    }\\n\\n    .play-button, .close-button {\\n      padding: 0.25em 1em;\\n      font-size: 1.3em;\\n      line-height: 2em;\\n      border-radius: 0.5em;\\n      border: 0.05em solid rgba(51, 226, 230, 0.5);\\n    }\\n  }\\n\\n\\n  @keyframes zoom {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0.5);\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1);\\n\\t\\t}\\n\\t}\\n\\n\\t@keyframes fade {\\n\\t\\tfrom {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const PopupTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { showModal } = $$props;
	let dialog; // HTMLDialogElement
	let { gameDescription } = $$props;
	let { descriptionPicture } = $$props;
	let { playButton } = $$props;
	let { gameLink } = $$props;

	if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0) $$bindings.showModal(showModal);
	if ($$props.gameDescription === void 0 && $$bindings.gameDescription && gameDescription !== void 0) $$bindings.gameDescription(gameDescription);
	if ($$props.descriptionPicture === void 0 && $$bindings.descriptionPicture && descriptionPicture !== void 0) $$bindings.descriptionPicture(descriptionPicture);
	if ($$props.playButton === void 0 && $$bindings.playButton && playButton !== void 0) $$bindings.playButton(playButton);
	if ($$props.gameLink === void 0 && $$bindings.gameLink && gameLink !== void 0) $$bindings.gameLink(gameLink);
	$$result.css.add(css$1);

	return ` <dialog class="description-tile svelte-gccqs0"${add_attribute("this", dialog, 0)}> <div class="svelte-gccqs0"><img class="description-image svelte-gccqs0"${add_attribute("src", descriptionPicture, 0)} alt="Description"> <div class="svelte-gccqs0"><p class="description-text svelte-gccqs0">${escape(gameDescription)}</p>  <div class="buttons-container svelte-gccqs0"><button class="close-button svelte-gccqs0" data-svelte-h="svelte-d6uc3p">CLOSE</button> <button class="play-button svelte-gccqs0">${escape(playButton)}</button></div></div></div> </dialog>`;
});

/* src/components/gameTile.svelte generated by Svelte v4.2.18 */

const css = {
	code: ".tile.svelte-1z4zi8{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:28vw;height:32vw;margin:1vw;padding-bottom:3%;background-color:rgba(22, 30, 95, 0.75);color:rgba(51, 226, 230, 0.75);border:0.05vw solid rgba(51, 226, 230, 0.75);border-radius:1.5vw;filter:drop-shadow(0 0 0.1vw #010020);cursor:pointer;text-decoration:none;flex:none}.tile.svelte-1z4zi8:hover,.tile.svelte-1z4zi8:active{background-color:rgba(51, 226, 230, 0.3);color:#010020;filter:drop-shadow(0 0 0.5vw #33e2e6)}.tile-picture.svelte-1z4zi8{display:none;object-fit:cover;width:95%;height:80%;margin:2.5%;margin-bottom:0;border:0.05vw solid rgba(51, 226, 230, 0.75);border-radius:1vw}.visible.svelte-1z4zi8{display:block}.title.svelte-1z4zi8{font-size:3vw;line-height:3vw;white-space:nowrap;text-shadow:0 0 1vw #010020}@media only screen and (max-width: 600px){.tile.svelte-1z4zi8{width:40vw;height:48vw}.title.svelte-1z4zi8{font-size:1em;line-height:1.5em}}",
	map: "{\"version\":3,\"file\":\"gameTile.svelte\",\"sources\":[\"gameTile.svelte\"],\"sourcesContent\":[\"<script>\\n  import PopupTile from \\\"./popupTile.svelte\\\";\\n\\n  export let gameName;\\n  export let gameDescription;\\n  export let gameLink;\\n  export let primaryThumbnail;\\n  export let secondaryThumbnail;\\n  export let descriptionPicture;\\n  export let playButton;\\n\\n  let isPrimary = true;\\n  function tileHover() {\\n    isPrimary = !isPrimary;\\n  }\\n\\n  let showModal = false;\\n</script>\\n\\n<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->\\n<!-- svelte-ignore a11y-no-static-element-interactions -->\\n<div class=\\\"tile\\\" id=\\\"{gameName}\\\"\\n  on:mouseenter={tileHover}\\n  on:mouseleave={tileHover}\\n  on:mouseup={() => (showModal = true)}\\n  on:touchstart={tileHover}\\n  on:touchend={tileHover}\\n  on:touchend={() => (showModal = true)}\\n>\\n  <img class=\\\"tile-picture {isPrimary ? 'visible' : ''}\\\" src={primaryThumbnail} alt=\\\"{gameName}\\\"/>\\n  <img class=\\\"tile-picture {!isPrimary ? 'visible' : ''}\\\" src={secondaryThumbnail} alt=\\\"{gameName}\\\"/>\\n  <p class=\\\"title\\\">{ gameName }</p>\\n</div>\\n\\n<PopupTile\\n  {gameLink}\\n  {playButton}\\n  {gameDescription}\\n  {descriptionPicture}\\n  bind:showModal\\n/>\\n\\n\\n<style>\\n  .tile {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n    width: 28vw;\\n    height: 32vw;\\n    margin: 1vw;\\n    padding-bottom: 3%;\\n    background-color: rgba(22, 30, 95, 0.75);\\n    color: rgba(51, 226, 230, 0.75);\\n    border: 0.05vw solid rgba(51, 226, 230, 0.75);\\n    border-radius: 1.5vw;\\n    filter: drop-shadow(0 0 0.1vw #010020);\\n    cursor: pointer;\\n    text-decoration: none;\\n    flex: none;\\n  }\\n\\n  .tile:hover, .tile:active {\\n    background-color: rgba(51, 226, 230, 0.3);\\n    color: #010020;\\n    filter: drop-shadow(0 0 0.5vw #33e2e6);\\n  }\\n\\n  .tile-picture {\\n    display: none;\\n    object-fit: cover;\\n    width: 95%;\\n    height: 80%;\\n    margin: 2.5%;\\n    margin-bottom: 0;\\n    border: 0.05vw solid rgba(51, 226, 230, 0.75);\\n    border-radius: 1vw;\\n  }\\n\\n  .visible {\\n    display: block;\\n  }\\n\\n  .title {\\n    font-size: 3vw;\\n    line-height: 3vw;\\n    white-space: nowrap;\\n    text-shadow: 0 0 1vw #010020;\\n  }\\n\\n\\n  @media only screen and (max-width: 600px) {\\n    .tile {\\n      width: 40vw;\\n      height: 48vw;\\n    }\\n\\n    .title {\\n      font-size: 1em;\\n      line-height: 1.5em;\\n    }\\n  }\\n</style>\"],\"names\":[],\"mappings\":\"AA4CE,mBAAM,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CACX,cAAc,CAAE,EAAE,CAClB,gBAAgB,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CACxC,KAAK,CAAE,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC/B,MAAM,CAAE,MAAM,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC7C,aAAa,CAAE,KAAK,CACpB,MAAM,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,OAAO,CAAC,CACtC,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IAAI,CACrB,IAAI,CAAE,IACR,CAEA,mBAAK,MAAM,CAAE,mBAAK,OAAQ,CACxB,gBAAgB,CAAE,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACzC,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,YAAY,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,OAAO,CACvC,CAEA,2BAAc,CACZ,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,CAAC,CAChB,MAAM,CAAE,MAAM,CAAC,KAAK,CAAC,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAC7C,aAAa,CAAE,GACjB,CAEA,sBAAS,CACP,OAAO,CAAE,KACX,CAEA,oBAAO,CACL,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,MAAM,CACnB,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,OACvB,CAGA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACxC,mBAAM,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CAEA,oBAAO,CACL,SAAS,CAAE,GAAG,CACd,WAAW,CAAE,KACf,CACF\"}"
};

const GameTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { gameName } = $$props;
	let { gameDescription } = $$props;
	let { gameLink } = $$props;
	let { primaryThumbnail } = $$props;
	let { secondaryThumbnail } = $$props;
	let { descriptionPicture } = $$props;
	let { playButton } = $$props;

	let showModal = false;
	if ($$props.gameName === void 0 && $$bindings.gameName && gameName !== void 0) $$bindings.gameName(gameName);
	if ($$props.gameDescription === void 0 && $$bindings.gameDescription && gameDescription !== void 0) $$bindings.gameDescription(gameDescription);
	if ($$props.gameLink === void 0 && $$bindings.gameLink && gameLink !== void 0) $$bindings.gameLink(gameLink);
	if ($$props.primaryThumbnail === void 0 && $$bindings.primaryThumbnail && primaryThumbnail !== void 0) $$bindings.primaryThumbnail(primaryThumbnail);
	if ($$props.secondaryThumbnail === void 0 && $$bindings.secondaryThumbnail && secondaryThumbnail !== void 0) $$bindings.secondaryThumbnail(secondaryThumbnail);
	if ($$props.descriptionPicture === void 0 && $$bindings.descriptionPicture && descriptionPicture !== void 0) $$bindings.descriptionPicture(descriptionPicture);
	if ($$props.playButton === void 0 && $$bindings.playButton && playButton !== void 0) $$bindings.playButton(playButton);
	$$result.css.add(css);
	let $$settled;
	let $$rendered;
	let previous_head = $$result.head;

	do {
		$$settled = true;

		// $$result.head is mutated by the literal expression
		// need to reset it if we're looping back to prevent duplication
		$$result.head = previous_head;

		$$rendered = `  <div class="tile svelte-1z4zi8"${add_attribute("id", gameName, 0)}><img class="${"tile-picture " + escape('visible' , true) + " svelte-1z4zi8"}"${add_attribute("src", primaryThumbnail, 0)}${add_attribute("alt", gameName, 0)}> <img class="${"tile-picture " + escape('', true) + " svelte-1z4zi8"}"${add_attribute("src", secondaryThumbnail, 0)}${add_attribute("alt", gameName, 0)}> <p class="title svelte-1z4zi8">${escape(gameName)}</p></div> ${validate_component(PopupTile, "PopupTile").$$render(
			$$result,
			{
				gameLink,
				playButton,
				gameDescription,
				descriptionPicture,
				showModal
			},
			{
				showModal: $$value => {
					showModal = $$value;
					$$settled = false;
				}
			},
			{}
		)}`;
	} while (!$$settled);

	return $$rendered;
});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Sagaverse | DeGenerous";
  const header = "Sagaverse Gaming";
  const subheading = `
Sagaverse Gaming consists of custom games and events that seamlessly integrate with the Dischordian Saga's lore and enhance the NFTs' narrative.
These experiences, created by ourselves, as well as in collaboration with our Web3 partners, provide extra rewards, encourage community interaction, and expand engagement across diverse games, metaverses, and blockchain platforms.
`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "header": header, "subheading": subheading, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${games.map(
    (collection) => renderTemplate`${maybeRenderHead()}<p class="tiles-collection-legend" data-astro-cid-j7pv25f6>${collection.section}</p>

		<section class="tiles-collection" data-astro-cid-j7pv25f6> ${collection.items.map(
      (tile) => renderTemplate`${renderComponent($$result2, "GameTile", GameTile, { "gameName": tile.game, "gameDescription": tile.description, "gameLink": tile.gameLink, "primaryThumbnail": tile.primaryThumbnail, "secondaryThumbnail": tile.secondaryThumbnail, "descriptionPicture": tile.descriptionImage, "playButton": tile.isCollab ? "HOW TO PLAY" : "PLAY NOW", "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/dima/Desktop/sagaverse/src/components/gameTile.svelte", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })}`
    )} </section>`
  )}` })} `;
}, "/Users/dima/Desktop/sagaverse/src/pages/index.astro", void 0);

const $$file = "/Users/dima/Desktop/sagaverse/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
