import { useMemo, useState } from 'react';
import { debounce } from './utils';

export default function SearchForm() {
	const [hits, setHits] = useState([]);

	const search = async event => {
		const q = event.target.value;

		if (q.length > 2) {
			const params = new URLSearchParams({ q });

			const res = await fetch(`/api/search?${params}`);

			const result = await res.json();
			console.log(result);
			setHits(result['cars']);
		}
	};

	const debouncedSearch = useMemo(() => debounce(search, 300), []);

	return (
		<div>
			<input onChange={debouncedSearch} type='text' />

			<ul>
				{hits.map(hit => (
					<li key={hit.entityId}>
						{hit.make} {hit.model}
						<p>{hit.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
