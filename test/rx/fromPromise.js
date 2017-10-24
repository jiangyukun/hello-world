import Rx from 'rxjs'


let o = Rx.Observable.fromPromise(new Promise(resolve => resolve(2)))
o.subscribe(d => console.log(d))
o.map(d => d ** 3).subscribe(d => console.log(d))
