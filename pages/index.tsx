import React, { useState } from "react";
import styled from "styled-components";
import Table from "../components/Table";
import rawStudentData from "../data/data.json";

const Page = () => {
  const headings = ["Student", "Score"];
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [asc, setAsc] = useState(true);

  const data = rawStudentData
    .map((val) => {
      return {
        student: `${val.firstName} ${val.lastName}`,
        score: val.lessonScore,
      };
    })
    .filter((val) => {
      return val.student.toLowerCase().includes(filter.toLowerCase());
    })
    .sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return asc ? 1 : -1;
      } else {
        return asc ? -1 : 1;
      }
    });

  return (
    <div>
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <Table headings={headings} data={data} setSortBy={setSortBy} />
    </div>
  );
};

export default Page;
