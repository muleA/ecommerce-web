import { useNavigate } from "react-router-dom";
import React, { useMemo } from "react";
import { MaterialReactTable } from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';
import { DefaultPage } from "../../shared/default-page";
import { useAuth } from "../../shared/auth/use-auth";
import { useGetOrdersQuery } from "../../querys/ecommerce-query";

export function MyOrderList() {
  const navigate = useNavigate();
  const {session}=useAuth()
  const { data: roles, isLoading, isSuccess, isError, isFetching } = useGetOrdersQuery(session?.userInfo?._id);
  const handleRowClick = (row: any) => {
    console.log("row",row)
    navigate(`/order/detail/${row?.original.id}`);
  };

 

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'coupon',
        header: ' coupon',
      },
      {
        accessorKey:'user',
        header:"User",
      },
      {
        accessorKey: 'specialRequest',
        header: ' specialRequest',
      },
      {
        accessorKey: 'description',
        header: ' Description',
      },
      {
        accessorKey: 'quantity',
        header: ' quantity',
      },
 
      {
        accessorKey: 'orderStatus',
        header: 'Status',
      },
 
     
    ],
    []
  );
  const foodOrders = [
    {
      id: '1',
      userName: 'John',
      coupon: 'ABC123',
      specialRequest: 'No onions',
      description: 'Cheeseburger',
      quantity: 2,
      orderStatus: 'Pending',
    },
    {
      id: '2',
      userName: 'Alice',
      coupon: 'DEF456',
      specialRequest: 'Extra spicy',
      description: 'Chicken curry',
      quantity: 1,
      orderStatus: 'In progress',
    },
    {
      id: '3',
      userName: 'Bob',
      coupon: '',
      specialRequest: '',
      description: 'Margherita pizza',
      quantity: 3,
      orderStatus: 'Delivered',
    },
    {
      id: '4',
      userName: 'Emily',
      coupon: '',
      specialRequest: 'Gluten-free',
      description: 'Pasta primavera',
      quantity: 1,
      orderStatus: 'Cancelled',
    },
    {
      id: '5',
      userName: 'Mike',
      coupon: 'GHI789',
      specialRequest: 'No cilantro',
      description: 'Taco salad',
      quantity: 2,
      orderStatus: 'Out for delivery',
    },
  ];
  
  
  

  return (
    <>
 <DefaultPage title={"Orders"} backButtonLink="/orders"  
  /* primaryButtonProps={{
      children: "New",
      onClick: () => {
        navigate("/orders/new")
      },
    }}  */>
  <div>
  <MaterialReactTable
        columns={columns}
        data={foodOrders ?? []}
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

      
  