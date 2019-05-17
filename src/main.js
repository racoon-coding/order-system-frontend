console.time('Sum');
console.info('Benchmark JS');
let result = Array.from({length: 10e5}).reduce((acc, cur, i) => {
  return acc + i;
}, 0);
console.log(result);
console.timeEnd('Sum');