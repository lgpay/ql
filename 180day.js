const notifyContent = '截至已满180天';

function checkNotify() {
  const lastNotifyTime = $prefs.valueForKey('lastNotifyTime'); // 获取上次通知的时间戳
  const currentTime = Date.now(); // 获取当前的时间戳

  if (!lastNotifyTime || currentTime - lastNotifyTime >= 180 * 24 * 60 * 60 * 1000) {
    // 如果上次通知时间不存在，或者距离上次通知已经超过180天，则执行通知操作
    $notify('青龙面板通知', '', notifyContent);
    const lastNotifyTime = new Date('2024-01-01 09:00:00').getTime(); // 设置上次通知时间为2024年1月1日9点
    $prefs.setValueForKey(lastNotifyTime, 'lastNotifyTime'); // 保存上次通知时间作为上次通知时间
  }
}

checkNotify();
