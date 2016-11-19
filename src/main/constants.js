// 全局常量
exports.store = {
   hideEditArea: false
};
exports.apiBaseUrl = 'http://dmp.arlakitchen.com';

// 规则组类型
exports.rulesTypes = [
  { 
    id: '网站', 
    title: '网站',
    types: [
      { id: 1, title: '页面' },
      { id: 2, title: '点击' },
      { id: 3, title: '订单' },
      { id: 4, title: '购物车' },
      { id: 5, title: '微信' },
      { id: 6, title: '会员积分' },
      { id: 7, title: '搜索' },
      { id: 8, title: '活动' },
      { id: 9, title: '优惠券' },
      { id: 10, title: '中奖' },
      { id: 11, title: '关联型' }
    ] 
  },
  { 
    id: '广告', 
    title: '广告',
    types: [
      { id: 1, title: '广告主题/特征' },
      { id: 2, title: '广告曝光量' },
      { id: 3, title: '广告点击量' },
      { id: 4, title: '广告投放媒体' }
    ]
  },
  { 
    id: '呼叫中心', 
    title: '呼叫中心',
    types: [
      { id: 1, title: '电话归属地' },
      { id: 2, title: '呼入手机号' },
      { id: 3, title: '呼入手机号运营商' },
      { id: 4, title: '呼入时段' },
      { id: 5, title: '呼叫内容关键字' }
    ] 
  },
  { 
    id: '社会化媒体', 
    title: '社会化媒体',
    types: []
  }
];
// 规则类型
exports.ruleTypes = [
  {
    id: 1,
    title: '网站',
    types: [
      { id: 1, title: '页面' },
      { id: 2, title: '点击' },
      { id: 3, title: '订单' },
      { id: 4, title: '购物车' },
      { id: 5, title: '微信' },
      { id: 6, title: '会员积分' },
      { id: 7, title: '搜索' },
      { id: 8, title: '活动' },
      { id: 9, title: '优惠券' },
      { id: 10, title: '中奖' },
      { id: 11, title: '关联型' }
    ]
  },
  {
    id: 2,
    title: '网站',
    types: [
      { id: 1, title: '页面' },
      { id: 2, title: '点击' },
      { id: 3, title: '订单' },
      { id: 4, title: '购物车' },
      { id: 5, title: '微信' },
      { id: 6, title: '会员积分' },
      { id: 7, title: '搜索' },
      { id: 8, title: '活动' },
      { id: 9, title: '优惠券' },
      { id: 10, title: '中奖' },
      { id: 11, title: '关联型' }
    ]
  }
];
exports.ruleTypes = [
  { id: 1, title: '页面' },
  { id: 2, title: '点击' },
  { id: 3, title: '订单' },
  { id: 4, title: '购物车' },
  { id: 5, title: '微信' },
  { id: 6, title: '会员积分' },
  { id: 7, title: '搜索' },
  { id: 8, title: '活动' },
  { id: 9, title: '优惠券' },
  { id: 10, title: '中奖' },
  { id: 11, title: '关联型' }
];
// 任务状态
exports.taskStatus = [
  { id: 0, title: '未开始' },
  { id: 1, title: '执行中' },
  { id: 2, title: '暂停中' },
  { id: 3, title: '已结束' },
  { id: 4, title: '未加入' }
];
// 真假选择
exports.boolOptions = [
  { id: 1, title: '震' },
  { id: 2, title: '假' }
];
// 时间选择
exports.timeOptions = [
  { id: 1, title: '开始时间' },
  { id: 2, title: '结束时间' }
];
// 时间选择
exports.compareOptions = [
  { id: 1, title: '大于' },
  { id: 2, title: '小于等于' },
  { id: 2, title: '小于' },
  { id: 2, title: '小于等于' },
  { id: 3, title: '等于' }
];
// 行别选择
exports.sexOptions = [
  { id: 1, title: '男' },
  { id: 2, title: '女' },
  { id: 3, title: '保密' }
];
// 积分选择
exports.pointsOptions = [
  { id: 1, title: '购买积分' },
  { id: 2, title: '行为积分' }
];
// 优惠券选择
exports.couponOptions = [
  { id: 1, title: '领取优惠券' },
  { id: 2, title: '使用优惠券' }
];