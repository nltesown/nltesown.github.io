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
			'Carlsbad',
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
			'Venise', // Position 60 (important)
			'Roissy',
			'Royan',
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
			'Bombay'
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
			'Calcutta', // Position
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
			'Trivandrum'
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
		interval = setInterval(change, 5000);
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
	<article style="height:100vh; color:#fff;">
		<p>
			<!--
			<em
				>Son nom de
				{'AEIOU'.indexOf(finalCity[0].n.substring(0, 1).toUpperCase()) !== -1
					? "d'"
					: 'de '}{finalCity[0].n} dans {finalCity[1].n}
				désert</em
			>
-->
			<em>Son nom de Venise dans Calcutta désert</em>
			est un film réalisé par Marguerite Duras en 1976. C'est une reprise de son film
			<em>India Song</em>
			(1975), qui est adapté de sa pièce <em>Le Vice-consul</em> (1973), qui est adaptée de son
			roman
			<em>Le Vice-consul</em> (1966). Au bout de cette chaîne, le titre spectral de
			<em>Son nom de Venise...</em> est à lui seul un aboutissement.
		</p>
		<p>
			<em>SNDV</em>, créé en 2014 à l'occasion de la rétrospective
			<a href="https://www.centrepompidou.fr/fr/programme/agenda/evenement/cpb7MRK"
				>«Marguerite Duras, cinéaste»</a
			> au Centre Pompidou, est un générateur de titres, donc de films possibles, servant peut-être à
			tester une intuition de ce qui, au-delà du film particulier qui lui sert de matrice, produit l'exotisme
			durassien.
		</p>
	</article>
</div>

<style>
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

	article {
		padding: 24px;
		/* min-height: 200vh; */
	}

	p {
		margin: 1rem 0;
		line-height: 1.5;
		font-size: 1.125rem;
	}

	.small {
		font-size: 1rem;
	}

	.container {
		width: 800px;
		max-width: calc(100vw - 12px);
		margin: 0 auto;
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
