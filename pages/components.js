import React, { useState } from "react";
import List from "@/components/List";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";

const components = () => {

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [selected, change] = useState();
  const triggerElement = <p>드롭다운 선택한 값 : {selected}</p>;


  const [checkSelected, checkSelectedChange] = useState();
  const checkboxTrigger = <p>체크박스 선택한 값 : {checkSelected}</p>;

  return (
    <div>
      <br/>
      <br/>
      <h1>컴포넌트 모듈</h1>
      <br/>
      <br/>

      <h1>Select Dropdown</h1>
      <Select trigger={triggerElement} value={selected} onChange={change} options={options} />

      <br/>
      <br/>
      <h1>Checkbox</h1>
      <Checkbox trigger={checkboxTrigger} value={checkSelected} onChange={checkSelectedChange} options={options} />

    </div>
  );
};

export default components;
