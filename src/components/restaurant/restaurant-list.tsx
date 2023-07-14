import { useNavigate } from "react-router-dom";
import React, { useMemo } from "react";
import { MaterialReactTable } from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';
import { DefaultPage } from "../../shared/default-page";
import { Typography } from "antd";
import timeSince from "../../shared/utilities/time-since";
import { useGetRestaurantsQuery } from "../../querys/ecommerce-query";

export function MyRestaurants() {
  const navigate = useNavigate();
  const { data: menus, isLoading, isError, isFetching } = useGetRestaurantsQuery("0");
  const handleRowClick = (row: any) => {
    console.log("row",row)
    navigate(`/restaurants/detail/${row?.original._id}`);
  };



  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'logo',
        header: 'Logo',
        accessorFn: (originalRow) => (
          <Typography style={{width:"50px",height:"70px"}}>
{originalRow?.logo}
          </Typography>
        ),
      },
      {
        accessorKey: 'name',
        header: ' Name',
      },
      {
        accessorKey: 'description',
        header: ' Description',
      },
      {
        accessorKey: 'phoneNumber',
        header: ' Phone Number',
      },
      {
        accessorKey: 'state',
        header: ' Status',
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
 <DefaultPage title={""} backButtonLink="/"  
   primaryButtonProps={{
      children: "New",
      onClick: () => {
        navigate("/restaurants/new")
      },
    }}  >
  <div>
  <MaterialReactTable
        columns={columns}
        data={menus?.data?.restaurants ?? []}
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

      
  