import React, { useState, useEffect } from "react";

const Select = ({ data, result, setresult }) => {
  const [select, setselect] = useState("");
  const [input, setinput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  function selectcity(e) {
    const selectedOption = e.target.value;
    setselect(selectedOption);
    if (selectedOption === "台北市") {
      setresult([...data]);
      // console.log(result)
    } else {
      setresult([]);
      // console.log(result)
    }
  }

  function inputgo(e) {
    const userInput = e.target.value;
    setinput(userInput);
    if (userInput === "台北市") {
      setresult([...data]);
      console.log(result);
    } else if (userInput !== "") {
      const filteredData = data.filter((item) => item.sna === userInput);
      setresult(filteredData);
      // console.log(result);
    } else {
      setresult([]);
      // console.log(result);
    }
  }
  function selectall(e) {
    const allcheck = e.target.checked;
    setIsChecked(allcheck);
    if (allcheck) {
      setresult([...data]);
    //   console.log(result);
    } else {
      setresult([]);
    //   console.log(result);
    }
  }
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const filteredData = data.filter((item) => item.sarea === value);
    if (checked) {
    //   console.log(data);
    //   console.log(result);
      setresult((prevItems) => [...prevItems, ...filteredData]);
      // setresult((prevItems) => [...prevItems, value]);
    } else {
      // setresult((prevItems) => prevItems.filter((item) => item === filteredData));
      setresult((prevItems) => prevItems.filter((item) => item.sarea !== value));
    }
  };

  useEffect(() => {}, [data,result, input, select, isChecked,setresult]);
  return (
    <div>
      <h2 style={{ marginTop: "32px", marginBottom: "32px", color: "#B5CC22" }}>
        站點資訊
      </h2>
      <select
        className="selectphone"
        onChange={selectcity}
        style={{
          marginRight: "16px",
          background: "#F6F6F6",
          borderRadius: "8px",
          width: "175px",
          height: "40px",
          color: "#323232",
          fontSize: "18px",
        }}
      >
        <option value="" disabled>
          請選擇區域
        </option>
        <option value="台北市">台北市</option>
        <option value="台北市">台北市</option>
        <option value="新竹科學園區">新竹科學園區</option>
        <option value="台北市">台北市</option>
        <option value="台北市">台北市</option>
      </select>
      <input
        className="selectphone"
        onChange={inputgo}
        type="text"
        placeholder="搜尋站點"
        list="datalistoption"
        style={{ width: "277px", height: " 40px", fontSize: " 18px" }}
      />
      <datalist id="datalistoption">
        <option value="台北市">台北市</option>
        <option value="台北市">台北市</option>
        <option value="台北市">台北市</option>
        <option value="新竹科學園區">新竹科學園區</option>
        <option value="新竹科學園區">新竹科學園區</option>
        <option value="台北市">台北市</option>
        <option value="台北市">台北市</option>
      </datalist>
      <div className="checkboxwrap">
        <div className="all">
          <input
            type="checkbox"
            value="全選"
            checked={isChecked}
            onChange={selectall}
          />
          <p>全選</p>
        </div>
        <div className="otheroption">
          <div className="optionwrap">
            <input
              type="checkbox"
              value="松山區"
              onChange={handleCheckboxChange}
            />
            <p>松山區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="北投區"
              onChange={handleCheckboxChange}
            />
            <p>北投區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="士林區"
              onChange={handleCheckboxChange}
            />
            <p>士林區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="中山區"
              onChange={handleCheckboxChange}
            />
            <p>中山區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="大同區"
              onChange={handleCheckboxChange}
            />
            <p>大同區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="萬華區"
              onChange={handleCheckboxChange}
            />
            <p>萬華區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="中正區"
              onChange={handleCheckboxChange}
            />
            <p>中正區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="大安區"
              onChange={handleCheckboxChange}
            />
            <p>大安區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="信義區"
              onChange={handleCheckboxChange}
            />
            <p>信義區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="南港區"
              onChange={handleCheckboxChange}
            />
            <p>南港區</p>
          </div>
          <div className="optionwrap">
            <input
              type="checkbox"
              value="文山區"
              onChange={handleCheckboxChange}
            />
            <p>文山區</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
