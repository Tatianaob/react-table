
import './App.css';
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";
//hooks that controls table

function App() {
  const data =  React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() => [
  {
    Header: "ID", //labeling purposes
    accessor: "id", //getting the data
  },

  {
    Header: "First name", 
    accessor: "first_name", 
  },

  {
    Header: "Last name", 
    accessor: "last_name", 
  },

  {
    Header: "Email", 
    accessor: "email", 
  },

  {
    Header: "Gender", 
    accessor: "gender", 
  },

  {
    Header: "University", 
    accessor: "university",
  }
], []);
  // const table = useTable({columns, data});
  const { getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({columns, data});
  

  return (
    <div className="App">
      <div className='container'></div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
}

export default App;
