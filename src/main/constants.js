// 全局常量
exports.store = {
   hideEditArea: true
};
exports.apiBaseUrl = 'http://dm2log.arlakitchen.com:8089';

// 规则组类型
exports.rulesTypes = [
  { id: '网站', title: '网站' },
  { id: '广告', title: '广告' },
  { id: '呼叫中心', title: '呼叫中心' },
  { id: '社会化媒体', title: '社会化媒体' }
];
// 规则类型
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