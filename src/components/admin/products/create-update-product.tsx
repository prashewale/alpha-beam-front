import Loader from '@/components/common/Loader';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { categories } from '@/data/categories';
import { useToast } from '@/hooks/use-toast';
import { useCreateProduct, useUpdateProduct } from '@/lib/react-query/queries';
import { ProductValidation } from '@/lib/validation';
import { Product, UpdateProductRequest } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ProductValidation>>({
    resolver: zodResolver(ProductValidation),
    defaultValues: {
      name: product?.name || '',
      description: product?.description || '',
      price: product?.price || 0,
      rating: product?.rating || 0,
      stock: product?.stock || 0,
      brand: product?.brand || '',
      category: product?.category || '',
    },
  });

  // Queries
  const { mutateAsync: createProduct, isPending: isCreateLoading } =
    useCreateProduct();
  const { mutateAsync: updateProduct, isPending: isUpdateLoading } =
    useUpdateProduct();

  const handleProductAddUpdate = async (
    values: z.infer<typeof ProductValidation>
  ) => {
    // console.log(values);
    if (product && action === 'Update') {
      const request: UpdateProductRequest = {
        ...values,
        id: product.id,
      };

      const res = await updateProduct(request);
      if (!res || !res.data || res.status !== 'SUCCESS') {
        toast({ title: 'Update failed. Please try again.' });
        return;
      }

      toast({ title: 'Product updated successfully.' });
      setOpen(false);
      return;
    }

    const res = await createProduct(values);
    if (!res || !res.data || res.status !== 'SUCCESS') {
      toast({ title: 'Create failed. Please try again.' });
      return;
    }

    toast({ title: 'Product created successfully.' });
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerNode}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{product ? 'Update Product' : 'New Product'}</DialogTitle>
        <DialogDescription></DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleProductAddUpdate)}>
            <div className="form-group">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label flex justify-start">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="form-group">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label flex justify-start">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="form-group">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label flex justify-start">
                      Price
                    </FormLabel>
                    <FormControl>
                      <Input type="number" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="form-group">
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label flex justify-start">
                      Rating
                    </FormLabel>
                    <FormControl>
                      <Slider
                        min={0}
                        defaultValue={[field.value]}
                        max={5}
                        step={0.1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="shad-form_label flex justify-start">
                        Brand
                      </FormLabel>
                      <FormControl>
                        <Input type="text" className="shad-input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-md-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="shad-form_label flex justify-start">
                        Country
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category, index) => (
                            <SelectItem key={index} value={category.value}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button
                variant="destructive"
                onClick={() => setOpen(false)}
                type="button"
              >
                Cancel
              </Button>
              <Button className="shad-button_primary" type="submit">
                {isCreateLoading || isUpdateLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader /> Loading...
                  </div>
                ) : (
                  'Save'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUpdateProductDialog;
