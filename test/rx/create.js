import Rx from 'rxjs'

let o = Rx.Observable.create((observer) => {
  observer.next([1, 3, 4, 8])
  observer.next('b')
})

o.subscribe(d => console.log(d))
o.subscribe(d => console.log(d))
