const { exec } = require('child_process');

// 定义要执行的脚本列表
const scripts = [
  'react-native codegen-harmony --cpp-output-path ./entry/src/main/cpp/generated --rnoh-module-path ./entry/oh_modules/@rnoh/react-native-openharmony',
  'react-native bundle-harmony --dev',
  'node copy-to-harmony.js',
];

function runScript(index) {
  if (index >= scripts.length) {
    console.log('所有脚本已执行完毕');
    return;
  }
  const script = scripts[index];
  console.log(`正在执行 ${script}...`);

  exec(script, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行 ${script} 时出错:`, error);
      return;
    }

    if (stderr) {
      console.error('标准错误:', stderr);
    }
    // 执行下一个脚本
    runScript(index + 1);
  });
}

// 开始执行脚本
runScript(0);
