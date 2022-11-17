import { useState } from "react";
import Button from "./components/Button/index";
import Alert from "./components/Alert/index";

function App() {
  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState("");
  const tambah = () => {
    count == 10 ? setAlert("Melebihi batas Maxsimum") : setAlert("");
    count != 10 ? setCount(count + 1) : setCount(count);
  };
  const kurang = () => {
    count == 0 ? setAlert("Melebihi batas Minimum") : setAlert("");
    count != 0 ? setCount(count - 1) : setCount(count);
  };
  return (
    <div className="App">
      <h1 className="font-bold text-2xl">React Tailwind</h1>
      <h2>{count}</h2>
      <Alert teks={alert} />
      <Button
        onClick={tambah}
        teks="tambah"
        className="p-2 rounded-md bg-blue-500"
      />
      <Button
        onClick={kurang}
        teks="kurang"
        className="p-2 rounded-md bg-red-500 ml-2"
      />
    </div>
  );
}

export default App;
