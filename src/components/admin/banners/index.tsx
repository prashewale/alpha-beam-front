import { columns } from './columns';
import { DataTable } from './data-table';
import CreateUpdateBannerDialog from './create-update-banner';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BannerEntity, Logo, LogoEntity, Product } from '@/types';
import {
  useCreateLogo,
  useGetBanners,
  useGetLogos,
  useUpdateLogo,
} from '@/lib/react-query/queries';
import { MultiUploader } from '@/components/common/multi-file-uploader';
import { UploadButton } from '@uploadthing/react';
import { useToast } from '@/hooks/use-toast';

const AdminBanners = () => {
  const [openCreate, setOpenCreate] = useState(false);

  const { toast } = useToast();

  const { data: bannerListResponse, isFetching: isBannersFetching } =
    useGetBanners();

  const bannerList = bannerListResponse?.content || ({} as BannerEntity[]);

  const { mutateAsync: updateLogo } = useUpdateLogo();

  const { mutateAsync: createLogo } = useCreateLogo();

  const { data: logoListResponse, isFetching: isLogoFetching } = useGetLogos();
  const logoList = logoListResponse?.content || ({} as LogoEntity[]);

  const defaultLogo: LogoEntity = {
    _id: '',
    images: [],
  };

  const currentLogo = logoList.length > 0 ? logoList[0] : defaultLogo;

  const handleLogoUpload = async (images: string[]) => {
    if (currentLogo._id) {
      const updatedLogo: LogoEntity = {
        ...currentLogo,
        images: images,
      };
      await updateLogo(updatedLogo);

      toast({ title: 'Logo updated successfully.' });
      return;
    }

    const newLogo: Logo = {
      images: images,
    };

    await createLogo(newLogo);

    toast({ title: 'Logo uploaded successfully.' });
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-4 flex flex-col gap-2">
        {/* Logo Update */}
        <div className="font-semibold">Logo</div>
        <MultiUploader
          onChange={handleLogoUpload}
          values={currentLogo.images}
          uploadLimit={1}
        />
      </div>

      <CreateUpdateBannerDialog
        action="Create"
        triggerNode={
          <Button variant={'outline'} className="mb-2">
            Create Banner
          </Button>
        }
        open={openCreate}
        setOpen={setOpenCreate}
      />
      <DataTable columns={columns} data={bannerList} />
    </div>
  );
};

export default AdminBanners;
