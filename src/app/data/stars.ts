export interface Star {
  id: string;
  name: string;
  chineseName: string;
  position: { x: number; y: number }; // 相对位置 (0-100)
  size: number; // 星星大小
  color: string; // 星星颜色
  brightness: number; // 亮度
  description: string;
  inspirationalQuote: string;
}

export const pleiadesStars: Star[] = [
  {
    id: 'alcyone',
    name: 'Alcyone',
    chineseName: '昴宿六',
    position: { x: 35, y: 48 },
    size: 24,
    color: '#a8d5ff',
    brightness: 1,
    description: '昴宿六是昂宿星团中最明亮的恒星，是一颗蓝白色的巨星，距离地球约440光年。它的亮度是太阳的2000倍，是整个星团的璀璨明珠。在希腊神话中，Alcyone是七姐妹中最美丽的一位，她的光芒照亮了整个夜空。',
    inspirationalQuote: '夏夏的光芒虽然不像恒星一样强烈，但却温柔的包容着大家，成为指引我们的灯塔，总会让人很安心。'
  },
  {
    id: 'atlas',
    name: 'Atlas',
    chineseName: '昴宿增十二',
    position: { x: 15, y: 58 },
    size: 19,
    color: '#b8e0ff',
    brightness: 0.8,
    description: 'Atlas是昂宿星团的父亲星，在希腊神话中，他是七姐妹和她们母亲的守护者。这颗三重星系统象征着力量与责任，虽然不如其女儿们闪耀，但始终坚定地守护着整个星团。',
    inspirationalQuote: '夏夏和Atlas很像，都成为了支撑他人梦想的坚实后盾，从小就背负了很多的责任，把弟弟妹妹们保护的很好，你辛苦啦'
  },
  {
    id: 'electra',
    name: 'Electra',
    chineseName: '昴宿三',
    position: { x: 55, y: 53 },
    size: 20,
    color: '#9dc9ff',
    brightness: 0.85,
    description: 'Electra是七姐妹中第三明亮的星星，这颗蓝白色的巨星以其稳定的光芒而闻名。在神话中，她代表着琥珀色的光辉，象征着恒久不变的美丽与优雅。',
    inspirationalQuote: '夏老师就像Electra的光芒一样稳定，保持你的核心价值不变，即使周围世界不断变化，你的光芒也将永恒闪耀。'
  },
  {
    id: 'maia',
    name: 'Maia',
    chineseName: '昴宿四',
    position: { x: 45, y: 38 },
    size: 19,
    color: '#aad6ff',
    brightness: 0.82,
    description: 'Maia是七姐妹中的长女，代表着成长与新生。这颗恒星在春季最为明亮，象征着万物复苏的力量。古罗马人以她的名字命名了五月（May），庆祝春天的到来。',
    inspirationalQuote: '每一天都是重新开始的机会。如同Maia象征着春天的新生，所以夏夏一定要像春天一样生机勃勃昂。这世界还有太多美好等着你去体验呢。'
  },
  {
    id: 'merope',
    name: 'Merope',
    chineseName: '昴宿五',
    position: { x: 45, y: 65 },
    size: 16,
    color: '#c8e8ff',
    brightness: 0.7,
    description: 'Merope是七姐妹中最暗的一颗，但她拥有独特的意义。在神话中，她是唯一嫁给凡人的姐妹，因此光芒较弱。然而，她的谦逊和勇气使她成为最独特的存在。',
    inspirationalQuote: '敢于选择不同的道路，忠于自己的内心，这本身就是最大的勇气'
  },
  {
    id: 'taygeta',
    name: 'Taygeta',
    chineseName: '昴宿一',
    position: { x: 60, y: 25 },
    size: 17,
    color: '#b0d8ff',
    brightness: 0.75,
    description: 'Taygeta以其纯净的蓝白色光芒而闻名，这颗恒星象征着纯洁与独立。在希腊神话中，她为了保护自己的自由，宁愿化为鹿也不屈服于宙斯。',
    inspirationalQuote: '夏老师，你的独立性和对真实自我的认识都是可贵的宝物，你绝对能准寻到你想要的自由！'
  },
  {
    id: 'pleione',
    name: 'Pleione',
    chineseName: '昴宿增七',
    position: { x: 15, y: 50 },
    size: 16,
    color: '#c0e0ff',
    brightness: 0.73,
    description: 'Pleione是七姐妹的母亲，与Atlas相伴守护着整个星团。这颗恒星是一颗快速自转的星体，展现出独特的活力。她象征着母性的力量和永恒的爱。',
    inspirationalQuote: '如同Pleione用爱滋养七姐妹，你也总能用关怀和支持影响周围的人。特别厉害的照顾到周围每一个人，大家都被你照顾的很好，谢谢夏夏~'
  }
];