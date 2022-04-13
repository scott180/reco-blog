module.exports = {
  "title": "无为徐生",
  "description": "",
  //"base": '/reco-blog/',
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
        "text": "分类",
        "icon": "reco-category",
        "items": [
          {
            "text": "资料",
            "link": "/categories/资料/",
          },
		  {
            "text": "数据库",
            "link": "/categories/数据库/",
          },
		  {
            "text": "java",
            "link": "/categories/java/",
          },
		  {
            "text": "书法",
            "link": "/categories/书法/",
          },
        ]
      },
      {
        "text": "文档",
        "icon": "reco-document",
        "items": [
			{ text: '资料',link: '/docs/资料/笔记/note'}, 
			{ text: '数据库', link: '/docs/数据库/mysqlNote'}, 
			{ text: 'java', link: '/docs/java/资料/javaNote'}, 
			{ text: '书法', link: '/docs/书法/古文诗词'}
        ]
      },
	  {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于我",
		"link": '/docs/关于我',
        "icon": "reco-account",
      }
    ],
	subSidebar: 'auto',
	// 侧边栏
    sidebar: {
          '/docs/资料/': [		  
		  {
              title: '笔记',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'note',path:'笔记/note'},
                {title:'gitNote',path:'笔记/gitNote'},
                {title:'linuxNote',path:'笔记/linuxNote-x'},
				{title:'nginx笔记',path:'笔记/nginx笔记'},
				{title:'docker',path:'笔记/docker'},
              ]					
            },
			{
			  title: '文档',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'本地安装kafka',path:'文档/本地安装kafka'},
				{title:'本地安装zookeeper',path:'文档/本地安装zookeeper'},
				{title:'markdown常用语法',path:'文档/markdown常用语法'},
				{title:'vuepress构建项目',path:'文档/vuepress构建项目'},
				{title:'gitlab、github绑定自定义域名',path:'文档/gitlab、github绑定自定义域名'},
				{title:'git平台docsify布署markdown文件',path:'文档/git平台docsify布署markdown文件'},
				{title:'gitlab、github、gitee布署mkdocs主题仓库',path:'文档/gitlab、github、gitee布署mkdocs主题仓库'},
				
			  ]
		   }
		   ],
		  '/docs/数据库/': [{
              title: '数据库',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'mysqlNote',path:'mysqlNote'},
                {title:'oracleNote',path:'oracleNote'},
                {title:'redis',path:'redis'},
                {title:'mongo',path:'mongo'},
                {title:'数据库隔离级别',path:'数据库隔离级别'},
                {title:'mysql开启log-bin日志',path:'mysql开启log-bin日志'},
              ]
            }],
			'/docs/java/': [
			  {
				  title: '教程',
				  collapsable: true, // 可选的, 默认值是 true,
				  sidebarDepth: 2,   // 可选的, 默认值是 1
				  children: [
					{title:'java介绍',path:'教程/java介绍'},
					{title:'jquery笔记',path:'教程/jquery笔记'},
					{title:'eclipse笔记',path:'教程/eclipse笔记'},
					{title:'mybatis笔记',path:'教程/mybatis笔记'},
					{title:'springmvc笔记',path:'教程/springmvc笔记'},
					{title:'servlet-jsp课程学习',path:'教程/servlet-jsp课程学习'},
				  ]					
				},
				{
				  title: '资料',
				  collapsable: true, // 可选的, 默认值是 true,
				  sidebarDepth: 2,   // 可选的, 默认值是 1
				  children: [
					{title:'javaNote',path:'资料/javaNote'},
					{title:'排序算法',path:'资料/排序算法'},
					{title:'java资料集',path:'资料/java资料集'},
					{title:'布隆过滤器',path:'资料/布隆过滤器'},
				  ]					
				}
			
		   ],
		   '/docs/书法/': [{
              title: '书法',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'古文诗词',path:'古文诗词'},
                {title:'多宝塔碑',path:'多宝塔碑'},
                {title:'《心经》书法',path:'《心经》书法'},
                {title:'书法练习轨迹ReadMe',path:'书法练习轨迹ReadMe'},
                {title:'无为徐生',path:'无为徐生'},
                {title:'徐书法',path:'徐书法'},
              ]
            }]
        },
		
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
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
        "title": "reco-blog",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://github.com/scott180/reco-blog"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "无为徐生",
    "authorAvatar": "/template.png",
	record: '浙ICP备2022008289号-1',
    recordLink: 'http://beian.miit.gov.cn',
    cyberSecurityRecord: '浙公网安备 33011002016354号',
    cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016354',
    startYear: '2022'
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