require.config({
	'paths': {
		'jquery': ['js/jquery-2.2.1.min'],
		'bootstrap': ['js/bootstrap.min'],
		'style': ['js/style']
	},
	'shim': {
		'bootstrap': {
			'deps': ['jquery']
		},
		'style': {
			'deps': ['jquery']
		}
	}
});

require(['jquery', 'bootstrap', 'style']);
