import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'rgrptaup',
  dataset: 'production',
  apiVersion: '2022-12-07',
  useCdn: false,
  token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
