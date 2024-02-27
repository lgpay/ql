// 设置任务的时间间隔（单位：毫秒），180天转换为毫秒  
const INTERVAL_MS = 180 * 24 * 60 * 60 * 1000;  
  
// 假设的发送消息函数，你需要根据实际情况替换为正确的函数  
// 这个函数应该接受一个字符串参数作为通知内容，并发送通知  
  
// 主函数  
async function main() {  
  try {  
    // 获取上次任务执行的时间戳  
    const lastRunTime = await getLastRunTime();  
  
    // 计算下次任务执行的时间戳  
    const nextRunTime = lastRunTime + INTERVAL_MS;  
  
    // 获取当前时间戳  
    const currentTime = Date.now();  
  
    // 检查是否到了执行时间  
    if (currentTime >= nextRunTime) {  
      // 发送通知  
      sendMessage.push('截至已满180天');  
  
      // 更新任务执行时间  
      await updateLastRunTime(currentTime);  
    }  
  } catch (error) {  
    console.error('执行任务时出错:', error);  
  }  
}  
  
// 获取上次任务执行的时间戳（假设存储在一个文件中）  
async function getLastRunTime() {  
  const filePath = '	/ql/data/user/last_180.txt'; // 存储上次运行时间戳的文件路径  
  try {  
    const content = await fs.readFile(filePath, 'utf8');  
    return parseInt(content, 10) || 0; // 如果文件不存在或内容无法解析，则返回0  
  } catch (error) {  
    console.error('读取上次运行时间戳失败:', error);  
    return 0;  
  }  
}  
  
// 更新任务执行时间（更新到同一个文件中）  
async function updateLastRunTime(time) {  
  const filePath = '/ql/data/user/last_180.txt';  
  try {  
    await fs.writeFile(filePath, time.toString());  
  } catch (error) {  
    console.error('更新运行时间戳失败:', error);  
  }  
}  
  
// 执行主函数  
main();
