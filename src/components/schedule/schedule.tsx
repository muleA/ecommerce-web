import { useNavigate } from "react-router-dom";
import React, { useMemo } from "react";
import { MaterialReactTable } from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';
import { DefaultPage } from "../../shared/default-page";
import { useAuth } from "../../shared/auth/use-auth";
import { useGetSchedulesQuery } from "../../querys/ecommerce-query";

export function MySchedule() {
  const navigate = useNavigate();
  const {session}=useAuth()
  const { data: roles, isLoading, isSuccess, isError, isFetching } = useGetSchedulesQuery(session?.userInfo?._id);
  const handleRowClick = (row: any) => {
    console.log("row",row)
    navigate(`/schedule/detail/${row?.original.id}`);
  };
  const scheduleList = [
    {
      day: 'monday',
      openTime: '09:00',
      closeTime: '18:00',
    },
    {
      day: 'tuesday',
      openTime: '10:30',
      closeTime: '19:30',
    },
    {
      day: 'wednesday',
      openTime: '08:00',
      closeTime: '17:00',
    },
    // Add more schedule objects as needed
  ];
  
 

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'day',
        header: ' day',
      },
      {
        accessorKey: 'openTime',
        header: ' openTime',
      },
      {
        accessorKey: 'closeTime',
        header: ' closeTime',
      },
   
 
   
     
    ],
    []
  );

  return (
    <>
 <DefaultPage title={"Schedule"} backButtonLink="/orders"  
   primaryButtonProps={{
      children: "New",
      onClick: () => {
        navigate("/schedule/new")
      },
    }}  >
  <div>
  <MaterialReactTable
        columns={columns}
        data={scheduleList ?? []}
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

      
  