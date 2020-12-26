const path = require('path');
const express = require('express');
const app = express();
const api = require('./api');
const demo = require('./demo');

app.use('/api', api); // api路由
app.use('/demo', demo); // demo路由
app.use('/yu', express.static(path.join(__dirname, '../static'))); // 静态资源

// 首页
app.get('/', function (req, res) {
  res.redirect('/yu/index.html');
});

// 404处理
app.all('*', (req, res) => {
  res.send('茶π挺好喝的');
})

// 3000端口
app.listen(3000, () => {
  console.log('port 3000');
});