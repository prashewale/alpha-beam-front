import { useDropzone } from '@uploadthing/react';
import { useCallback, useState } from 'react';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import { useUploadThing } from '@/lib/uploadthing';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { cn } from '@/lib/utils';

type Props = {
  onChange: (imageUrls: string[]) => void;
  values: string[];
};

type ImageUpload = {
  isUploaded: boolean;
  imageUrl: string;
  fileName: string;
  progress?: number;
};

export function MultiUploader({ onChange, values }: Props) {
  const [fileUrls, setFileUrls] = useState<string[]>(values);

  const initialUploads = values.map((url) => ({
    isUploaded: true,
    imageUrl: url,
    fileName: url,
    progress: 100,
  }));

  const [imageUploads, setImageUploads] =
    useState<ImageUpload[]>(initialUploads);

  const { toast } = useToast();
  const { startUpload, routeConfig } = useUploadThing('imageUploader', {
    onClientUploadComplete: (res) => {
      const uploadedUrls = res?.map((r) => r.url) || [];
      const newValues = [...fileUrls, ...uploadedUrls];
      onChange(newValues);
      setFileUrls(newValues);

      setImageUploads((prevUploads) =>
        prevUploads.map((upload) => {
          if (upload.isUploaded) return upload;
          return { ...upload, isUploaded: true, progress: 100 };
        })
      );

      toast({ title: 'Image uploaded successfully' });
    },
    onUploadError: () => {
      toast({ title: 'Upload failed. Please try again.' });
    },
    onUploadProgress: (progress) => {
      setImageUploads((prevUploads) =>
        prevUploads.map((upload) =>
          !upload.isUploaded ? { ...upload, progress } : upload
        )
      );
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newUploads = acceptedFiles.map((file) => ({
        isUploaded: false,
        imageUrl: URL.createObjectURL(file),
        fileName: file.name,
        progress: 0,
      }));

      setImageUploads((prevUploads) => [...prevUploads, ...newUploads]);
      startUpload(acceptedFiles);
    },
    [startUpload]
  );

  const generatePermittedFileTypes = () => ({
    fileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(
      generatePermittedFileTypes().fileTypes
    ),
  });

  return (
    <div className="flex w-full cursor-pointer flex-col justify-center gap-2 rounded-xl border-2 border-dashed p-3">
      {imageUploads.length > 0 && (
        <div className="relative">
          <div className="grid grid-cols-3 gap-1">
            {imageUploads.map((upload, index) => (
              <div
                className="group relative flex flex-col items-center justify-center"
                key={index}
              >
                <div className="relative flex h-32 w-32 items-center justify-center rounded-xl border-2 p-4">
                  <img
                    src={upload.imageUrl}
                    alt="uploaded image"
                    className={cn(
                      'object-contain',
                      !upload.isUploaded && 'blur-sm filter'
                    )}
                  />
                  {!upload.isUploaded && (
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                      <CircularProgressbar
                        value={upload.progress || 0}
                        text={`${upload.progress}%`}
                        className="h-10 w-10"
                      />
                    </div>
                  )}
                </div>
                <Button
                  onClick={() => {
                    const newValues = values.filter((_, i) => i !== index);
                    onChange(newValues);
                    setFileUrls(newValues);
                    setImageUploads((prev) =>
                      prev.filter((_, i) => i !== index)
                    );
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
        className="bg-light-5 flex flex-col items-center justify-center rounded-xl p-3"
        {...getRootProps()}
      >
        <img
          src="/icons/file-upload.svg"
          width={96}
          height={77}
          alt="file upload"
          className="mb-6"
        />

        <h3 className="text-light-2 mb-2 text-xl">
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
