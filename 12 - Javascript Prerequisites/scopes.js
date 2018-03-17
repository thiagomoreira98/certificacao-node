// var a = 10;

// function escopo() {
//     var a = 'ARRAY';

//     console.log(a);
// }

// escopo();

// console.log(a);

// var foo = true;

// if (foo) {
// 	let bar = foo * 2;
//     bar = 10 * bar;
// 	//bar = something( bar );
// 	console.log( bar );
// }

// console.log( bar ); // ReferenceError

for (/*var*/let i=0; i<10; i++) {
	console.log( i );
}

console.log( i ); // ReferenceError

