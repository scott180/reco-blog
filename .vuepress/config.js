module.exports = {
  "title": "无为徐生",
  "description": "",
  "base": '/reco-blog/',
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
	valineConfig: {
		appId: 'In1BQCN8XdwnYBgPYnSi4r1W-gzGzoHsz',// your appId u
		appKey: 'nVqtDyPE9OClqUri8YcHyRaR',// your appKey
		visitor: true,
		showComment: false,
		// path = window.location.href
	},  
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
	  {
        "text": "目录",
        "link": "/docs/目录",
        "icon": "reco-menu"
      },
	  {
        "text": "分类",
        "icon": "reco-category",
        "items": [
          {
            "text": "生活",
            "link": "/categories/生活/",
          },
		  {
            "text": "编程",
            "link": "/categories/编程/",
          },
		  {
            "text": "书法",
            "link": "/categories/书法/",
          },
        ]
      },
	  {
        "text": "生活",
        "icon": "reco-document",
        "items": [
	      { text: '日常Note', link: '/docs/生活/随笔/日常Note'}, 
	      { text: '驾考记事', link: '/docs/生活/随笔/驾考记事'}, 
	      { text: '健身与学习', link: '/docs/生活/随笔/健身与学习'}, 
	      { text: '吉他练习笔记', link: '/docs/生活/随笔/吉他练习笔记'}, 
	      { text: '如何练好书法', link: '/docs/生活/文档/如何练好书法'}, 
	      { text: '我的原神旅行观测记录', link: '/docs/生活/随笔/我的原神旅行观测记录'}, 
        ]		
      },
	  {
        "text": "编程",
        "icon": "reco-api",
        "items": [
          { text: 'javaNote', link: '/docs/编程/java/javaNote'}, 
          { text: '排序算法', link: '/docs/编程/java/排序算法'}, 
          { text: 'gitNote', link: '/docs/编程/运维/gitNote'}, 
          { text: 'linuxNote', link: '/docs/编程/运维/linuxNote-x'}, 
          { text: 'vuepress构建项目', link: '/docs/编程/运维/vuepress构建项目'}, 
          { text: 'mysqlNote', link: '/docs/编程/数据库/mysqlNote'}, 
          { text: 'oracleNote', link: '/docs/编程/数据库/oracleNote'}, 
          { text: 'javaScript笔记', link: '/docs/编程/资料/javaScript笔记'}, 
          { text: '工具网站readMe', link: '/docs/编程/资料/工具网站readMe'}, 
        ]		
      },
	  {
        "text": "书法",
        "icon": "reco-blog",
        "items": [
			  { text: '赤壁赋', link: '/docs/书法/书法/赤壁赋'}, 
			  { text: '多宝塔碑', link: '/docs/书法/书法/多宝塔碑'}, 
			  { text: '徐书法', link: '/docs/书法/练习/徐书法'}, 
			  { text: '无为徐生', link: '/docs/书法/练习/无为徐生'}, 
			  { text: '古文诗词', link: '/docs/书法/练习/古文诗词'}, 
			  { text: '书法练习轨迹', link: '/docs/书法/练习/书法练习轨迹ReadMe'}, 
			  { text: '有感之杂说', link: '/docs/书法/轨迹/有感之杂说'}, 
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
          '/docs/生活/': [		  
		   {
              title: '随笔',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'日常Note',path:'随笔/日常Note'},
                {title:'驾考记事',path:'随笔/驾考记事'},
                {title:'健身与学习',path:'随笔/健身与学习'},
                {title:'吉他练习笔记',path:'随笔/吉他练习笔记'},
                {title:'二手车购买攻略',path:'随笔/二手车购买攻略'},
                {title:'二十四式太极拳',path:'随笔/二十四式太极拳'},
                {title:'短期远行必备物品',path:'随笔/短期远行必备物品'},
                {title:'我的原神旅行观测记录',path:'随笔/我的原神旅行观测记录'},
                {title:'纪念一下，三百天打满深渊',path:'随笔/纪念一下，三百天打满深渊'},
                {title:'原神历史版本祈愿up活动速递',path:'随笔/原神历史版本祈愿up活动速递'},
              ]					
            },
			{
			  title: '文档',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'古文诗词',path:'文档/古文诗词'},
				{title:'如何练好书法',path:'文档/如何练好书法'},
				{title:'幽默话术100句',path:'文档/幽默话术100句'},
				{title:'三千个脑筋急转弯',path:'文档/三千个脑筋急转弯'},
				{title:'文言文翻译网络流行语',path:'文档/文言文翻译网络流行语'},
				{title:'安徽电信免费流量获取方法',path:'文档/安徽电信免费流量获取方法'},
				{title:'安徽电信-流量来啦-每日必点',path:'文档/安徽电信-流量来啦-每日必点'},
				{title:'治疗失眠无限循环的有趣动图',path:'文档/治疗失眠无限循环的有趣动图'},
			  ]
		    }	   
		   
		   ],
			'/docs/编程/': [
			{
			  title: 'java',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'java介绍',path:'java/java介绍'},
			  	{title:'javaNote',path:'java/javaNote'},
				{title:'排序算法',path:'java/排序算法'},
				{title:'java资料集',path:'java/java资料集'},
			    {title:'布隆过滤器',path:'java/布隆过滤器'},
				{title:'eclipse笔记',path:'java/eclipse笔记'},
				{title:'tomcat笔记',path:'java/tomcat笔记'},
				{title:'cpu过高分析',path:'java/cpu过高分析'},
				{title:'mybatis笔记',path:'java/mybatis笔记'},
				{title:'springmvc笔记',path:'java/springmvc笔记'},
				{title:'servlet-jsp学习',path:'java/servlet-jsp学习'},
				{title:'SpringCloud入门',path:'java/SpringCloud入门'},
				{title:'springboot启动banner图案',path:'java/springboot启动banner图案'},
			  ]					
			},
			{
			  title: '运维',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
			  	{title:'docker',path:'运维/docker'},
				{title:'gitNote',path:'运维/gitNote'},
				{title:'shell语法',path:'运维/shell语法'},
				{title:'linuxNote',path:'运维/linuxNote-x'},
				{title:'nginx笔记',path:'运维/nginx笔记'},
				{title:'定时执行脚本',path:'运维/定时执行脚本'},
				{title:'gitbook部署博客',path:'运维/gitbook部署博客'},
				{title:'vuepress构建项目',path:'运维/vuepress构建项目'},
				{title:'批量推送布署徐书法项目',path:'运维/批量推送布署徐书法项目'},
				{title:'markdown静态博客搭建综述',path:'运维/markdown静态博客搭建综述'},
				{title:'gitlab、github绑定自定义域名',path:'运维/gitlab、github绑定自定义域名'},
				{title:'git平台docsify布署markdown文件',path:'运维/git平台docsify布署markdown文件'},
				{title:'gitlab、github、gitee布署mkdocs主题仓库',path:'运维/gitlab、github、gitee布署mkdocs主题仓库'},
			  ]					
			},
			{
			  title: '数据库',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'mysqlNote',path:'数据库/mysqlNote'},
				{title:'oracleNote',path:'数据库/oracleNote'},
				{title:'ldapNote',path:'数据库/ldapNote'},
				{title:'redis',path:'数据库/redis'},
				{title:'mongo',path:'数据库/mongo'},
				{title:'数据库隔离级别',path:'数据库/数据库隔离级别'},
				{title:'mysql开启log-bin日志',path:'数据库/mysql开启log-bin日志'},
				{title:'mysql之explan索引优化说明',path:'数据库/mysql之explan索引优化说明'},
			  ]
			},
			{
			  title: '资料',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'工具网站readMe',path:'资料/工具网站readMe'},
				{title:'nodejs与npm笔记',path:'资料/nodejs与npm笔记'},
				{title:'jquery笔记',path:'资料/jquery笔记'},
				{title:'二进制数负数',path:'资料/二进制数负数'},
				{title:'javaScript笔记',path:'资料/javaScript笔记'},
				{title:'本地安装kafka',path:'资料/本地安装kafka'},
				{title:'本地安装consul',path:'资料/本地安装consul'},
				{title:'本地安装zookeeper',path:'资料/本地安装zookeeper'},
				{title:'markdown常用语法',path:'资料/markdown常用语法'},
				{title:'window安装RabbitMQ',path:'资料/window安装RabbitMQ'},
				{title:'markdown导出pdf方法优劣分析',path:'资料/markdown导出pdf方法优劣分析'},
				{title:'十大git仓库平台保存文件与图片',path:'资料/十大git仓库平台保存文件与图片'},
				{title:'系统磁盘c盘清理垃圾文件方法一览',path:'资料/系统磁盘c盘清理垃圾文件方法一览'},
				{title:'pagefile.sys有几十个G，太大怎么办',path:'资料/pagefile.sys有几十个G，太大怎么办'},
			  ]
			}
			
		   ],
		   '/docs/书法/': [
			{
			  title: '书法',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{ title: '书法名帖', path: '书法/书法名帖'}, 
				{ title: '赤壁赋', path: '书法/赤壁赋'},
				{ title: '灵飞经', path: '书法/灵飞经'},
				{ title: '多宝塔碑', path: '书法/多宝塔碑'},
				{ title: '《心经》书法', path: '书法/《心经》书法'},
				{ title: '《兜沙经》书法', path: '书法/《兜沙经》书法'}, 
				{ title: '《多宝塔碑》单字版', path: '书法/《多宝塔碑》单字版'}, 
				{ title: '文徵明小楷《千字文》', path: '书法/文徵明小楷《千字文》'},
				{ title: '文徵明小楷《草堂十志》', path: '书法/文徵明小楷《草堂十志》'}
	
			  ]					
			},
			{
			  title: '练习',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{ title: '徐书法', path: '练习/徐书法'}, 
				{ title: '无为徐生', path: '练习/无为徐生'},
				{ title: '古文诗词', path: '练习/古文诗词'}, 
				{ title: '笔名汉字频率分析', path: '练习/笔名汉字频率分析'},
				{ title: '书法练习轨迹ReadMe', path: '练习/书法练习轨迹ReadMe'},
				{ title: '书法练习轨迹--明月几时有', path: '练习/书法练习轨迹--明月几时有'}
			  ]					
			},
			{
			  title: '轨迹',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{ title: '自序', path: '轨迹/自序'}, 
				{ title: '诗词杂句', path: '轨迹/诗词杂句'}, 
				{ title: '有感之杂说', path: '轨迹/有感之杂说'},
				{ title: '书法练习轨迹remark', path: '轨迹/书法练习轨迹remark'},
				{ title: '书法练习轨迹--明月几时有-无图版', path: '轨迹/书法练习轨迹--明月几时有-无图版'}
			  ]
			}
		   
		   ]
        },
		
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 4,
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
        "link": "https://github.com/scott180/reco-blog"
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
    "lastUpdated": "最近更新",
    "author": "无为徐生",
    "authorAvatar": "/template.png",
	record: '',
    recordLink: '',
    cyberSecurityRecord: '',
    cyberSecurityLink: '',
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
	  [
	  '@vuepress/last-updated',
	  {
		transformer: (timestamp, lang) => {
		  // 不要忘了安装 moment
		  const moment = require('moment')
		  moment.locale(lang)
		  return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
		}
	  }
	  ],
	  [
        'vuepress-plugin-mermaidjs'
	  ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
	  title: '无为徐生',
      description: '',
    }
  }

}