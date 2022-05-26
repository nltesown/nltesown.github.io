<script>
	let c = 0;

	function count(el) {
		el.querySelectorAll('p').forEach((d) => {
			c = c + d.textContent.replace(/\\[nrt]/gi, '').length;
		});
	}
</script>

<div class="container">
	<article use:count>
		<div class="count">{c} caractères.</div>
		<p>
			C'est sur un nom proféré que s'ouvre –&nbsp;ou peut s'en faut&nbsp;– <em
				>North by Northwest</em
			>. Nous sommes dans le hall d'un immeuble de Manhattan à l'heure de la sortie des bureaux.
			Dans le quartier, on vient de voir, en une succession de plans d'ensemble, la foule
			ininterrompue de la fin d'après-midi traverser une avenue, descendre dans une bouche de métro,
			se laisser porter comme un banc de poissons dans l'escalier monumental de Grand Central. Ne
			dirait-on l'incarnation idéale d'une foule affairée, démocratique, immanquablement américaine,
			où conformité et «&nbsp;distinction&nbsp;» vont de pair, où l'anonymat consenti offre en même
			temps la possibilité de l'affirmation individuelle&nbsp;? Et maintenant, dans l'immeuble, un
			ascenseur délivre à son tour son chargement d'employés. Parmi ceux-ci, pris dans le mouvement
			général, un homme continue, imperturbable, de dicter à sa secrétaire quand un portier le voit
			passer à sa hauteur et l'interpelle avec enjouement, lui seul parmi
			tous&nbsp;:&nbsp;«&nbsp;Mr. Thornhill&nbsp;!&nbsp;»
		</p>
		<p>
			L'homme en costume gris réplique à la salutation par un vague bon mot mais ne s'arrête pas, ne
			ralentit même pas, porté par le flot des employés et son propre <em>flow</em>, ce
			bourdonnement de consignes dont il abreuve sa secrétaire. Tandis qu'ils sont portés vers la
			sortie, d'autres ascenseurs encore se déversent à l'identique.
		</p>
		<p>
			Dans le cours du mouvement qui donne son impulsion aux premières minutes de
			<em>North by Northwest</em>, il faudrait suspendre ce bref instant où ce nom,
			«&nbsp;Thornhill&nbsp;», est prononcé. Celui qui nous est ainsi désigné, Cary Grant impeccable
			dans son costume gris, n'hésiterait sans doute pas à dire, comme Don Quichotte&nbsp;:
			«&nbsp;Je sais qui je suis&nbsp;» (un publicitaire de Madison Ave., une double divorcé, un
			fils à maman...), mais quel inconvénient y aurait-il à ce qu'un autre vous le rappelle&nbsp;?
			On l'ignore encore, mais cet instant, en faisant nommer son protagoniste, amorce véritablement
			le récit (ne serait-ce pas même son véritable MacGuffin&nbsp;?), un récit qui justement va
			s'entêter à vouloir le dépouiller de son nom et, partant, de son identité.
		</p>
		<p>
			Peu après, Thornhill, ayant rejoint des relations d'affaires au bar de l'hôtel Plaza, fait
			innocemment le geste qui referme sur lui un piège auquel il est étranger&nbsp;: il lève la
			main pour tenter de faire venir un garçon à l'instant même où celui-ci passe au milieu des
			clients à la recherche d'un nommé Kaplan. Par son geste, Thornhill répond une seconde fois en
			peu de temps –&nbsp;cette fois-ci sans même le savoir&nbsp;– à l'appel d'un nom, et devient,
			pour les deux inconnus qui ont monté le stratagème et observent la scène à l'écart, celui
			qu'ils cherchent. Et l'ayant ainsi identifié, le kidnappent.
		</p>
	</article>
</div>

<style>
	article {
		padding: 24px;
		min-height: 200vh;
		background-color: #fff;
	}

	p {
		margin: 1rem auto;
		max-width: 40rem;
		line-height: 1.5;
		letter-spacing: 0;
	}

	.container {
		width: 800px;
		max-width: 100%;
		margin: 0 auto;
	}

	.count {
		font-size: 0.75rem;
		color: #333;
	}
</style>
