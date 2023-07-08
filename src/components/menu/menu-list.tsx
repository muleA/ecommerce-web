import { useNavigate } from "react-router-dom";
import React, { useMemo } from "react";
import { MaterialReactTable } from 'material-react-table';
import { MRT_ColumnDef } from 'material-react-table';
import { useGetRoleByRoleIdQuery } from "./menu.query";
import { DefaultPage } from "../../shared/default-page";
import { useAuth } from "../../shared/auth/use-auth";

export function MyMenuLists() {
  const navigate = useNavigate();
  const {session}=useAuth()
  const { data: roles, isLoading, isSuccess, isError, isFetching } = useGetRoleByRoleIdQuery(session?.userInfo?._id);
  const handleRowClick = (row: any) => {
    console.log("row",row)
    navigate(`/menus/detail/${row?.original.id}`);
  };

  const ethiopianDishes = [
    {
      id: 1,
      name: 'Doro Wat',
      description: 'Spicy chicken stew with berbere spice',
      price: 12.99,
      image: 'https://example.com/doro-wat.jpg',
    },
    {
      id: 2,
      name: 'Injera',
      description: 'Spongy sourdough flatbread',
      price: 2.99,
      image: 'https://example.com/injera.jpg',
    },
    {
      id: 3,
      name: 'Kitfo',
      description: 'Minced raw beef seasoned with spices',
      price: 14.99,
      image: 'https://example.com/kitfo.jpg',
    },
    {
      id: 4,
      name: 'Tibs',
      description: 'Grilled meat sautéed with onions and spices',
      price: 10.99,
      image: 'https://example.com/tibs.jpg',
    },
    {
      id: 5,
      name: 'Shiro',
      description: 'Spiced chickpea or lentil stew',
      price: 8.99,
      image: 'https://example.com/shiro.jpg',
    },
    // Add more Ethiopian dishes as needed
  ];
  

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'image',
        header: ' Image',
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
        accessorKey: 'price',
        header: ' price',
      },
 
   
     
    ],
    []
  );

  return (
    <>
 <DefaultPage title={"Menus"} backButtonLink="/menus"  
   primaryButtonProps={{
      children: "New",
      onClick: () => {
        navigate("/menus/new")
      },
    }}  >
  <div>
  <MaterialReactTable
        columns={columns}
        data={ethiopianDishes ?? []}
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

      
  