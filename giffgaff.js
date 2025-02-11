/*
const $ = new Env('giffgaff保号提醒')
cron: 30 9 * * *
*/

const notify = require('./sendNotify');
const moment = require('moment');

// 配置
const serviceName = 'giffgaff'; // 设置服务名称变量
const startDate = '2025-01-11'; // 设定开始日期，格式：YYYY-MM-DD
const expiryThresholdDays = 3; // 设定到期阈值天数

// 获取当前日期
const currentDate = moment().format('YYYY-MM-DD');

// 计算距离第180天的天数
const daysPassed = moment(currentDate).diff(moment(startDate), 'days');

// 计算距离第180天还有几天
const remainingDays = 180 - daysPassed;

// 输出距离第180天的天数
console.log(`距离${serviceName}到期还有${remainingDays}天`);

// 如果距离第180天的天数小于等于3天，则发送通知
if (remainingDays <= expiryThresholdDays) {
  const sendMessage = `距离${serviceName}到期还有${remainingDays}天，请尽快保号`;

  // 发送通知
  notify.sendNotify(`${serviceName}保号提醒`, sendMessage);
}

