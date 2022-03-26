module.exports = {
  "title": "个人博客",
  "description": "",
  base: '/reco-blog/',
  "dest": ".vuepress/dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "docs",
            "link": "/docs/书法/"
          },
		  {
            "text": "练习",
            "link": "/docs/练习/"
          },
		  {
            "text": "作者",
            "link": "/docs/作者/"
          }
        ]
      },
	  {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "去看看",
        "icon": "reco-message",
        "items": [
          {
            "text": "github",
            "link": "https://github.com/scott180/reco-blog",
            "icon": "reco-github"
          },
		  {
            "text": "calligraphy",
            "link": "https://xushufa.cn",
            "icon": "reco-home"
          },
		  {
            "text": "blog",
            "link": "https://blog.xushufa.cn",
            "icon": "reco-message"
          }
        ]
      }
    ],
    "sidebar": {
	   "/docs/书法/": [
        "",
        "书法名帖",
        "灵飞经",
        "多宝塔碑",
        "《心经》书法",
        "《兜沙经》书法",
        "文徵明-小楷千字文",
        "文徵明-小楷《草堂十志》"
      ],
	   "/docs/练习/": [
        "",
        "徐书法",
        "笔名汉字频率分析",
        "古文诗词",
        "书法练习轨迹ReadMe",
        "书法练习轨迹--明月几时有"
      ],
	  	"/docs/作者/": [
        "无为徐生"
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "Friend Link": [
      {
        "title": "无为徐生",
        "desc": "人情必有所寄，习惯而成自然。",
        "email": "1021151991@qq.com",
        "link": "https://xushufa.cn"
      },
      {
        "title": "reco-calligraphy",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://github.com/scott180/reco-blog"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/template.png",
	record: '浙ICP备2022008289号-1',
    recordLink: 'http://beian.miit.gov.cn',
    cyberSecurityRecord: '浙公网安备 33011002016354号',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016354',
    startYear: '2022',
	subSidebar: 'auto'
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
      // 支持中文文件名
      [
        "permalink-pinyin",
        {
          lowercase: true, // Converted into lowercase, default: true
          separator: "-", // Separator of the slug, default: '-'
        },
      ],
  ]

}