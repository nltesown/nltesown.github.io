<script>
	import { onMount, onDestroy } from 'svelte';
	import _ from 'lodash';
	import { fly } from 'svelte/transition';

	let cities = [
		[
			'Astrakhan',
			'Amalfi',
			'Andernos',
			'Arcachon',
			'Asmara',
			'Aubenas',
			'Aubusson',
			'Bayeux',
			'Bergame',
			'Cabourg',
			'Carthage',
			'Catane',
			'Chaville',
			'Cholet',
			'Coblence',
			'Corfou',
			'Corinthe',
			'Cythère',
			'Drancy',
			'Dunkerque',
			'Sochaux',
			'Étretat',
			'Fécamp',
			'Genève',
			'Guéret',
			'Hanovre',
			'Hanoï',
			'Honfleur',
			'Houlgate',
			'Ispahan',
			'Khartoum',
			'La Baule',
			'Lahore',
			'Lausanne',
			'Lhassa',
			'Limoges',
			'Livourne',
			'Louksor',
			'Louvain',
			'Thionville',
			'Manille',
			'Mascate',
			'Melun',
			'Messine',
			'Moulins',
			'Naxos',
			'Namur',
			'Nemours',
			'Nevers',
			'Odessa',
			'Oléron',
			'Oyonnax',
			'Phnom Penh',
			'Poitiers',
			'Quimper',
			'Roubaix',
			'Rangoun',
			'Ravenne',
			'Roissy',
			'Royan',
			'Venise', // Position 60 (important)
			'Sanaa',
			'Saïgon',
			'Saint-Maur',
			'Chiraz',
			'Tachkent',
			'Tanger',
			'Toulon',
			'Trévise',
			'Trouville',
			'Trieste',
			'Valence',
			'Vesoul',
			'Vichy',
			'Vincennes',
			'Vientiane',
			'Vitrolles',
			'Beyrouth',
			'Cachan',
			'Morlaix',
			'Cochin',
			'Bombay',
			'Mostar',
			'Riga',
			'Vilnius',
			'Épinal'
		],
		[
			'Astrakhan',
			'Angoulême',
			'Andernos',
			'Ankara',
			'Annonay',
			'Asmara',
			'Aubusson',
			'Bangalore',
			'Bassora',
			'Bénarès',
			'Carthagène',
			'Carpentras',
			'Charenton',
			'Châtellerault',
			'Châteauroux',
			'Charleroi',
			'Charleville',
			'Colombo',
			'Djibouti',
			'Dubrovnik',
			'Flamanville',
			'Fontainebleau',
			'Ispahan',
			'Katmandou',
			'Knokke-Le-Zoute',
			'Tripoli',
			'La Rochelle',
			'Le Crotoy',
			'Le Tréport',
			"L'Isle-Adam",
			'Libreville',
			'Luxembourg',
			'Macao',
			'Macassar',
			'Malmaison',
			'Mandalay',
			'Marienbad',
			'Marrakech',
			'Marsala',
			'Mombasa',
			'Montargis',
			'Montluçon',
			'Mourmelon',
			'Nagoya',
			'Nairobi',
			'Nazareth',
			'Nicosie',
			'Nuremberg',
			'Odessa',
			'Omaha',
			'Orléans',
			'Panama',
			'Port-Saïd',
			'Pristina',
			'Salonique',
			'Saint-Amand',
			'Saint-Dizier',
			'Saint-Germain',
			'Saint-Mandé',
			'Saint-Malo',
			'Saint-Nazaire',
			'Samara',
			'Calcutta', // Position 62 (important)
			'Savannah',
			'Sils Maria',
			'Singapour',
			'Syracuse',
			'Tbilissi',
			'Téhéran',
			'Tirana',
			'Varsovie',
			"Ville-d'Avray",
			'Zanzibar',
			'Saint-Étienne',
			'Trivandrum',
			'Monaco',
			'Épinal'
		]
	];

	cities = _(cities)
		.map((c) =>
			_(c)
				.map((n, i) => {
					return { n, i };
				})
				.value()
		)
		.value();

	let city = [
		_(cities[0]).find((d) => d.n === 'Venise'),
		_(cities[1]).find((d) => d.n === 'Calcutta')
	];
	let finalCity = city;
	let titre = '';
	let visa = '';
	let interval;
	let screenHeight;
	let init = false;
	let canPlay = false;

	onMount(async () => {
		titre = calcTitre(city);
		visa = calcVisa(city);
		interval = setInterval(change, 12000);
		init = true;
	});

	onDestroy(async () => {
		if (interval) clearInterval(interval);
	});

	async function change() {
		let q = _.random(15, 50);
		for (let i = 0; i < q; i++) {
			await new Promise((resolve) => {
				setTimeout(() => {
					let which = _.random(0, 1);
					city[which] = _.sample(cities[which]);
					titre = calcTitre(city);
					visa = calcVisa(city);
					resolve();
				}, 25);
			});
		}
		finalCity = city;
	}

	function calcTitre(c) {
		let venise = deaccent(c[0].n);
		let calcutta = deaccent(c[1].n);
		return narrow(
			`Son nom ${
				'AEIOU'.indexOf(venise.substring(0, 1).toUpperCase()) !== -1 ? "d'" : 'de '
			}${venise}<br>dans ${calcutta}<br>desert`
		).replace(/'/g, '’');
	}

	function calcVisa(c) {
		let num = `4${_.pad(c[0].i, 2, '0')}${_.pad(c[1].i, 2, '0')}`;
		return `Visa n°&thinsp;${num.substring(0, 2)}&thinsp;${num.substring(2)}`;
	}

	function narrow(s) {
		return s.replace(/(.)([-'])/gi, '<span style="letter-spacing: 0.05rem;">$1$2</span>');
	}

	function deaccent(s) {
		// Custom deburr (skips "ç").
		return _(s)
			.map((c) => {
				let p = _.indexOf('Ééèêïâ', c);
				return p === -1 ? c : 'Eeeeia'[p];
			})
			.value()
			.join('')
			.trim();
	}
</script>

<svelte:head>
	<title>SNDV, Générateur d'exotisme durassien</title>
</svelte:head>

<div class="video-wrapper">
	{#if init}
		<div
			in:fly={{ y: 200, duration: 2000 }}
			bind:clientHeight={screenHeight}
			class="video-container"
			on:click={change}
		>
			<video
				class="shake"
				on:canplay={() => {
					canPlay = true;
				}}
				on:seeked={change}
				autoplay
				loop
				preload="auto"
				src="../video/sndv.mp4"><track kind="captions" /></video
			>
			{#if canPlay}
				<div class="text-container">
					<div class="title-container">
						<h1 class="shake" style="font-size: {screenHeight * 0.074}px;">
							{@html titre}
						</h1>
					</div>
					<h2 class="shake" style="font-size: {screenHeight * 0.037}px;">{@html visa}</h2>
				</div>
			{/if}
		</div>
	{/if}
</div>

<div class="container">
	<p><em>SNDV, générateur d'exotisme durassien</em>, 2014-2022. Talk Gallery</p>

	<ul>
		<li>
			<strong>Is this for sale?</strong> Each instance of <em>SNDV</em>, uniquely identified by its
			"visa number", is.
		</li>
		<li><strong>How many such instances are there?</strong> 6&nbsp;621.</li>
		<li>
			<strong>Is this what people call a NFT?</strong> Not in the strict sense. (You'll be thankful for
			it.)
		</li>
		<li><strong>Would Marcel Duchamp choke on this?</strong> No.</li>
		<li>
			<strong>What do I buy if I buy one?</strong> Full ownership of one <em>SNDV</em> instance and a
			representation of it in various forms and formats, and more.
		</li>

		<li><strong>What is the price?</strong> Please get in touch.</li>
		<li>
			<strong>Is there a rebate on bulk purchase?</strong> This is not a Frequently Asked Question.
		</li>
		<!--<li>
			<strong>Is there a lot a legalese and small print attached to the transaction?</strong> Likely
			a minimal amount thereof.
		</li>-->
		<li><strong>Nudge nudge?</strong> :|</li>
	</ul>

	<!--<article>
		<p>
			<em>Son nom de Venise dans Calcutta désert</em>
			est un film réalisé par Marguerite Duras en 1976. C'est une reprise de son film
			<em>India Song</em>
			(1975), qui est adapté de sa pièce <em>Le Vice-consul</em> (1973), qui est adaptée de son
			roman
			<em>Le Vice-consul</em> (1966). À l'extrémité de cette chaîne,
			<em>Son nom de Venise dans Calcutta désert</em> est, au minimum, l'aboutissement d'un art du titre&nbsp;:
			évocateur, spectral, déboussolant.
		</p>
		<p>
			<em>SNDV</em>, créé en 2014 à l'occasion de la rétrospective
			<a href="https://www.centrepompidou.fr/fr/programme/agenda/evenement/cpb7MRK"
				>«Marguerite Duras, cinéaste»</a
			> au Centre Pompidou, est un générateur de titres, donc de films possibles. Au-delà du film particulier
			qui lui sert de matrice, il permet de tester une intuition de ce qui produit l'exotisme durassien,
			et de la délirer sans fin.
		</p>
		<p>Anne-Marie Stretter</p>
	</article>-->
</div>

<style>
	/* TODO : body bg rgb(44, 121, 117); */

	.video-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		height: 100vh;
		overflow: hidden;
		background-color: #111;
	}

	.video-container {
		position: relative;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		overflow: hidden;
	}

	.text-container {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
		font-family: sans-serif;
	}

	.title-container {
		flex: 1 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}

	.text-container h1,
	.text-container h2 {
		display: block;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
		color: #f0eeee;
		margin-left: -5000px;
		text-shadow: 2500px 0 2.25px #f0eeee;
		white-space: nowrap;
		line-height: 1.2;
	}

	.text-container h1 {
		margin-top: 4%;
		font-size: 3rem;
		letter-spacing: 0.2rem;
		z-index: 2;
	}

	.text-container h2 {
		font-size: 1.5rem;
		letter-spacing: -0.05rem;
		z-index: 3;
		flex: 0 0 10%;
	}

	p {
		margin: 1rem 0;
	}

	.container {
		width: 800px;
		max-width: calc(100vw - 12px);
		margin: 18px auto;
		color: #fff;
	}

	video {
		position: absolute;
		top: -4px;
		left: 0px;
		bottom: 0px;
		width: 100%;
		height: 105%;
		object-fit: cover;
		z-index: 1;
	}

	ul {
		margin: 18px 0;
		padding: 36px;
		background-color: #158;
		font-size: 0.875rem;
	}

	li {
		padding-bottom: 12px;
	}

	@media (orientation: landscape) {
		.video-container {
			height: 90vh;
			width: calc(90vh * 1.37);
		}
	}

	@media (orientation: portrait) {
		.video-container {
			width: 100vw;
			height: calc(100vw / 1.37);
		}
	}

	@keyframes shake {
		0% {
			transform: translate(0px, 0.5px);
		}
		10% {
			transform: translate(0px, -0.5px);
		}
		20% {
			transform: translate(0px, 0px);
		}
		30% {
			transform: translate(0px, 0.5px);
		}
		40% {
			transform: translate(0px, -0.5px);
		}
		50% {
			transform: translate(0px, 1.5px);
		}
		60% {
			transform: translate(0px, 0px);
		}
		70% {
			transform: translate(0px, 0.5px);
		}
		80% {
			transform: translate(0px, -1.5px);
		}
		90% {
			transform: translate(0px, 0.5px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}

	.shake {
		-webkit-animation-name: shake;
		animation-name: shake;
		-webkit-animation-duration: 0.8s;
		animation-duration: 0.8s;
		-webkit-transform-origin: 50% 50%;
		transform-origin: 50% 50%;
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
		-webkit-animation-timing-function: linear;
		animation-timing-function: linear;
	}

	@media (max-width: 785px) {
		.text-container h1,
		.text-container h2 {
			text-shadow: 2500px 0 1px #f0eeee;
		}
	}
</style>
