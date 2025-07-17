import React, { useState, useMemo } from "react";

interface Column {
  name: string;
  field: string | string[];
  hidden?: boolean;
  format?: 'date' | 'datetime' | 'uppercase' | 'lowercase';
}

interface TableProps {
  id: string;
  title: string;
  columns: Column[];
  data: { [key: string]: any }[];
  onRowClick?: (row: { [key: string]: any }) => void;
}


const getNestedValue = (obj: any, path: string): any =>
  path.split('.').reduce((acc, part) => acc?.[part], obj);

const capitalizeWords = (text: string): string =>
  text
    .split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");

const formatDate = (value: string, format: 'date' | 'datetime') => {
  const date = new Date(value);
  if (isNaN(date.getTime())) return value;

  const pad = (n: number) => String(n).padStart(2, '0');

  if (format === 'date') {
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  if (format === 'datetime') {
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  return value;
};

const Table: React.FC<TableProps> = ({ id, title, columns, data, onRowClick }) => {

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
  const rowsPerPage = 10;
 
  const filteredData = useMemo(() => {
    if (!search) return data;
 
    return data.filter(row =>
      columns.some(col => {
        if (col.hidden) return false;
        const rawValue = Array.isArray(col.field)
          ? col.field.map(f => getNestedValue(row, f)).join(" ")
          : getNestedValue(row, col.field);
 
        return rawValue?.toString().toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, data, columns]);
 
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, currentPage]);
 
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="table-responsive">
    <div className="d-flex justify-content-between align-items-center mb-3">
    <h5 className="mb-0">{title}</h5>
    <input
              type="text"
              className="form-control w-auto"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
    </div>
    
          <table id={id} className="table table-striped table-bordered">
    <thead>
    <tr>
                {columns.filter(col => !col.hidden).map((col, index) => (
    <th key={index}>{col.name}</th>
                ))}
    </tr>
    </thead>
    <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row, rowIndex) => {
                  const absoluteIndex = rowIndex + (currentPage - 1) * rowsPerPage;
    
                  return (
    <tr
                      key={rowIndex}
                      onClick={() => {
                        setSelectedRowIndex(absoluteIndex);
                        onRowClick?.(row);
                      }}
                      className={`${
                        rowIndex % 2 === 0 ? "bg-light" : ""
                      } ${selectedRowIndex === absoluteIndex ? "table-primary" : ""} hoverable-row`}
                      style={{ cursor: "pointer" }}
    >
                      {columns.filter(col => !col.hidden).map((col, colIndex) => {
                        const rawValue = Array.isArray(col.field)
                          ? col.field.map(f => getNestedValue(row, f)).filter(Boolean).join(" ")
                          : getNestedValue(row, col.field);
    
                        let displayValue = rawValue;
    
                        if (typeof displayValue === "string") {
                          if (col.format === 'date' || col.format === 'datetime') {
                            displayValue = formatDate(displayValue, col.format);
                          } else if (col.format === 'uppercase') {
                            displayValue = displayValue.toUpperCase();
                          } else if (col.format === 'lowercase') {
                            displayValue = displayValue.toLowerCase();
                          } else {
                            displayValue = capitalizeWords(displayValue);
                          }
                        }
    
                        return <td key={colIndex}>{displayValue}</td>;
                      })}
    </tr>
                  );
                })
              ) : (
    <tr>
    <td colSpan={columns.filter(col => !col.hidden).length} className="text-center">
                    No hay resultados
    </td>
    </tr>
              )}
    </tbody>
    </table>
    
          <div className="d-flex justify-content-between align-items-center mt-3">
    <small>
              Página {currentPage} de {totalPages || 1}
    </small>
    <div>
    <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
    >
                Anterior
    </button>
    <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
    >
                Siguiente
    </button>
    </div>
    </div>
    </div>
  );
};
 
export default Table;
