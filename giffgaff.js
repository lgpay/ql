/*
cron "30 9 * * *" giffgaff.js, tag:giffgaff保号提醒
 */

const notify = require('./sendNotify');
const moment = require('moment');

// 配置
const startDate = '2024-01-01'; // 设定开始日期，格式：YYYY-MM-DD

// 获取当前日期
const currentDate = moment().format('YYYY-MM-DD');

// 计算距离第180天的天数
const days = moment(currentDate).diff(moment(startDate), 'days');

// 计算距离第180天还有几天
const remainingDays = 180 - days;

// 如果距离第180天的天数小于等于3天，则发送通知
if (remainingDays <= 3) {
  const sendMessage = `距离giffgaff到期还有${remainingDays}天，请尽快保号`;
  notify.sendNotify('giffgaff保号提醒',sendMessage);
}
