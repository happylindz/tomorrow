function intval(v)
{
  v = parseInt(v, 10);
  return isNaN(v) ? 0 : v;
}

// 获取元素信息
function getPos(e) {
  let l = 0;
  let t  = -61;
  let w = intval(e.style.width);
  let h = intval(e.style.height);
  let wb = e.offsetWidth;
  let hb = e.offsetHeight;
  while (e.offsetParent) {
    l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
    t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
    e = e.offsetParent;
  }
  l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
  t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
  return { x: l, y: t, w: w, h: h, wb: wb, hb: hb };
}

// 获取滚动条信息
function getScroll() {
  let top = null;
  let left = null;
  let width = null;
  let height = null;

  if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
    left = document.documentElement.scrollLeft;
    width = document.documentElement.scrollWidth;
    height = document.documentElement.scrollHeight;
  } else if (document.body) {
    top = document.body.scrollTop;
    left = document.body.scrollLeft;
    width = document.body.scrollWidth;
    height = document.body.scrollHeight;
  }
  return { t: top, l: left, w: width, h: height };
}

// 锚点(Anchor)间平滑跳转
export default function (el, duration, callback) {
  if (typeof el !== 'object') { el = document.getElementById(el) }
  if (!el) return;

  const z = {};
  z.el = el;
  z.p = getPos(el);
  z.s = getScroll();
  z.clear = function() { window.clearInterval(z.timer); z.timer = null };
  z.t = (new Date()).getTime();

  z.step = function() {
    let t = (new Date()).getTime();
    let p = (t - z.t) / duration;
    if (t >= duration + z.t) {
      z.clear();
      window.setTimeout(function() { z.scroll(z.p.y, z.p.x); callback && callback() }, 13);
    } else {
      const st = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.y - z.s.t) + z.s.t;
      const sl = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.x - z.s.l) + z.s.l;
      z.scroll(st, sl);
    }
  };
  z.scroll = function (t, l) { window.scrollTo(l, t) };
  z.timer = window.setInterval(function() { z.step() }, 13);
}