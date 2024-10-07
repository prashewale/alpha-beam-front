import { useDropzone } from '@uploadthing/react';
import { useCallback, useState } from 'react';
import { generateClientDropzoneAccept } from 'uploadthing/client';

import { useUploadThing } from '@/lib/uploadthing';
import { ExpandedRouteConfig } from 'uploadthing/types';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
type Props = {
  onChange: (imageUrls: string[]) => void;
  values: string[];
};
export function MultiUploader({ onChange, values }: Props) {
  const [fileUrls, setFileUrls] = useState<string[]>(values);

  const [pendingUploads, setPendingUploads] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFileUrls([
      ...fileUrls,
      ...acceptedFiles.map((file) => URL.createObjectURL(file)),
    ]);
    startUpload(acceptedFiles);
  }, []);

  const { toast } = useToast();

  const { startUpload, routeConfig } = useUploadThing('imageUploader', {
    onClientUploadComplete: (res) => {
      const newValues = [...fileUrls, ...(res?.map((r) => r.url) as string[])];
      onChange(newValues);
      setFileUrls(newValues);

      toast({ title: 'Image uploaded successfully' });
    },
    onUploadError: () => {
      toast({ title: 'Upload failed. Please try again.' });
    },

    onUploadBegin: (fileName) => {
      console.log('onUploadBegin', fileName);
    },
  });

  const generatePermittedFileTypes = () => {
    return {
      fileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
    };
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(
      generatePermittedFileTypes().fileTypes
    ),
  });

  console.log(fileUrls);
  return (
    <div className="flex w-full cursor-pointer flex-col justify-center gap-2 rounded-xl border-2 border-dashed p-3">
      {fileUrls.length > 0 && (
        <div className="relative">
          <div className="grid grid-cols-3 gap-1">
            {fileUrls.map((value, index) => (
              <div
                className="group relative flex flex-col items-center justify-center"
                key={index}
              >
                <div className="relative flex h-32 w-32 items-center justify-center rounded-xl border-2 p-4">
                  <img
                    src={value}
                    alt="uploaded image"
                    className="object-contain"
                  />
                </div>
                <Button
                  onClick={(e) => {
                    // remove value from values
                    const newValues = values.filter((_, i) => i !== index);
                    onChange(newValues);
                    setFileUrls(newValues);
                  }}
                  variant="destructive"
                  type="button"
                  className="absolute right-0 top-0 hidden !h-7 !w-7 transform items-center justify-center rounded-full p-1 ease-in-out group-hover:flex"
                >
                  <X className="h-4 w-4 text-white" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className="flex flex-col items-center justify-center active:outline-none"
        {...getRootProps()}
      >
        <img
          src="/icons/file-upload.svg"
          width={96}
          height={77}
          alt="file upload"
        />

        <h3 className="base-medium text-light-2 mb-2 mt-6">
          <input {...getInputProps()} className="cursor-pointer" />
          Drag photo here
        </h3>
        <p className="text-light-4 small-regular mb-6">JPEG, PNG, JPG</p>

        <Button type="button" className="shad-button_dark_4">
          Select from computer
        </Button>
      </div>
    </div>
  );
}
