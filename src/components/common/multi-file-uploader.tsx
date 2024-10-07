import { useDropzone } from '@uploadthing/react';
import { useCallback, useState } from 'react';
import { generateClientDropzoneAccept } from 'uploadthing/client';

import { useUploadThing } from '@/lib/uploadthing';
import { ExpandedRouteConfig } from 'uploadthing/types';

export function MultiUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, routeConfig } = useUploadThing('', {
    onClientUploadComplete: () => {
      alert('uploaded successfully!');
    },
    onUploadError: () => {
      alert('error occurred while uploading');
    },
    onUploadBegin: (fileName) => {
      console.log('upload has begun for', fileName);
    },
  });

  //   if (!routeConfig) {
  //     return null;
  //   }

  const generatePermittedFileTypes = (routeConfig: ExpandedRouteConfig) => {
    return {
      fileTypes: ['image/png', 'image/jpeg'],
      maxFiles: 5,
    };
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: generateClientDropzoneAccept(
    //   generatePermittedFileTypes(routeConfig).fileTypes
    // ),
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>
        {files.length > 0 && (
          <button onClick={() => startUpload(files)}>
            Upload {files.length} files
          </button>
        )}
      </div>
      Drop files here!
    </div>
  );
}
