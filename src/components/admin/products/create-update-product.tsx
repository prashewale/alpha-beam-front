import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

import { Product, UpdateProductRequest } from '@/types';
import React, { useState } from 'react';
import CreateUpdateProductForm from './create-update-product-form';

type CreateUpdateProductDialogProps = {
  product?: Product;
  triggerNode?: React.ReactNode;
  action: 'Create' | 'Update';
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreateUpdateProductDialog = ({
  product,
  triggerNode,
  action,
  setOpen,
  open,
}: CreateUpdateProductDialogProps) => {
  // const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerNode}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{product ? 'Update Product' : 'New Product'}</DialogTitle>
        <DialogDescription className="h-0 w-0"></DialogDescription>

        <CreateUpdateProductForm
          product={product}
          action={action}
          setOpen={setOpen}
          open={open}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateUpdateProductDialog;
