import { useNavigate } from "react-router-dom";
import React, { useMemo } from "react";
import { MaterialReactTable } from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';
import { useGetRoleByRoleIdQuery } from "./schedule.query";
import { DefaultPage } from "../../shared/default-page";
import { useAuth } from "../../shared/auth/use-auth";

export function Myreviews() {
  const navigate = useNavigate();
  const {session}=useAuth()
  const { data: roles, isLoading, isSuccess, isError, isFetching } = useGetRoleByRoleIdQuery(session?.userInfo?._id);
  const handleRowClick = (row: any) => {
    console.log("row",row)
    navigate(`/roles/detail/${row?.original.id}`);
  };
  const restaurantReviews = [
    {
      id: 1,
      comment: "The food was amazing! Highly recommended.",
      image: "https://example.com/images/review1.jpg",
      rating: 4.5,
      time: "2 months ago"
    },
    {
      id: 2,
      comment: "Great service and delicious dishes.",
      image: "https://example.com/images/review2.jpg",
      rating: 4.0,
      time: "2 hours ago"
    },
    {
      id: 3,
      comment: "The ambiance was perfect, and the staff was friendly.",
      image: "https://example.com/images/review3.jpg",
      rating: 4.8,
      time: "1 week ago"
    },
    // Add more reviews as needed
  ];
  
  
 

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
 <DefaultPage title={"Reviews"} backButtonLink="/orders"  
  /* primaryButtonProps={{
      children: "New",
      onClick: () => {
        navigate("/orders/new")
      },
    }}  */>
  <div>
  <MaterialReactTable
        columns={columns}
        data={restaurantReviews ?? []}
      
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

      
  