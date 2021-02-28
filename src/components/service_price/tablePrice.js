import React from "react";
import { Table } from "react-bootstrap";
import numberWithSpaces from "../../service/numberWithSpaces";

const TablePrice = ({ data }) => {
  return (
    <Table bordered className="text-center">
      <tbody>
        {data.map((data) => {
          const { id, title, price } = data;
          return (
            <tr key={id}>
              <td className="col-auto p-4 font-weight-bold service">{title}</td>
              <td className="col-4 p-4">
                от{" "}
                <span className="font-weight-bold price">
                  {numberWithSpaces(price)}
                </span>{" "}
                руб.
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TablePrice;
