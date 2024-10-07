import { FileIcon, X } from 'lucide-react';
import { Button } from '../ui/button';
// import { UploadDropzone } from '@/lib/uploadthing';
import { MultiUploader } from './multi-file-uploader';

type Props = {
  onChange: (url?: string) => void;
  values: string[];
};

const FileUpload = ({ onChange, values }: Props) => {
  console.log('Values ', values);
  if (values.length > 0) {
    return (
      <div className="flex items-center justify-between">
        {values.map((value, index) => (
          <div
            className="flex flex-col items-center justify-center"
            key={index}
          >
            <div className="relative h-40 w-40">
              <img
                src={value}
                alt="uploaded image"
                className="object-contain"
              />
            </div>
            <Button onClick={() => onChange('')} variant="ghost" type="button">
              <X className="h-4 w-4" />
              Remove Image
            </Button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full bg-muted/30">
      {/* <UploadDropzone
        endpoint={apiEndpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(error);
        }}
      /> */}
      <MultiUploader />
    </div>
  );
};

export default FileUpload;
