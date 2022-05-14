<script>
	import _ from 'lodash';
	export let data;

	function formatCycles(cycles) {
		return _(cycles)
			.groupBy((c) => c[0])
			.mapValues((c) =>
				_(c)
					.map((d) => d[1])
					.filter((d) => _.indexOf(['Rencontres et conférences', 'Les films'], d) < 0)
					.value()
					.join(' / ')
			)
			.toPairs()
			.map((c) =>
				_(c)
					.filter((d) => d !== '')
					.value()
					.join(' : ')
			)
			.value();
	}
</script>

{#each formatCycles(data.cycle) as cycle}
	<div>
		{cycle}
	</div>
{/each}

<ul>
	{#each data.items as item}
		<li>{item.titre}</li>
	{/each}
</ul>
<pre><code>{JSON.stringify(data, null, 2)}</code></pre>
