function playSound(path) {
  return new Promise((resolve, reject) => {
    player.play({path: path}).then(() => {
      resolve();
    }).catch((error) => {
      console.error(error);
      reject(error);
    });
  });
}
playSound('/Users/takahashisusumunari/Movies/02-LOSER.mp3');
