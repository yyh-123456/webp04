import bg from './index.css';
import less from './index.less';
import jp2 from './banner02.jpg'; //图片大小只有55.6k//当图片大于100k时，在f12查看代码里面会发现与小于100k的图片src的路劲显示不同

var img2 = document.createElement('img');
img2.src = jp2;
document.body.appendChild(img2);