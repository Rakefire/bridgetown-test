const { extname, basename } = require('path');

module.exports = {
	source: 'src',

	'collections-config': {
		posts: {
			path: '_posts',
			output: true,
			url: (filePath) => {
				const filename = basename(filePath, extname(filePath));
				const date = filename.slice(0, 10).replace(/-/g, '/');
				const slug = filename.slice(11);
				return `/updates/${date}-${slug}/`;
			}
		},
		pages: {
			path: '',
			glob: './src/*.md',
			url: (filePath, content, { buildUrl }) => content.permalink || buildUrl(filePath, content, '/[slug]/'),
			filter: 'strict',
			output: true,
			_enabled_editors: ['visual', 'content', 'data']
		}
	}
};
