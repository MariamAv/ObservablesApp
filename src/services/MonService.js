import { BehaviorSubject } from "rxjs";

const data = "Donald";
const data2 = "Trump";

class MonService {
  _sub = new BehaviorSubject("");
  obs = this._sub.asObservable();

  getData = () => {
    this._sub.next(data);
    setTimeout(() => {
      this._sub.next(data2);
    }, 5000);
  };
}

export default Object.freeze(new MonService());
