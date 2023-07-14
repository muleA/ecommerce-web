import { useNavigate } from "react-router-dom";
import React, { useMemo } from "react";
import { MaterialReactTable } from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';
import { DefaultPage } from "../../shared/default-page";
import { useAuth } from "../../shared/auth/use-auth";
import { useGetReviewsQuery } from "../../querys/ecommerce-query";

export function Myreviews() {
  const navigate = useNavigate();
  const restaurantId=localStorage.getItem('restaurantId')
  const { data: reviews, isLoading, isError, isFetching } = useGetReviewsQuery(restaurantId as string);
  const handleRowClick = (row: any) => {
    console.log("row",row)
    navigate(`/roles/detail/${row?.original.id}`);
  };
 
  
  
 

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'comment',
        header: ' comment',
      },
      {
        accessorKey: 'image',
        header: ' image',
      },
      {
        accessorKey: 'rating',
        header: ' rating',
      },
      {
        accessorKey: 'time',
        header: ' time',
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
        data={reviews ?? []}
      
        muiTablePaginationProps={{
          rowsPerPageOptions: [5, 10, 15, 25, 50, 100, 1000],
        }}
        enableGrouping
        enablePagination
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

      
  