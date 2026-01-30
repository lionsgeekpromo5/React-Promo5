import { useState } from "react";
import Navbar from "../../components/Navbar";

function Home() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const AddStudent = () => {
    if (inputValue != "") {
      const newList = [...list];

      newList.push(inputValue);

      setList(newList);
      setInputValue("");
    }
  };
  console.log(list);

  return (
    <div className="w-screen h-screen flex flex-col gap-y-5 bg-cyan-400 p-10">
      <Navbar />
      <div className="flex items-center gap-x-4 h-fit">
        <input
          type="text"
          placeholder="Enter Student Name"
          value={inputValue}
          className="bg-white w-100 px-2 py-4 rounded-md border-black border-2"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-2 py-4 rounded-xl"
          onClick={AddStudent}
        >
          Add Student
        </button>
      </div>
      {list.length > 0 && list.map((e, index) => (
        <div key={index} className=" p-2 rounded-full bg-white">
          <h1>
            <span className="text-md font-bold">StudentName</span>: {e}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Home;
