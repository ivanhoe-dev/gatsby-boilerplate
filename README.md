# Gatsby Boilerplate
A plain Gatsby boilerplate integrated with Netlify and Netlify CMS

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ivanhoe-dev/gatsby-boilerplate)
## Demo
https://gatsby-boilerplate-i.netlify.com

## Command
##### Start local development 

`npm start`

Your index page will be: localhost:8001
Your Graphql page will be: localhost:8001/__graphql

##### Build on local

`npm run build`

## Add New Pages
You could add a new js file under** src/templates **as template. The file would be a React Component.

To really add a new page, you could add a new markdown file under **src/pages**. The markdown format will be as follow:

```json
---
<!-- This is your locale data (Please refer to the i18n section for details) -->
<!-- It could be accessed by template as this.props.pageContext.frontmatter -->
en: 
  title: About Us
  subtitle: >-
    This is an optional subtitle. It can be used to describe what this page is
    about.
  img_path: images/about.jpg
<!-- This is your template for this page -->
template: page
---
<!-- This is your content-->
<!-- It could be accessed by template as this.props.pageContext.html -->
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula 

```
## Add UI sections in pages
Inside each page, you could add multiple UI sections. For example, you may want to add an introduction section and contact section under homepage.

To do so, you could add your section as js file under src/components and also define it inside src/components/index.js. Now under your src/pages/*.md files, you could access this component. 

Example:
```markdown
en:
  title: Home
  sections:
   <!-- Add a new section here -->
    - type: heroblock
      section_id: hero
      title: Hello World
	  <!-- This is the component name you define in src/components/index.js -->
      component: HeroBlock 
      content: >-
        Azimuth is the perfect theme for developers, designers and entrepreneurs
        who need a sleek, modern SaaS site. 
      actions:
        - label: Learn More
          url: /about
```

## i18n
**[1] Add your language list and default language**

Config **site-metadata.json** under the root directory

| Attribute  | Usage  |
| ------------ | ------------ |
|  locale.default |  Your default language for the index page |
| locale.list  | The list of languages available for your web. The key attribute is the label shown on navbar. The value attribute is the URL pattern for the language  |

Example:

```json
{
    "locale": {
        "default": "zh",
        "list": [
            {
                "key": "繁",
                "value": "zh"
            },
            {
                "key": "简",
                "value": "cn"
            },
            {
                "key": "En",
                "value": "en"
            }
        ]
    }
}
```
**[2] Add locale content to your page**
Under each **src/pages/*.md **file, add  your  locale value (e.g. en) as attribute and put all data with that language under this attribute. Becareful do not put the template attribute under the locale attribute.

Example:
```markdown
en:
  title: About Us
  subtitle: >-
    This is an optional subtitle. It can be used to describe what this page is
    about.
  img_path: images/about.jpg
zh:
  title: 關於我們
  subtitle: >-
    這是一個可選的副標題。它可以用來描述這個頁面是什麼
  img_path: images/about.jpg
cn:
  title: 关於我们
  subtitle: >-
    这是一个可选的副标题。它可以用来描述这个页面是什麽
  img_path: images/about.jpg
template: page
```
**[3] Navbar and Footer locales**
Go to **site-metadata.json** again, config the header.menus and footer.menus to support muti-language.  Please be careful that the key of each title items should be existed in locale.list

Example:

```json
{
	"header": {
			"menus": {
				"main": {
					"title": {
						"en": "Home",
						"zh": "主頁",
						"cn": "主页"
					},
					"url": "/"
				},
				"about": {
					"title": {
						"en": "About",
						"zh": "關於",
						"cn": "关於"
					},
					"url": "/about/"
				}
			}
		},
	"footer": {
			"menus": {
				"main": {
					"title": {
						"en": "Home",
						"zh": "主頁",
						"cn": "主页"
					},
					"url": "/"
				},
				"about": {
					"title": {
						"en": "About",
						"zh": "關於",
						"cn": "关於"
					},
					"url": "/about/"
				}
			},
		},
	}
```

## CMS
Your CMS will only work after deploying on Netlify. The URL will be https://XXX.netlify.com/admin

You could config your CMS under **static/admin/config.yml**
