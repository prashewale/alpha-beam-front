import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Product } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, Eye, MoreHorizontal, Trash2 } from 'lucide-react';
import CreateUpdateProductDialog from './create-update-product';
import { useState } from 'react';
import { useDeleteProduct } from '@/lib/react-query/queries';

export const columns: ColumnDef<Product>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && 'indeterminate')
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;
      const [openUpdateProduct, setOpenUpdateProduct] = useState(false);

      const { mutate: deleteProduct, isPending: isDeleteLoading } =
        useDeleteProduct();

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setOpenUpdateProduct(true)}
              >
                <Edit className="mr-2 h-3.5 w-3.5 text-slate-400" />
                Edit
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  window.location.href = `/products/${product._id}`;
                }}
              >
                <Eye className="mr-2 h-3.5 w-3.5 text-slate-400" />
                View
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer text-red-500"
                onClick={() => {
                  if (
                    confirm('Are you sure you want to delete this product?')
                  ) {
                    deleteProduct(product._id);
                  }
                }}
              >
                <Trash2 className="mr-2 h-3.5 w-3.5 text-red-500" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <CreateUpdateProductDialog
            product={product}
            action="Update"
            setOpen={setOpenUpdateProduct}
            open={openUpdateProduct}
          />
        </>
      );
    },
  },
  {
    accessorKey: 'images',
    header: '',
    cell: ({ row }) => {
      const images = row.getValue<string[]>('images');
      const imageUrl = images.length > 0 ? images[0] : '';
      return (
        <div className="w-20">
          <img src={imageUrl} />
        </div>
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="w-[200px] text-left">{row.getValue('name')}</div>;
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.getValue<string>('description');
      const shortDescriptionLength = 100;
      const shortDescription =
        description.length > shortDescriptionLength
          ? description.slice(0, shortDescriptionLength) + '...'
          : description;

      return <div className="w-[300px] text-left">{shortDescription}</div>;
    },
  },
  {
    accessorKey: 'price',
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue<string>('price'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'category',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue('category')}</div>;
    },
  },
  {
    accessorKey: 'rating',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue('rating')}</div>;
    },
  },
  {
    accessorKey: 'brand',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Brand
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue('brand')}</div>;
    },
  },
];
