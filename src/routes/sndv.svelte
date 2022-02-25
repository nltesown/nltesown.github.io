<script>
	import { onMount, onDestroy } from 'svelte';
	import _ from 'lodash';

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
			'Cythere',
			'Drancy',
			'Dunkerque',
			'Sochaux',
			'Etretat',
			'Fecamp',
			'Geneve',
			'Gueret',
			'Hanovre',
			'Hanoi',
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
			'Oleron',
			'Oyonnax',
			'Phnom Penh',
			'Paris',
			'Poitiers',
			'Quimper',
			'Roubaix',
			'Rangoun',
			'Ravenne',
			'Venise', // Position 60 (important)
			'Roissy',
			'Royan',
			'Sanaa',
			'Saigon',
			'Saint-Maur',
			'Chiraz',
			'Tachkent',
			'Tanger',
			'Toulon',
			'Trevise',
			'Trouville',
			'Trieste',
			'Valence',
			'Vesoul',
			'Vichy',
			'Vincennes',
			'Vientiane',
			'Vitrolles'
		],
		[
			'Astrakhan',
			'Angouleme',
			'Andernos',
			'Ankara',
			'Annonay',
			'Asmara',
			'Aubusson',
			'Bangalore',
			'Bassora',
			'Benares',
			'Beyrouth',
			'Carthagene',
			'Carpentras',
			'Charenton',
			'Chatellerault',
			'Chateauroux',
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
			'Le Treport',
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
			'Orleans',
			'Panama',
			'Port-Said',
			'Pristina',
			'Salonique',
			'Saint-Amand',
			'Saint-Dizier',
			'Saint-Germain',
			'Saint-Mande',
			'Saint-Malo',
			'Saint-Nazaire',
			'Calcutta',
			'Samara',
			'Savannah',
			'Sils Maria',
			'Singapour',
			'Syracuse',
			'Tbilissi',
			'Teheran',
			'Tirana',
			'Varsovie',
			"Ville-d'Avray",
			'Zanzibar'
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
	let titre = '';
	let visa = '';
	let interval;

	onMount(async () => {
		titre = calcTitre(city);
		visa = calcVisa(city);
		interval = setInterval(change, 5000);
	});

	onDestroy(async () => {
		if (interval) clearInterval(interval);
	});

	async function change() {
		for (let i = 0; i < 14; i++) {
			await new Promise((resolve) => {
				setTimeout(() => {
					let which = _.sample([0, 1]);
					city[which] = _.sample(cities[which]);
					titre = calcTitre(city);
					visa = calcVisa(city);
					resolve();
				}, 35);
			});
		}
	}

	function calcTitre(c) {
		return `Son nom ${'AEIOU'.indexOf(c[0].n.substring(0, 1).toUpperCase()) !== -1 ? "d'" : 'de '}${
			c[0].n
		}<br>dans ${c[1].n}<br>desert`;
	}

	function calcVisa(c) {
		let num = `4${_.pad(c[0].i, 2, '0')}${_.pad(c[1].i, 2, '0')}`;
		return `${num.substring(0, 2)}&thinsp;${num.substring(2)}`;
	}
</script>

<div class="video-wrapper">
	<div class="video-container" on:click={change}>
		<video autoplay loop preload="auto" src="../video/sndv.mp4"><track kind="captions" /></video>
		<div class="text-container">
			<div class="title-container">
				<h1 class="shake">
					{@html titre}
				</h1>
			</div>
			<h2 class="shake">Visa n°&thinsp;{@html visa}</h2>
		</div>
	</div>
</div>

<div style="height:100vh;">Un générateur, pour quoi faire en effet ?</div>

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
	}

	.title-container {
		flex: 1 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}

	h1,
	h2 {
		display: block;
		font-weight: 700;
		text-transform: uppercase;
		text-align: center;
		color: #f0eeee;
		margin-left: -5000px;
		text-shadow: 2500px 0 2.5px #f0eeee;
		white-space: nowrap;
		line-height: 1.2;
	}

	h1 {
		margin-top: 4%;
		font-size: 3rem;
		letter-spacing: 0.25rem;
		z-index: 2;
	}

	h2 {
		font-size: 1.5rem;
		letter-spacing: -0.05rem;
		z-index: 3;
		flex: 0 0 10%;
	}

	video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
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
</style>
