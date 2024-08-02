import { useState, useEffect, useContext } from "react";

import { Table, notification } from "antd";

import { AppContext } from "../../../contexts/AppContext";
import { DatasetItem } from "../../../api/result.api";

import { EditableRow } from "./EditableRow";
import { EditableCell } from "./EditableCell";

import * as XLSX from "xlsx";

export interface Item {
  key: string;
  ID: number;
  englishName: string;
  urduName: string;
  akaEnglish: string;
  akaUrdu: string;
  organizations: string;
  designations: string;
  relationships: string;
  primarySecondary: string;
}

export type DataType = Item;
export type EditableTableProps = Parameters<typeof Table>[0];
export type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

export const PreviewTable = () => {
  const { dataset } = useContext(AppContext);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  useEffect(() => {
    if (dataset) {
      const transformedData = dataset.map(
        (item: DatasetItem, index: number) => ({
          ...item,
          key: (index + 1).toString(),
        })
      );
      setDataSource(transformedData);
    }
  }, [dataset]);

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: keyof Item;
  })[] = [
    {
      title: "Serial Number",
      dataIndex: "key",
      key: "Serial",
      width: 130,
      align: "center",
    },
    {
      title: "English Name",
      dataIndex: "englishName",
      key: "English Name",
      align: "center",
      editable: true,
    },
    {
      title: "Urdu Name",
      dataIndex: "urduName",
      key: "Urdu Name",
      align: "center",
      editable: true,
    },
    {
      title: "AKA (English)",
      dataIndex: "akaEnglish",
      key: "AKA (English)",
      align: "center",
      editable: true,
    },
    {
      title: "AKA (Urdu)",
      dataIndex: "akaUrdu",
      key: "AKA (Urdu)",
      align: "center",
      editable: true,
    },
    {
      title: "Organization",
      dataIndex: "organizations",
      key: "Organization",
      align: "center",
      editable: true,
    },
    {
      title: "Designation",
      dataIndex: "designations",
      key: "Designation",
      align: "center",
      editable: true,
    },
    {
      title: "Relationship",
      dataIndex: "relationships",
      key: "Relationship",
      align: "center",
      editable: true,
    },
    {
      title: "Primary/Secondary",
      dataIndex: "primarySecondary",
      key: "Primary/Secondary",
      align: "center",
      editable: true,
    },
  ];

  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const exportToExcel = () => {
    console.log("Exporting to Excel...");
    const worksheet = XLSX.utils.json_to_sheet(dataSource);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Preview Data");
    XLSX.writeFile(workbook, "preview_data.xlsx");

    notification.success({
      message: "Export Successful",
      description: "The table data has been successfully exported.",
    });
  };

  return (
    <>
      <Table
        components={components}
        size="middle"
        dataSource={dataSource}
        columns={columns as ColumnTypes}
      />
      <div id="export-button" onClick={exportToExcel}></div>
    </>
  );
};
