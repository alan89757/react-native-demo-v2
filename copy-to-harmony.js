const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);

  items.forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath); // 递归复制文件夹
    } else {
      fs.copyFileSync(srcPath, destPath); // 复制文件
    }
  });
}

// 鸿蒙module
const sourceDir1 = './entry/oh_modules/@rnoh/react-native-openharmony/generated';
const destinationDir1 =
  '../ztk-app-harmony/entry/oh_modules/@rnoh/react-native-openharmony/generated';

// cpp文件
const sourceDir2 = './entry/src/main/cpp/generated';
const destinationDir2 = '../ztk-app-harmony/entry/src/main/cpp/generated';

// bundle文件
const sourceDir3 = './harmony/entry/src/main/resources/rawfile';
const destinationDir3 = '../ztk-app-harmony/entry/src/main/resources/rawfile';

copyDir(sourceDir1, destinationDir1);
copyDir(sourceDir2, destinationDir2);
copyDir(sourceDir3, destinationDir3);
