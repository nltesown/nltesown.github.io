<script>
	let c = 0;

	function postprocess(el) {
		el.querySelectorAll('p').forEach((d) => {
			c = c + d.textContent.replace(/(\\[nrt]|(\[[^\]]+\]))/gi, '').length; // Ignore le texte entre crochets (+ sauts de lignes) dans le décompte.
			// c = c + d.textContent.replace(/\\[nrt]/gi, '').length;
			d.innerHTML = d.innerHTML.replace(/(\[[^\]]+\])/gi, "<span style='opacity: .5;'>$1</span>");
		});
	}
</script>

<div class="container">
	<article use:postprocess>
		<div class="count">{c} caractères.</div>
		<p>
			<em>North by Northwest</em> s'ouvre&nbsp;–&nbsp;ou peut s'en faut&nbsp;–&nbsp;sur un nom. C'est
			l'heure de la sortie des bureaux à Manhattan. En une succession de plans d'ensemble, une foule
			ininterrompue, rapide, circule dans tous les sens, se déverse par les portes à tambour d'un building,
			s'enfonce dans une bouche de métro, se laisse porter par le courant dans l'escalier monumental
			de Grand Central. Puis, dans le hall d'un immeuble de bureaux où les ascenseurs délivrent à cette
			heure-là en continu leurs chargements d'employés, un homme suit le mouvement sans cesser de dicter
			un mémo à sa secrétaire, quand un groom l'aperçoit et l'interpelle à son passage avec enjouement.
		</p>
		<p>«&nbsp;Mr. Thornhill&nbsp;!&nbsp;»</p>
		<p>
			À l'inverse du nommé Thornhill, qui répond au salut du groom par un mot d'esprit express mais
			ne s'arrête pas, ne ralentit même pas, nous devrions, nous, nous arrêter un instant à cette
			première parole vraiment audible du film par laquelle le protagoniste est d'emblée désigné par
			son nom. Avec ce pressentiment&nbsp;: le film entier sera le récit des mésaventures de ce nom
			et&nbsp;–&nbsp;derrière ce mince paravent du nom&nbsp;–&nbsp;de l'identité à nu de son
			personnage.
		</p>
		<p>
			Et à cet instant sur lequel le film ne s'attarde pas, anodin en apparence, répond peu de temps
			après le geste qui met effectivement en marche le récit.
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
