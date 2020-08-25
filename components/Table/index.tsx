import React, { useState } from "react";
import styled from "styled-components";

const Tr = styled.tr`
  background: ${({ highlighted }) => (highlighted ? "red" : "")};
`;

export default function Table({ headings = [], data, setSortBy }) {

  const tableHeadings = headings.map((heading) => (
    <th onClick={() => setSortBy(heading.toLowerCase())}> {heading} </th>
  ));
  const tableData = data.map(({ score, student }) => (
    <Tr highlighted={score < 35}>
      <td> {student} </td>
      <td> {score} </td>
    </Tr>
  ));

  return (
    <table>
      {tableHeadings}
      {tableData}
    </table>
  );
}
