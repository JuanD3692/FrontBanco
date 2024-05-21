import MUIDataTable from "mui-datatables";
import React,{useState} from "react";


const Table = ({columns,data,options,title}) => {
    return(
        <div>
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    )
}

export default Table;