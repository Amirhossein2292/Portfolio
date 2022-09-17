import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'vllz1obd',
    dataset: 'ff',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skxB6AyCYcpXFdGI3TIT9aVGROdpcdGuoKM6SOKTfk6jDSt49nnOb8BPOGkOTa9EvCYP3eSKuIU5nj9vZLFVN11oMuaDfTNCg20Ada0alwrNgFTTInIizLgbik81WBQs9pVP7ijTr31atSCA7phc286s38A9AavK6PnzfcgeBczjHYWA5vgY',
});


const builder= imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);