import Rx from 'rxjs'

Rx.Observable
  .from(['Adrià', 'Jen', 'Sergi'])
  .subscribe(
    function (x) { console.log('Next: ' + x) },
    function (err) { console.log('Error:', err) },
    function () { console.log('Completed') }
  )
