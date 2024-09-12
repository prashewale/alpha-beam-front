import { Address } from '@/types';
import { Pencil } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import CreateUpdateAddressDialog from './create-update-address';
import DeleteAddressDialog from './delete-address';
const AddressSelection = () => {
  const sampleAddressList: Address[] = [
    {
      id: 1,
      fullName: 'Sneha Sarang',
      addressLine1: '1234 Street',
      addressLine2: 'House 456, 3rd Floor',
      landmark: 'KFC',
      mobile: '1234567890',
      city: 'Delhi',
      state: 'Delhi',
      country: 'in',
      postalCode: '110001',
      default: true,
      userId: 'prashewale',
    },
    {
      id: 2,
      fullName: 'Pravin Shewale',
      addressLine1: '5678 Street',
      addressLine2: 'House 789, 2nd Floor',
      landmark: 'KFC',
      mobile: '1234567890',
      city: 'Delhi',
      state: 'Delhi',
      country: 'in',
      postalCode: '110001',
      default: false,
      userId: 'prashewale',
    },
  ];

  const [addressList, setAddressList] = useState<Address[]>(sampleAddressList);

  const handleSelectAddress = (id: number) => {
    // TODO: update selected address

    const updatedAddressList = addressList.map((address) => {
      if (address.id === id) {
        address.default = true;
        return address;
      } else {
        return {
          ...address,
          default: false,
        };
      }
    });

    setAddressList(() => [...updatedAddressList]);
  };

  return (
    <div className="space-y-4">
      <span className="text-lg font-semibold">Select a Delivery Address</span>
      <RadioGroup defaultValue="1" name="address">
        {addressList.map((address, index) => (
          <Card
            key={index}
            className={cn('w-full', address.default ? 'border-primary' : '')}
            onClick={() => {
              handleSelectAddress(address.id);
            }}
          >
            <CardContent className="flex items-center justify-between space-x-4 rounded-md p-4">
              <div className="flex items-center space-x-4">
                <RadioGroupItem
                  value={address.id.toString()}
                  checked={address.default}
                />
                <Label htmlFor={address.id.toString()}>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {address.fullName}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {`${address.addressLine1} ${address.addressLine2} ${
                        address.landmark
                      } ${address.city} ${address.state} ${address.postalCode}`}
                    </p>
                  </div>
                </Label>
              </div>
              <div className="flex space-x-4">
                <CreateUpdateAddressDialog
                  action="Update"
                  address={address}
                  triggerNode={
                    <Button variant="outline" size="icon" className="p-2">
                      <Pencil />
                    </Button>
                  }
                />
                <DeleteAddressDialog address={address} />
              </div>
            </CardContent>
          </Card>
        ))}
      </RadioGroup>
      <CreateUpdateAddressDialog
        action="Create"
        triggerNode={<Button variant={'outline'}>Add New Address</Button>}
      />
    </div>
  );
};

export default AddressSelection;
