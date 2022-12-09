import logo from "./logo.svg";
import "./App.css";
import _, { divide } from "lodash";

function App() {
  const myArray = [1, 2, 3];
  const myArray2 = [1, 2, 4];
  const array = [1, 2, 3, 3];
  let products = [
    { product: "banana", hasGMO: true },
    { product: "apple", hasGMO: false },
    { product: "orange", hasGMO: false },
  ];
  let products2 = {
    banana: { hasGMO: true },
    apple: { hasGMO: false },
    orange: { hasGMO: false },
  };
  const bodlogo1 = _.difference(myArray, myArray2);
  const bodlogo2 = _.differenceBy(
    products,
    [{ product: "banana", hasGMO: true }],
    "product",
    "hasGMO"
  );
  const bodlogo3 = _.dropRightWhile(products, function (o) {
    return !o.hasGMO;
  });
  const bodlogo4 = _.fill(array, 0);
  const bodlogo5 = _.intersectionWith(myArray, myArray2, _.isEqual);
  const bodlogo6 = _.union(myArray, myArray2);
  const bodlogo7 = _.xor(myArray, myArray2);
  const bodlogo8 = _.isEqual([1, "1"]);
  const bodlogo9 = _.max(myArray2);
  const bodlogo10 = _.sum(myArray);
  const bodlogo11 = _.random(0, 5);
  const bodlogo12 = _.concat({ a: 1 }, { b: 2 });
  const bodlogo13 = _.findKey(products2, "hasGMO", false);
  const bodlogo14 = _.keys(products2);

  return (
    <div>
      <p>{JSON.stringify(bodlogo1)}</p>
      <p>{JSON.stringify(bodlogo2)}</p>
      <p>{JSON.stringify(bodlogo3)}</p>
      <p>{JSON.stringify(bodlogo4)}</p>
      <p>{JSON.stringify(bodlogo5)}</p>
      <p>{JSON.stringify(bodlogo6)}</p>
      <p>{JSON.stringify(bodlogo7)}</p>
      <p>{JSON.stringify(bodlogo8)}</p>
      <p>{JSON.stringify(bodlogo9)}</p>
      <p>{JSON.stringify(bodlogo10)}</p>
      <p>{JSON.stringify(bodlogo11)}</p>
      <p>{JSON.stringify(bodlogo12)}</p>
      <p>{JSON.stringify(bodlogo13)}</p>
      <p>{JSON.stringify(bodlogo14)}</p>
    </div>
  );
}

export default App;
