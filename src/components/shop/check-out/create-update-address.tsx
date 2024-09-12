import Loader from '@/components/common/Loader';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { useToast } from '@/hooks/use-toast';
import { useCreateAddress, useUpdateAddress } from '@/lib/react-query/queries';
import { AddressValidation } from '@/lib/validation';
import { Address, UpdateAddressRequest } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type CreateUpdateAddressDialogProps = {
  address?: Address;
  triggerNode?: React.ReactNode;
  action: 'Create' | 'Update';
};

const CreateUpdateAddressDialog = ({
  address,
  triggerNode,
  action,
}: CreateUpdateAddressDialogProps) => {
  const [open, setOpen] = useState(false);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof AddressValidation>>({
    resolver: zodResolver(AddressValidation),
    defaultValues: {
      fullName: address?.fullName || '',
      addressLine1: address?.addressLine1 || '',
      addressLine2: address?.addressLine2 || '',
      landmark: address?.landmark || '',
      mobile: address?.mobile || '',
      city: address?.city || '',
      state: address?.state || '',
      country: address?.country || '',
      postalCode: address?.postalCode || '',
    },
  });

  // Queries
  const { mutateAsync: createAddress, isPending: isCreateLoading } =
    useCreateAddress();
  const { mutateAsync: updateAddress, isPending: isUpdateLoading } =
    useUpdateAddress();

  const handleAddessAddUpdate = async (
    values: z.infer<typeof AddressValidation>
  ) => {
    console.log(values);
    if (address && action === 'Update') {
      const request: UpdateAddressRequest = {
        ...values,
        id: address.id,
      };

      const res = await updateAddress(request);
      if (!res || !res.data || res.status !== 'SUCCESS') {
        toast({ title: 'Update failed. Please try again.' });
        return;
      }

      toast({ title: 'Address updated successfully.' });
      setOpen(false);
      return;
    }

    const res = await createAddress(values);
    if (!res || !res.data || res.status !== 'SUCCESS') {
      toast({ title: 'Create failed. Please try again.' });
      return;
    }

    toast({ title: 'Address created successfully.' });
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{triggerNode}</DialogTrigger>
        <DialogContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAddessAddUpdate)}>
              <DialogHeader>
                <DialogTitle>
                  {address ? 'Update Address' : 'New Address'}
                </DialogTitle>
                <DialogDescription>
                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="shad-form_label flex justify-start">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="shad-input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="addressLine1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="shad-form_label flex justify-start">
                            Flat No / Building No / Building Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="shad-input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="addressLine2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="shad-form_label flex justify-start">
                            Ward No / Street Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="shad-input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="form-group">
                    <FormField
                      control={form.control}
                      name="landmark"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="shad-form_label flex justify-start">
                            Landmark
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="shad-input"
                              {...field}
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
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="shad-form_label flex justify-start">
                              City
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="shad-input"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-md-6">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="shad-form_label flex justify-start">
                              State
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="shad-input"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 mt-3">
                      <FormField
                        control={form.control}
                        name="country"
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
                                  <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="in">India</SelectItem>
                                <SelectItem value="us">
                                  United States
                                </SelectItem>
                                <SelectItem value="uk">
                                  United Kingdom
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-md-6 mt-3">
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="shad-form_label flex justify-start">
                              Postal Code
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="shad-input"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="mt-4 flex justify-end">
                <Button variant="destructive" onClick={() => setOpen(false)}>
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
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateUpdateAddressDialog;
