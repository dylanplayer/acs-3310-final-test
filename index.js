const { ordinalSuffix } = require('@dylanplayer/acs-3310-final');

const start = 1;
const end = 100;

for (i = start; i <= end; i++) {
  console.log(ordinalSuffix(i));
}
