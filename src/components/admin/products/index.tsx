import { columns } from './columns';
import { DataTable } from './data-table';
import CreateUpdateProductDialog from './create-update-product';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Product } from '@/types';
import { useGetProducts } from '@/lib/react-query/queries';

const AdminProducts = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);

  const { data: productsListResponse, isFetching: isProductsFetching } =
    useGetProducts();

  const productsList = productsListResponse?.data || ({} as Product[]);

  return (
    <div className="container mx-auto py-10">
      <CreateUpdateProductDialog
        action="Create"
        triggerNode={
          <Button variant={'outline'} className="mb-4">
            Create Product
          </Button>
        }
        open={openCreateProduct}
        setOpen={setOpenCreateProduct}
      />
      <DataTable columns={columns} data={productsList} />
    </div>
  );
};

export default AdminProducts;
