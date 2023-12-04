import React, { useState } from "react";
import List from "@/components/List";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import Test from "@/components/Test";

const components = () => {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [selected, change] = useState();
  const triggerElement = <p>드롭다운 선택한 값 : {selected}</p>;
  // const triggerElement2 = <BottomPrivatePrivacy param={selected} />;
  console.log(`components called..... `);

  const [selectedValues, setSelectedValues] = useState([]);
  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };
  const checkboxTrigger = <p>체크박스 선택한 값 : {selectedValues}</p>;

  return (
    <div>
      <br />
      <br />
      <h1>컴포넌트 모듈</h1>
      <br />
      <br />
      <Test as="ul">
        <li>asdf</li>
        <li>qwer</li>
      </Test>

      <h1>Select Dropdown</h1>
      <Select trigger={triggerElement} value={selected} onChange={change} options={options} />

      <br />
      <br />
      <h1>Select Dropdown2</h1>
      <Select trigger={<>qqq{selected}qqq</>} value={selected} onChange={change} options={options} />

      <br />
      <br />
      <h1>Checkbox</h1>
      <Checkbox trigger={checkboxTrigger} value={selectedValues} onChange={handleCheckboxChange} options={options} />
    </div>
  );
};

export default components;
