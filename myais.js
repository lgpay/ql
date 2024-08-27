/*
const $ = new Env('myAIS保号提醒')
cron "30 9 * * *" 
*/

const notify = require('./sendNotify');
const moment = require('moment');

// 配置
const expiryDate = '2024-09-25'; // 设定到期日期，格式：YYYY-MM-DD
const thresholdDays = 3; // 设定小于等于的天数阈值

// 获取当前日期
const currentDate = moment().format('YYYY-MM-DD');

// 计算距离到期的天数
const remainingDays = moment(expiryDate).diff(moment(currentDate), 'days');

// 如果距离到期的天数小于等于阈值，则发送通知
if (remainingDays <= thresholdDays) {
  const sendMessage = `距离myAIS到期还有${remainingDays}天，请尽快充值`;

  // 发送通知
  notify.sendNotify('myAIS保号提醒', sendMessage);
}
