import { useNavigate } from "react-router-dom";
import React, { useMemo } from "react";
import { MaterialReactTable } from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';
import { DefaultPage } from "../../shared/default-page";
import { useAuth } from "../../shared/auth/use-auth";
import {  useGetOrdersQuery } from "../../querys/ecommerce-query";

export function MyOrderList() {
  const navigate = useNavigate();
  const {session}=useAuth()
  const { data: orders, isLoading, isSuccess, isError, isFetching } = useGetOrdersQuery("0");
  const handleRowClick = (row: any) => {
    console.log("row",row)
    navigate(`/order/detail/${row?.original._id}`);
  };

 

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'code',
        header: ' code',
      },
      {
        accessorKey:'amount',
        header:"amount",
      },
      {
        accessorKey: 'deliveryCharge',
        header: ' deliveryCharge',
      },
      {
        accessorKey: 'orderdBy',
        header: ' orderdBy',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
 
     
    ],
    []
  );

  
  
  

  return (
    <>
 <DefaultPage title={""} backButtonLink="/orders"  
  /* primaryButtonProps={{
      children: "New",
      onClick: () => {
        navigate("/orders/new")
      },
    }}  */>
  <div>
  <MaterialReactTable
        columns={columns}
        data={orders?.data?.orders ?? []}
        muiTableBodyRowProps={({ row }) => ({
          onClick: () => handleRowClick(row),
          sx: {
            cursor: "pointer",
          },
        })}
        muiTablePaginationProps={{
          rowsPerPageOptions: [5, 10, 15, 25, 50, 100, 1000],
        }}
        enableGrouping
        enablePagination
        manualPagination
        state={{
          isLoading: isLoading,
          showAlertBanner: isError,
          showProgressBars: isFetching,
          density: "compact",
        }}
        enablePinning={true}
        muiToolbarAlertBannerProps={
          isError
            ? {
                color: "error",
                children: "Error loading data",
              }
            : undefined
        }
      />
  </div>

 </DefaultPage>

    </>
  );
}

      
  