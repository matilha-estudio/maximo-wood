export interface IProjectsCarousel {
    type: "hardwood" | "thermowood"
    title: string
    product: string
    profile: string
    location: string
    description: string
    images: string[]
}

export const ProjectsList: IProjectsCarousel[] = [
    {
        title: 'Ourania 231',
        product: 'Maximo Hardwood Garapa',
        profile: '1x4 T&G on ceiling; 1x6 T&G on walls',
        location: 'São Paulo, Brazil',
        description: 'In a space with limited natural light, light-colored materials are essential for creating an inviting atmosphere. For the Ourania 231 project, Studio MK27 drew inspiration from Brazilian modernism and Japanese aesthetics. They chose Maximo Garapa to enhance the interior with its warm tone.',
        images: [
            '/images/Inspirations/Ourania-231/Ourania-231-1.JPG',
            '/images/Inspirations/Ourania-231/Ourania-231-2.JPG',
            '/images/Inspirations/Ourania-231/Ourania-231-3.JPG',
            '/images/Inspirations/Ourania-231/Ourania-231-4.JPG',
        ],
        type: "hardwood"
    },
    {
        title: 'Everglades Residence',
        product: 'Maximo Thermowood® Ayous',
        profile: '1x6 T&G Fluted ',
        location: 'Miami, Fl',
        description: 'When your property overlooks the Miami River, integrating the surrounding nature into the design becomes essential. The homeowners embraced this by selecting materials that harmonize with the environment, choosing custom-milled, fluted Maximo Thermowood Ayous.',
        images: [
            '/images/Inspirations/Everglades-Residence/Everglades-Residence1.JPG',
            '/images/Inspirations/Everglades-Residence/Everglades-Residence2.png',
            '/images/Inspirations/Everglades-Residence/Everglades-Residence3.JPG',
            '/images/Inspirations/Everglades-Residence/Everglades-Residence4.png',
            '/images/Inspirations/Everglades-Residence/Everglades-Residence5.JPG',
            '/images/Inspirations/Everglades-Residence/Everglades-Residence6.JPG',
        ],
        type: "thermowood"
    },
    {
        title: 'The House at Woodland',
        product: 'Maximo Thermowood® Ayous',
        profile: '1x6 T&G',
        location: 'Hollywood, Fl',
        description: 'To contrast with the surrounding nature and white, minimalist interior look, the homeowners selected Maximo Thermowood Ayous. The wood adds a cozy, warm feel inside while giving the ceiling an elegant, rich appearance that enhances the home’s overall aesthetic.',
        images: [
            '/images/Inspirations/Woodland/Woodland1.JPG',
            '/images/Inspirations/Woodland/Woodland2.png',
            '/images/Inspirations/Woodland/Woodland3.JPG',
            '/images/Inspirations/Woodland/Woodland4.png',
            '/images/Inspirations/Woodland/Woodland5.JPG',
        ],
        type: "thermowood"
    },
    {
        title: 'The Arketip Housing Project',
        product: 'Maximo Scandinavian Thermowood®',
        profile: '1x6 T&G',
        location: 'Istanbul, Turkey',
        description: 'This project by Emre Arolat Architecture integrates modern design with natural materials, using Scandinavian Thermowood® for its durability, weather resistance, and warm texture. It features a striking, minimalist facade and emphasizes privacy and community interaction.',
        images: [
            '/images/Inspirations/The-Arketip/The-Arketip1.JPG',
            '/images/Inspirations/The-Arketip/The-Arketip2.JPG',
            '/images/Inspirations/The-Arketip/The-Arketip3.JPG',
            '/images/Inspirations/The-Arketip/The-Arketip4.JPG',
        ],
        type: "thermowood"
    },
    {
        title: 'GAF Residence',
        product: 'Maximo Hardwood Cuamaru',
        profile: '1x6 T&G on ceilings; 5/8x4 on wall panels',
        location: 'São Paulo, Brazil',
        description: 'This residence showcases Maximo Hardwood Cumaru, used for both its stunning ceilings and impressive movable and fixed panels. These panels not only provide natural ventilation but also create a powerful visual statement, enhancing the overall aesthetic.',
        images: [
            '/images/Inspirations/GAF-Residence/GAF-Residence1.jpg',
            '/images/Inspirations/GAF-Residence/GAF-Residence2.jpg',
            '/images/Inspirations/GAF-Residence/GAF-Residence3.jpg',
            '/images/Inspirations/GAF-Residence/GAF-Residence4.jpg',
        ],
        type: "hardwood"
    },
    {
        title: 'Lakeside Retreat',
        product: 'Maximo Thermo Clear Radiata',
        profile: '1x6 T&G with Midnight finish on the walls; 1x6 T&G on soffit',
        location: 'Lake Rotoiti, New Zealand',
        description: 'This lakeside home uses Maximo Thermo Clear Radiata cladding to blend with the natural surroundings, while warm wood paneling inside creates a cozy, inviting feel. The homeowners prioritized outdoor views and chose low-maintenance wood for lasting durability and beauty.',
        images: [
            '/images/Inspirations/Lakeside-Retreat/Lakeside-Retreat1.jpg',
            '/images/Inspirations/Lakeside-Retreat/Lakeside-Retreat2.jpg',
            '/images/Inspirations/Lakeside-Retreat/Lakeside-Retreat3.jpg',
            '/images/Inspirations/Lakeside-Retreat/Lakeside-Retreat4.jpg',
            '/images/Inspirations/Lakeside-Retreat/Lakeside-Retreat5.jpg',
        ],
        type: "thermowood"
    },
]