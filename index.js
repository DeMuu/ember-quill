/* eslint-env node */
'use strict';

const fastboot = require('fastboot-transform');

module.exports = {
	name: '@abcum/ember-quill',
	included(app) {
		this._super.included(app);
		app.import('vendor/quill/dist/quill.js');
		app.import('vendor/quill/dist/quill.snow.css');
		app.import('vendor/quill/dist/quill.bubble.css');
		app.import('vendor/quill.js', {
			exports: {
				Quill: ['default']
			}
		});
	},

	options: {
		nodeAssets: {
			quill() {
				return {
					vendor: ['dist/quill.js'],
					import: [
						'dist/quill.snow.css',
						'dist/quill.bubble.css'
					],
				};
			}
		}
	},

};
