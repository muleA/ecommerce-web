import { useNavigate } from "react-router-dom";
import React, { useMemo } from "react";
import { MaterialReactTable } from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';
import { useGetMenusQuery } from "./menu.query";
import { DefaultPage } from "../../shared/default-page";
import { Typography } from "antd";
import timeSince from "../../shared/utilities/time-since";

export function MyMenuLists() {
  const navigate = useNavigate();
  const restaurantId=localStorage?.getItem('restaurantId')
  const { data: menus, isLoading, isError, isFetching } = useGetMenusQuery(restaurantId??"");
  const handleRowClick = (row: any) => {
    console.log("row",row)
    navigate(`/menus/detail/${row?.original._id}`);
  };



  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'image',
        header: 'Image',
        accessorFn: (originalRow) => (
          <Typography style={{width:"50px",height:"70px"}}>
<img src={originalRow?.image} alt=""/>
          </Typography>
        ),
      },
      {
        accessorKey: 'name',
        header: ' Name',
      },
     
      {
        accessorKey: 'createdAt',
        header: 'Registered',
        accessorFn: (originalRow) => (
          <Typography>
            {timeSince(originalRow?.createdAt)}
          </Typography>
        ),
      },
    ],
    []
  );

  return (
    <>
 <DefaultPage title={""} backButtonLink="/menus"  
   primaryButtonProps={{
      children: "New",
      onClick: () => {
        navigate("/menus/new")
      },
    }}  >
  <div>
  <MaterialReactTable
        columns={columns}
        data={menus?.data?.menus ?? []}
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

      
  