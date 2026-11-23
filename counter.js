// 画面に依らない純粋な関数（DOM に触れない）
function increment(n) {
  return n + 1;
}

function decrement(n) {
  return Math.max(0, n - 1);
}

function reset() {
  return 0;
}
