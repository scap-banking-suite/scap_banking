// TableComponent.tsx
import React, { ReactNode } from "react";

type Header = {
  content: ReactNode; // Text, icon, or any JSX content
  align?: "left" | "center" | "right"; // Optional alignment
};

type TableProps<T> = {
  headers: Header[]; // Array of header names or JSX elements
  data: T[]; // Array of data items
  renderRow: (item: T, index: number) => ReactNode; // Custom render function for table rows
};

// style={{
//     boxShadow: "0px 2px 2px 0px rgba(34, 34, 34, 0.10);",
//      fontFamily: "JetsNorm"
//   }}

const TableComponent = <T,>({ headers, data, renderRow }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto scrollableCSS">
      <table className="min-w-full table-auto tabling">
        <thead className="text-left ">
          <tr className="bg-white text-darkBlue text-sm ">
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 border-b text-nowrap">
                {header?.content}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((item, index) => renderRow(item, index))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
