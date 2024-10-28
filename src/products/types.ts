export type ProductTag = {
    material: string;
    application: (
        | "Siding & Cladding"
        | "Decking"
        | "Deck Tiles"
        | "Posts & Beams"
        | "Facades"
        | "Fencing"
        | "Pergolas"
        | "Wood Trim")[];
    collection: string;
};

export type ProductDetails = {
    species: string;
    application: string;
    use: string;
    finish: string;
    durabilityClass: number;
    warranty: string;
    availableIn: string;
    boardLengths: string;
};

export type Product = {
    id: number;
    group: string;
    name: string;
    dimensions: string;
    tag: ProductTag;
    description: string;
    features: string[];
    details: ProductDetails;
};