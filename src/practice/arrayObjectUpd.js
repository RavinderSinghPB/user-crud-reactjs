import { useState} from "react";

function App() {
  let pdata = [
    { name: "A", age: 15 },
    { name: "B", age: 35 },
    { name: "C", age: 418 },
  ];
  const [data, setData] = useState(pdata);

  // function incage(idx) {
  //   let newData = data;
  //   newData[idx].age =45
  //   setData([...newData]);
  // }
  // function dage(idx) {
  //   let newData = data;
  //   newData[idx].age =20
  //   setData([...newData]);
  // }

  function incage(name) {
    let newData = data;
    let idx = newData.findIndex((item) => item.name === name);
    newData[idx].age = 45;
    setData([...newData]);
  }
  function dage(name) {
    let newData = data;
    let idx = newData.findIndex((item) => item.name === name);
    newData[idx].age = 20;
    setData([...newData]);
  }

  return (
    <div className="App">
      {/* filter age grt 25 */}
      {data
        .filter((item) => item.age > 30)
        .map((item, index) => (
          <div key={index}>
            <button onClick={(e) => dage(item.name)}>{item.name} {item.age}</button>
          </div>
        ))}

      <p>ddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>

      {data
        .filter((item) => item.age <= 30)
        .map((item, index) => (
          <div key={index}>
            <button onClick={(e) => incage(item.name)}>{item.name} {item.age}</button>
          </div>
        ))}
    </div>
  );
}

export default App;
