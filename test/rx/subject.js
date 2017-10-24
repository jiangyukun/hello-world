import Rx, {Subject} from 'rxjs'

const subject = new Subject();
const source2 = subject.map(val => `hello ${val}`);
const subscription = source1.subscribe(value => console.log(value));
subject.next('foo');
subscription.next('bar');
