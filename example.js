const notify = require('./sendNotify');
const moment = require('moment');

// 配置
const startDate = '2024-01-01'; // 设定开始日期，格式：YYYY-MM-DD
const targetDays = 60; // 设定目标天数
const thresholdDays = 3; // 设定小于等于的天数阈值

// 获取当前日期
const currentDate = moment().format('YYYY-MM-DD');

// 计算距离目标天数的天数
const days = moment(currentDate).diff(moment(startDate), 'days');

// 计算距离目标天数还有几天
const remainingDays = targetDays - days;

// 如果距离目标天数的天数小于等于阈值天数，则发送通知
if (remainingDays <= thresholdDays) {
  const sendMessage = `还差${remainingDays}天到达第${targetDays}天`;

  // 发送通知
  notify.sendNotify(sendMessage);
}
