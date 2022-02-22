<script>
	import Image from '../components/lib/Image.svelte';
</script>

<div class="container">
	<div class="image-container"><Image src="../img/2-1.jpg" alt="System reset" /></div>
	<article>
		<p>
			Percée de deux fenêtres perpendiculaires, une pièce d'angle aux murs mats et très
			blancs&nbsp;: une lumière d'une netteté idéale, à l'approche de midi tout particulièrement,
			une lumière photographique. C'est dans cette pièce, au milieu la table ronde, qu'elle se
			trouve. Là, on peut l'examiner à loisir, on dirait qu'elle y a été mis pour ça. Mais une autre
			fois, elle n'y sera plus. Elle sera en haut du petit buffet en bois exotique, sa place plus
			habituelle, à côté d'autres choses, un vase, un cendrier, cinq dés de poker dice alignés dans
			leur petite boîte transparente un peu rayée par l'usage, de la petite monnaie, trois clés
			piquées de rouille attachées ensemble à un anneau.
		</p>
		<p>
			On pourrait énumérer encore ces choses qui se sont un jour trouvées là, sur le haut du buffet,
			mais qui n'y sont pas. Un lien semblera toujours exister entre ces choses présentes et
			absentes. Tous les jours, certaines sont déplacées, prises, rangées, posées, empochées,
			remises, volées même. (Dans cette maison, surtout, on y vole.)
		</p>
		<p>
			Pour l'heure, elle est au centre de la table, au centre de la pièce, dans le jour intense dont
			le souvenir veut l'entourer pour mieux le voir et le décrire sans erreur. Le soleil est hors
			de vue, sûrement au-dessus de la maison. Plus tôt dans la matinée, le soleil entrait par l'une
			des fenêtres. Un rayon la frappait en plein. Il aurait peut-être fallu la voir à ce moment-là.
		</p>

		<!--		<p>
			<strong>System reset. Are you certain?</strong> Think twice before answering this question and
			pressing that key.
		</p>
		<p>
			We take it for granted: blue keys are friendly-looking and innocuous. Blue keys, to put it
			another way, are not red keys. But what is the color blue supposed to mean when it comes to
			buttons and keys? And what is its meaning in relation to the text message?
		</p>
		<p>Resetting the system is not generally considered harmless.</p>-->
	</article>
</div>

<style>
	article {
		background-color: #fff;
		padding: 24px;
		min-height: 200vh;
	}

	p {
		margin: 1rem 0;
		line-height: 1.5;
	}

	.container {
		width: 800px;
		max-width: calc(100vw - 12px);
		margin: 0 auto;
	}

	.image-container {
		margin-bottom: 12px;
	}
</style>
