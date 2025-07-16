interface TableProps {
  id: string;
  title: string;
  columns: string[];
  data: { [key: string]: string }[];
  onRowClick?: (row: { [key: string]: string }) => void;
}

const Table: React.FC<TableProps> = ({ id, title, columns, data, onRowClick }) => {
  return (
    <div className="table-responsive">
      <h5 className="mb-3">{title}</h5>
      <table id={id} className="table table-striped table-bordered">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                onClick={() => onRowClick?.(row)} 
                style={{ cursor: 'pointer' }}
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col.toLowerCase()]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No hay resultados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
