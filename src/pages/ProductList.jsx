import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button, Stack } from "@mui/material";
import DataTable from "react-data-table-component";
// import ReactDOM from 'react-dom';
import { DataGrid } from '@mui/x-data-grid';
import './product.css'
// import { useState } from "react";

function ProductList(){

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'bookName', headerName: 'Book name', width: 130 },
        { field: 'authorName', headerName: 'Author name', width: 130 },
        {
          field: 'price',
          headerName: 'Price',
          type: 'number',
          width: 120,
        },
        {
          field: 'modify',
          headerName: 'Modify',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          renderCell: (params) => (
            <>
            <Button className="product_edit_btn" variant="outlined" color="primary">Edit</Button>
            <Button variant="outlined" color="error">Delete</Button>
            </>
          ),
        //   valueGetter: (params) =>
        //     `${params.row.bookName || ''} ${params.row.authorName || ''}`,
        // 
        },
      ];
      
      const rows = [
        { id: 1, authorName: 'Author 1', bookName: 'Book 1', price: 1000 },
        { id: 2, authorName: 'Author 2', bookName: 'Book 2', price: 1000 },
        { id: 3, authorName: 'Author 3', bookName: 'Book 3', price: 1000 },
        { id: 4, authorName: 'Author 4', bookName: 'Book 4', price: 1000 },
        { id: 5, authorName: 'Author 5', bookName: 'Book 5', price: 1000 },
        { id: 6, authorName: 'Author 6', bookName: 'Book 6', price: 10000 },
        { id: 7, authorName: 'Author 7', bookName: 'Book 7', price: 1000 },
        { id: 8, authorName: 'Author 8', bookName: 'Book 8', price: 1000 },
        { id: 9, authorName: 'Author 9', bookName: 'Book 9', price: 1000 },
      ];

   return(
    <>
        <Header/>
        <div className="title_container">
                <Stack direction="column" className="title_stack">
                    <div className="title_underline">
                        <h1>Product Page</h1>
                    </div>
                </Stack>
                <Stack className="product_list_table_container">
                    <div className="product_list_table" style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            fixHeader
                            fixedHeaderScrollHeight="40px"
                            
                          rows={rows}
                          columns={columns}
                          initialState={{
                            pagination: {
                              paginationModel: { page: 0, pageSize: 5 },
                            },
                          }}
                          pageSizeOptions={[5, 10]}
                        //   checkboxSelection
                        />
                   </div>
                </Stack>
            </div>
        <Footer/>

    </>
   );
}

export default ProductList;

/*
function DemoComp(){
    return(
        <>
            Demo
        </>
    );
}
*/