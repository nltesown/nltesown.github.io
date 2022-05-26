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
			ininterrompue de la fin d'après-midi se faire avaler par une bouche de métro, se laisser
			porter comme un banc de poissons dans l'escalier monumental de Grand Central. Et maintenant,
			dans l'immeuble, un ascenseur délivre à son tour son chargement d'employés. Parmi ceux-ci,
			pris dans le mouvement général, un homme continue, imperturbable, de dicter à sa secrétaire
			quand un portier le voit passer à sa hauteur et l'interpelle, lui parmi
			tous&nbsp;:&nbsp;«&nbsp;Mr. Thornhill&nbsp;!&nbsp;»
		</p>
		<p>
			L'homme élégant en costume gris réplique à la salutation par un vague bon mot mais ne s'arrête
			pas, ne ralentit même pas, porté par le flux des employés et son propre <em>flow</em>, ce
			bourdonnement de consignes dont il abreuve sa secrétaire. Tandis qu'ils sont portés vers la
			sortie, d'autres ascenseurs encore se déversent à l'identique. Dans la trépidation qui donne
			son impulsion aux premières minutes de
			<em>North by Northwest</em>, il faudrait peut-être suspendre ce bref instant où un nom,
			«&nbsp;Thornhill&nbsp;», est prononcé. Celui qui nous est ainsi désigné, Cary Grant évidemment
			impeccable dans son costume gris, n'hésiterait sans doute pas à dire, comme Don
			Quichotte&nbsp;: «&nbsp;Je sais qui je suis&nbsp;», mais quel inconvénient y aurait-il à ce
			qu'un autre vous le rappelle&nbsp;? On ne peut pas le savoir, mais cet instant est celui qui,
			en faisant nommer son protagoniste, amorce véritablement le récit (ne serait-ce pas même son
			véritable MacGuffin&nbsp;?), un récit qui va s'entêter à vouloir le dépouiller de son nom et
			de son identité.
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
