import React, { useState } from "react";
import { Input } from "antd";
const { Search } = Input;
import { Avatar, List } from "antd";
import employeeData from "../js-data/employeeData";
const ContactSearch = () => {
  const [filterdData, setFilterdData] = useState(employeeData);
  const handleSearch = function (val) {
    const lower = val.toLowerCase();

    const arr = employeeData.filter((emp) => {
      return (
        emp.name.toLowerCase().includes(lower) ||
        emp.title.toLowerCase().includes(lower)
      );
    });
    setFilterdData(arr);
  };
  return (
    <div className="px-5 py-10 flex flex-col items-center w-[92%] sm:w-[60%] lg:w-[50%] border border-stone-200 m-auto my-10 rounded-xl">
      <SearchBox onSearch={handleSearch} />
      <SearchList data={filterdData} />
    </div>
  );
};

function SearchBox({ onSearch }) {
function onChange(e){
    onSearch(e.target.value)
}
  return (
    <Input
      style={{ width: "100%", marginBottom: "1rem" }}
      size="large"
      variant="outlined"
      placeholder="Enter member's name/title"
      allowClear
      onChange={onChange}
    />
  );
}


const { Item } = List;
const { Meta } = Item;
function SearchItem({ data }) {
  return (
    <Item
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Meta
        avatar={<Avatar src={data.profilePicture} />}
        title={data.name}
        description={data.title}
      />
    </Item>
  );
}

function SearchList({ data }) {
  return (
    <List
      style={{ width: "100%", height: 500, overflow: "auto" }}
      dataSource={data}
      renderItem={(item) => <SearchItem data={item} />}
    />
  );
}




export default ContactSearch;