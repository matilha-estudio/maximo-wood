/* eslint-disable @typescript-eslint/no-explicit-any */

const SiteUrl = 'https://api.maximowood.com/';

const apiFetch = async (endpoint: string) => {
  const method = 'GET'
  const apiUrl = `${SiteUrl}/wp-json/wp/v2/${endpoint}`

  try {
    const response = await fetch(apiUrl, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
    })

    return await response.json()
  } catch (error) {
    console.error('Request error:', error)
    throw error
  }
}

export const getHomePage = async () => {
  const [{ acf, acf_out }] = await apiFetch('pages?slug=home-page');
  return {
    ...acf,
    ...acf_out
  }
}

export const getProductSamples = async () => {
  const [{ acf_out }] = await apiFetch('pages?slug=product-samples');
  return {
    ...acf_out
  }
}

export const getFooter = async () => {
  const [{ acf, acf_out }] = await apiFetch('pages?slug=footer');
  return {
    ...acf,
    logo: acf_out.logo
  }
}

export const getContactUs = async () => {
  const [{ acf, acf_out }] = await apiFetch('pages?slug=contact-us');
  return {
    ...acf,
    image: acf_out.heroImage
  }
}

export const getHardwood = async () => {
  const [{ acf, acf_out }] = await apiFetch('pages?slug=hardwood');
  return {
    ...acf,
    hero_image: acf_out.hero_image || null,
    ...acf_out,
    second_section: {
      ...acf.second_section,
      video: acf_out.second_section.video.url || null
    }
  }
}

export const getThermo = async () => {
  const [{ acf, acf_out }] = await apiFetch('pages?slug=thermo');
  return {
    ...acf,
    hero_image: acf_out.hero_image || null,
    ...acf_out,
    second_section: {
      ...acf.second_section,
      video: acf_out.second_section.video.url || null
    }
  }
}

export const getAllProjects = async () => {
  const [{ acf_out }] = await apiFetch('pages?slug=all-projects');
  return {
    ...acf_out
  }
}

export const getAllProductsHero = async () => {
  const [{ acf_out }] = await apiFetch('pages?slug=all-products');
  return {
    ...acf_out
  }
}

export const getResources = async () => {
  const [{ acf, acf_out }] = await apiFetch('pages?slug=resources');
  return {
    ...acf,
    ...acf_out
  }
}

export const getBecomeDealer = async () => {
  const [{ acf, acf_out }] = await apiFetch('pages?slug=become-dealer');
  return {
    ...acf,
    image: acf_out.heroImage,
    trusted_industry_leaders: acf_out.trustedIndustryLeaders
  }
}

export const getAllProducts = async (itens = '100') => {
  const resp = await apiFetch(`posts?per_page=${itens}`);
  const result = resp.map((item: any)=> ({
    description: item.acf.description,
    details: convertDetails(item.acf.details),
    dimensions: item.acf.sub_title,
    features: item.acf.features.map((i: featureProd)=> i.text),
    id: item.id,
    images: item.acf_out.listImages.map((i: imagesProd) => i.image),
    name: item.acf.title,
    tag: {
      material: item.acf.type_of_wood,
      application: item.acf.application,
      collection: convertCollection(item.acf.collection),
    }
  }))
  return result
}

function convertCollection(collection: string): string| undefined{
  const keyMap:Record<string,string> = {
    "Decking-Narrow": "Narrow",
    "Decking-Standard": "Standard",
    "Decking-UltraWide": "UltraWide",
    "Walls&ceillings-Narrow": "Narrow1",
    "Walls&ceillings-Standard": "Standard1"
  }

  return keyMap[collection.replaceAll(' ', '')] || ""
}

export const getProductDetail = async (id: string | null) => {
  if(!id){
    return {}
  }
  const { acf, acf_out } = await apiFetch(`posts/${id}`);
  return {
    description: acf.description,
    details: convertDetails(acf.details),
    dimensions: acf.sub_title,
    features: acf.features.map((i: featureProd)=> i.text),
    id: id,
    images: acf_out.listImages.map((i: imagesProd) => i.image),
    name: acf.title,
    tag: {
      material: acf.type_of_wood,
      application: acf.application,
      collection: acf.collection,
    }
  }
}

export const getInspirations = async () => {
  const [{ acf_out }] = await apiFetch('pages?slug=inspiration-for-architects');
  return {...acf_out}
}

type Detail = {
  item: string;
  text: string;
};

type MappedDetails = {
  species?: string;
  application?: string;
  collection?: string;
  use?: string;
  finish?: string;
  durabilityClass?: string;
  warranty?: string;
  availableIn?: string;
  boardLengths?: string;
};

function convertDetails(detailsArray: Detail[]):  MappedDetails {
  const keyMap: Record<string, keyof MappedDetails> = {
    "Species:": "species",
    "Application:": "application",
    "Collection:": "collection",
    "Use:": "use",
    "Finish:": "finish",
    "Durability class:": "durabilityClass",
    "Warranty:": "warranty",
    "Available in:": "availableIn",
    "Board lengths:": "boardLengths",
  };

  const result = detailsArray.reduce<MappedDetails>((acc, detail) => {
    const key = keyMap[detail.item];
    if (key) {
      acc[key] = detail.text;
    }
    return acc;
  }, {});

  return  result ;
}

interface featureProd {
  text: string;
}

interface imagesProd {
  image: string;
}