import Rx from 'rxjs'

let source1 = Rx.Observable.create(observer => {
  observer.next('xx')
  setTimeout(() => {
    observer.complete()
  }, 10000)
})


let source2 = Rx.Observable.from([1, 2, 3])

let source3 = source1.concat(source2)

source3.subscribe(d => console.log(d))
