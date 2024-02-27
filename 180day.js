const fs = require('fs');
const notifyContent = '截至已满180天';

const sendMessage = []; // 通知消息数组

function sendNotification(message) {
  sendMessage.push(message); // 将通知内容添加到消息数组
}

function checkNotify() {
  const lastNotifyTime = fs.existsSync('./lastNotifyTime.txt')
    ? Number(fs.readFileSync('./lastNotifyTime.txt', 'utf8'))
    : null; // 从文件中读取上次通知的时间戳

  const currentTime = Date.now(); // 获取当前的时间戳

  if (!lastNotifyTime || currentTime - lastNotifyTime >= 180 * 24 * 60 * 60 * 1000) {
    // 如果上次通知时间不存在，或者距离上次通知已经超过180天，则执行通知操作
    sendNotification(notifyContent); // 发送通知
    fs.writeFileSync('./lastNotifyTime.txt', String(currentTime), 'utf8'); // 保存当前时间戳到文件中
  }
}

checkNotify();

// 打印发送的通知
console.log(sendMessage);
