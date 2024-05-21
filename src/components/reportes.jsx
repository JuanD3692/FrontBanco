import React from 'react';
import ExcelJS from 'exceljs';

class ExcelExport extends React.Component {
  exportToExcel = async () => {
    const { data, headers, sheetName, fileName, title } = this.props;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(sheetName);

    // Establecer el mismo ancho para todas las columnas
    worksheet.columns = headers.map((header) => ({
      header,
      key: header,
      width: 20, // Ancho de todas las columnas
    }));

    // Aplicar estilos de tabla a todas las filas
    worksheet.eachRow((row, rowNumber) => {
      // Aplicar estilos de fila alternos (gris y blanco)
      if (rowNumber % 2 === 0) {
        row.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'EFEFEF' }, // Color de fondo gris
        };
      } else {
        row.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFFFF' }, // Color de fondo blanco
        };
      }

      row.eachCell((cell) => {
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });

    // Aplicar estilos a las celdas de encabezado
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true, size: 16 }; // Tamaño de fuente grande en los encabezados
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '007bff' }, // Color de fondo azul
      };
      cell.font = {
        color: { argb: 'FFFFFF' }, // Color del texto blanco
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    // Agregar datos a la hoja de cálculo
    data.forEach((rowData) => {
      const row = worksheet.addRow(rowData);
      row.eachCell((cell) => {
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
      });
    });

    // Crear un archivo XLSX
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  render() {
    return (
      <div>
        <button className="export-button btn w-100" onClick={this.exportToExcel}>
         {this.props.title} <img width="30" height="30" src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" alt="microsoft-excel-2019--v1"/>
        </button>
      </div>
    );
  }
}

export default ExcelExport;
