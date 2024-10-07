import { generateReactHelpers } from '@uploadthing/react';
import env from './config';
// import { createUploadthing, type FileRouter } from 'uploadthing/express';

// const f = createUploadthing();

// export const uploadRouter = {
//   imageUploader: f({
//     image: {
//       maxFileSize: '4MB',
//       maxFileCount: 4,
//     },
//   }).onUploadComplete((data) => {
//     console.log('upload completed', data);
//   }),
// } satisfies FileRouter;

// export type OurFileRouter = typeof uploadRouter;

export const { useUploadThing, uploadFiles } = generateReactHelpers({
  url: env.VITE_SERVER_URL + '/api/uploadthing',
});
