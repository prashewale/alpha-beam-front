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
import {
  useCreateBanner,
  useCreateProduct,
  useUpdateBanner,
  useUpdateProduct,
} from '@/lib/react-query/queries';
import { BannerValidation, ProductValidation } from '@/lib/validation';
import { Banner, BannerEntity, UpdateProductRequest } from '@/types';
import { MultiUploader } from '@/components/common/multi-file-uploader';
import FileUpload from '@/components/common/file-upload';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

type Props = {
  item?: BannerEntity;
  action: 'Create' | 'Update';
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateUpdateBannerForm = ({ item, action, setOpen, open }: Props) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof BannerValidation>>({
    resolver: zodResolver(BannerValidation),
    defaultValues: {
      name: item?.name || '',
      description: item?.description || '',
      images: item?.images || [],
    },
  });

  // Queries
  const { mutateAsync: createBanner, isPending: isCreateLoading } =
    useCreateBanner();
  const { mutateAsync: updateBanner, isPending: isUpdateLoading } =
    useUpdateBanner();

  const [sliderValue, setSliderValue] = useState<number>(3); // State to manage the slider

  const handleBannerAddUpdate = async (
    values: z.infer<typeof BannerValidation>
  ) => {
    // console.log('form submitted :', values);
    if (item && action === 'Update') {
      const request: BannerEntity = {
        ...values,
        _id: item._id,
        // images: product.images,
      };

      const res = await updateBanner(request);
      if (!res || !res.data || res.status !== 'SUCCESS') {
        toast({ title: 'Update failed. Please try again.' });
        return;
      }

      toast({ title: 'Product updated successfully.' });
      setOpen(false);
      return;
    }

    const res = await createBanner({ ...values });
    if (!res || !res.data || res.status !== 'SUCCESS') {
      toast({ title: 'Create failed. Please try again.' });
      return;
    }

    setOpen(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleBannerAddUpdate)}
        className="flex w-full flex-col gap-4"
      >
        <div className="form-group">
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label flex justify-start">
                  Banner Image
                </FormLabel>
                <FormControl>
                  <MultiUploader
                    onChange={field.onChange}
                    values={field.value}
                    uploadLimit={2}
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
                Banner Name
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

export default CreateUpdateBannerForm;
