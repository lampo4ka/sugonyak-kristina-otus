async function promiseReduce(asyncFunctions, reduce, initialValue) {
	let f1 =  await asyncFunctions[0]().then((result0) => {
		return result0;
	});

	let f2 = await asyncFunctions[1]().then((result1) => {
		return result1;
	});

	let arr = [f1, f2];
	let result = arr.reduce(reduce, initialValue);

	console.log(result);
}





const fn1 = () => Promise.resolve(1);
const fn2 = () => new Promise(resolve => {
	setTimeout(() => resolve(2), 1000)
});
promiseReduce([fn1, fn2], (memo, value) => memo * value, 2);
/* => 4 */



