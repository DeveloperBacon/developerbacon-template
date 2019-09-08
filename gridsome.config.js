// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	siteName: "Developer Bacon",
	siteUrl: "https://developerbacon.ca",
	titleTemplate: "%s Developer Bacon",
	host: "localhost",
	port: "8080",
	icon: {
		favicon: {
			src: "./src/favicon.png",
			size: [16, 32, 96]
		}
		// touchicon: {
		//   src: './src/my-touchicon.png',
		//   sizes: [76, 152, 120, 167],
		//   precomposed: true
		// }
	},
	chainWebpack: config => {
		config.plugin("ImageminPlugin").use(ImageminPlugin, [
			{
				options: {
					disable: process.env.NODE_ENV !== "production", // Disable during development
					pngquant: {
						quality: "75-80"
					}
				}
			}
		]);
	},
	css: {
		loaderOptions: {
			scss: {
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it uses publicPath in webpackOptions.output
							// publicPath: 'dist',
							hmr: devMode,
							// minimize: true,
							reloadAll: true
						}
					},
					"css-loader",
					"sass-loader",
					"postcss-loader"
				]
			}
		}
	},
	plugins: [
		{
			use: "@gridsome/source-filesystem",
			options: {
				// path: 'articles/**/*.md',
				path: "src/articles/*.md",
				typeName: "Post",
				route: "/articles/:slug",
				remark: {
					// remark options
					// externalLinksTarget: '_blank',
					// externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
					// anchorClassName: 'header-anchor',
					// plugins: [
					//   '@gridsome/remark-prismjs'
					// ]
				},
				refs: {
					// author: 'Brett Anda',
					tags: {
						typeName: "Tag",
						route: "/tag/:slug",
						create: true
					}
				}
			}
		},
		{
			use: "gridsome-plugin-sass-resources-loader",
			options: {
				resources: [
					"~/assets/styles/mixins/breakpoints.scss",
					"~/assets/styles/mixins/fontscale.scss",
					"~/assets/styles/main.scss"
				]
			}
		},
		{
			// https://gridsome.org/plugins/@gridsome/plugin-sitemap
			use: "@gridsome/plugin-sitemap",
			options: {
				cacheTime: 600000, //Default
				// exclude: ['/exclude-me'],
				config: {
					"/about": {
						changefreq: "monthly",
						priority: 0.7
					},
					"/contact": {
						changefreq: "monthly",
						priority: 0.5
					},
					"/": {
						changefreq: "daily",
						priority: 0.9
					},
					"/search": {
						changefreq: "daily",
						priority: 0.9
					},
					"/articles/*": {
						changefreq: "weekly",
						priority: 1
					},
					"/tag/*": {
						changefreq: "weekly",
						priority: 1
					}
				}
			}
		}
	],
	transformers: {
		//Add markdown support to all file-system sources
		remark: {
			externalLinksTarget: "_blank",
			externalLinksRel: [/*'nofollow',*/ "noopener", "noreferrer"],
			anchorClassName: "header-anchor",
			plugins: ["@gridsome/remark-prismjs"]
		}
	}
};
