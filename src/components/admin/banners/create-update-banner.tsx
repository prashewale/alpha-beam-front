import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

import { Banner, BannerEntity } from '@/types';
import React, { useState } from 'react';
import CreateUpdateBannerForm from './create-update-banner-form';

type Props = {
  item?: BannerEntity;
  triggerNode?: React.ReactNode;
  action: 'Create' | 'Update';
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreateUpdateBannerDialog = ({
  item,
  triggerNode,
  action,
  setOpen,
  open,
}: Props) => {
  // const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{triggerNode}</DialogTrigger>
      <DialogContent className="h-[800px] overflow-y-auto scroll-smooth">
        <DialogTitle>{item ? 'Update Banner' : 'New Banner'}</DialogTitle>
        <DialogDescription className="h-0 w-0"></DialogDescription>

        <CreateUpdateBannerForm
          item={item}
          action={action}
          setOpen={setOpen}
          open={open}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateUpdateBannerDialog;
