const fs = require('fs');
const today = new Date();
const dayIndex = today.getDay();
today.setDate(today.getDate() - dayIndex);

for (let i = 0; i < 52*7 - dayIndex; i++) {
  today.setDate(today.getDate() - 1)
  const content = `touch commit${i}.txt && git add . && GIT_AUTHOR_DATE="date -d '${today}'" GIT_COMMITTER_DATE="date -d '${today}'" git commit -m '...'\n`

  fs.appendFile("commit.sh", content ,function(err){
  if(err) throw err;
  console.log('IS WRITTEN')
  });
}
