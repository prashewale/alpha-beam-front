import Loader from '@/components/common/Loader';
import { Button } from '@/components/ui/button';
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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Textarea } from '@/components/ui/textarea';
import { categories } from '@/data/categories';
import { useToast } from '@/hooks/use-toast';
import { useCreateProduct, useUpdateProduct } from '@/lib/react-query/queries';
import { ProductValidation } from '@/lib/validation';
import { Product, UpdateProductRequest } from '@/types';
import { MultiUploader } from '@/components/common/multi-file-uploader';
import FileUpload from '@/components/common/file-upload';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

type CreateUpdateProductFormProps = {
  product?: Product;
  action: 'Create' | 'Update';
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateUpdateProductForm = ({
  product,
  action,
  setOpen,
  open,
}: CreateUpdateProductFormProps) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ProductValidation>>({
    resolver: zodResolver(ProductValidation),
    defaultValues: {
      name: product?.name || '',
      description: product?.description || '',
      rating: product?.rating || 3,
      stock: product?.stock || 0,
      brand: product?.brand || '',
      category: product?.category || '',
      images: product?.images || [],
      price: product?.price || 0,
    },
  });

  // Queries
  const { mutateAsync: createProduct, isPending: isCreateLoading } =
    useCreateProduct();
  const { mutateAsync: updateProduct, isPending: isUpdateLoading } =
    useUpdateProduct();

  const [sliderValue, setSliderValue] = useState<number>(3); // State to manage the slider

  /**
   * Handles changes to the rating slider by updating the form value
   * and state to reflect the new rating value.
   * @param {number[]} value - The new value of the slider.
   */
  const handleSliderChange = (value: number[]) => {
    const ratingValue = value[0];
    setSliderValue(ratingValue);
    form.setValue('rating', ratingValue);
  };

  const handleProductAddUpdate = async (
    values: z.infer<typeof ProductValidation>
  ) => {
    console.log('form submitted :', values);
    if (product && action === 'Update') {
      const request: UpdateProductRequest = {
        ...values,
        _id: product._id,
        // images: product.images,
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

    const res = await createProduct({ ...values });
    if (!res || !res.data || res.status !== 'SUCCESS') {
      toast({ title: 'Create failed. Please try again.' });
      return;
    }

    setOpen(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleProductAddUpdate)}
        className="flex w-full flex-col gap-4"
      >
        <div className="form-group">
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label flex justify-start">
                  Product Images
                </FormLabel>
                <FormControl>
                  <MultiUploader
                    onChange={field.onChange}
                    values={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label flex justify-start">
                Description
              </FormLabel>
              <FormControl>
                <Textarea className="shad-input" {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="shad-form_label flex justify-start gap-2">
                  Rating{' '}
                  <span className="text-[#f59e0b]">
                    ({sliderValue.toFixed(1)})
                  </span>
                </FormLabel>
                <FormControl>
                  <div className="flex w-full items-center justify-between">
                    <Slider
                      value={[sliderValue]} // Slider expects an array of values
                      min={0}
                      max={5}
                      step={0.5}
                      onValueChange={handleSliderChange}
                      className="my-3 w-full"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label flex justify-start">
                  Category
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
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label flex justify-start">
                  Stock
                </FormLabel>
                <FormControl>
                  <Input type="number" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end gap-2">
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
  );
};

export default CreateUpdateProductForm;
