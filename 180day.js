const fs = require('fs');
const notifyContent = '截至已满180天';

function checkNotify() {
  const lastNotifyTime = fs.existsSync('./last180.txt')
    ? Number(fs.readFileSync('./last180.txt', 'utf8'))
    : null; // 从文件中读取上次通知的时间戳

  const currentTime = Date.now(); // 获取当前的时间戳

  if (!lastNotifyTime || currentTime - lastNotifyTime >= 180 * 24 * 60 * 60 * 1000) {
    // 如果上次通知时间不存在，或者距离上次通知已经超过180天，则执行通知操作
    console.log('发送通知');
    // 这里可以使用您想要的方式发送通知，如调用其他模块的函数、发送网络请求等

    fs.writeFileSync('./lastNotifyTime.txt', String(currentTime), 'utf8'); // 保存当前时间戳到文件中
  }
}

checkNotify();
