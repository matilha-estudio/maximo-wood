export interface HomePage {
  hero: {
    image: string;
    sub_title: string;
    title: string;
  };
  material: {
    hardwood: hardWoodThermo;
    thermo: hardWoodThermo;
    title: string;
  }
  rooted_in_responsibility: {
    image: string;
    image_mobile: string;
    text: string;
    title: string;
    list_logos: Images[]
  }
  text: string;
};

export interface ProductHeroData {
  title: string;
  text: string;
  image: string;
  image_mobile: string;
}

export interface ProductSamplesDto {
  image: string;
  text: string;
  title: string;
}

export interface InspirationData {
  title: string;
  projects: Project[];
}

export interface BecaomeDealerData {
  faq: FAQItem[];
  image: string;
  second_text: string;
  title: string;
  text: string;
  ready_pioneer: {
    hubspot_form_id: string;
    hubspot_portal_id: string;
    title: string;
    text: string;
  };
  trusted_industry_leaders: {
    title: string;
    item_1: TrustedIndustryLeader;
    item_2: TrustedIndustryLeader;
    item_3: TrustedIndustryLeader;
  };
  why_partner: {
    title: string;
    item_1: WhyPartnerItem;
    item_2: WhyPartnerItem;
    item_3: WhyPartnerItem;
    item_4: WhyPartnerItem;
  };
}

export interface ContactUsData {
  image: string;
  locate_dealer: LocateDealer;
  partner_maximo_wood: PartnerMaximoWood;
  text: string;
  title: string;
}

export interface FooterData {
  instagram: string;
  logo: string;
  mail: string;
  phone: string;
  text: string;
}

export interface ResourceData {
  image: number;
  heroImage: string;
  title: string;
  subtitle: string;
  product_samples: {
    title: string;
    text: string;
    hubspot_portal_id: string;
    hubspot_form_id: string;
  };
  schedule_ceu: {
    title: string;
    text: string;
    hubspot_portal_id: string;
    hubspot_form_id: string;
  };
  hardwood: Array<Section>;
  thermo: Array<Section>;
}

export interface MaximoHardwoodThermoData {
  certified_excellence_sustainability: {
    list_logos: Images[];
    text: string;
    title: string;
  };
  hero_image: string;
  inspiring_maximo: {
    list_images: Images[];
    title: string;
  };
  second_section: {
    text: string;
    title: string;
    video: string;
  };
  text: string;
  title_page: string;
  title_text: string;
  why_choose: {
    item_1: {
      text: string;
      title: string;
    };
    item_2: {
      text: string;
      title: string;
    };
    item_3: {
      text: string;
      title: string;
    };
    item_4: {
      text: string;
      title: string;
    };
    title: string;
  };
}

export interface InspirationCarrouselListImagesData{
  title: string;
  images: Images[];
}

export interface InspirationCarrouselData {
  title: string;
  list_images: InspirationCarrouselListImagesData[];
}

interface Section {
  title: string;
  files: Array<FileItem>;
}

interface FileItem {
  text: string;
  file: string;
}

interface hardWoodThermo {
  title: string;
  text: string;
  image: string;
}

interface Images {
  image: string;
}

interface LocateDealer {
  hubspot_form_id: string;
  hubspot_portal_id: string;
  mail: string;
  phone: string;
  text: string;
  title: string;
}

interface PartnerMaximoWood {
  text: string;
  title: string;
}

interface FAQItem {
  title: string;
  text: string;
}

interface TrustedIndustryLeader {
  title: string;
  text: string;
  image: string;
}

interface WhyPartnerItem {
  title: string;
  text: string;
}

interface Project {
  title: string;
  product: string;
  profile: string;
  location: string;
  text: string;
  images: Images[];
}