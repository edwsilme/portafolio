import imgMillion from '../assets/image/MillionManagerApp.png';
import imgProduct from '../assets/image/ProductCatalogBD.png';
import imgOutlet from '../assets/image/OutletRentalCars.png';
import imgSpace from '../assets/image/spaceInvaders.png';

const projects = [
    {
        id: 'pos-MillionManagerApp',
        title: 'MillionManagerApp', // Los títulos suelen dejarse igual o puedes traducirlos también
        description_es: 'Aplicación Fullstack para gestión de propiedades. Proyecto de práctica para pruebas técnicas.',
        description_en: 'Fullstack property management application. Developed as a technical assessment practice project.',
        tags: ['.NET', 'C#', 'MongoDB', 'React'],
        image: imgMillion,
        github: 'https://github.com/edwsilme/PropertyManagerApp',
        demo: '#'
    },
    {
        id: 'pos-ProductCatalogBD',
        title: 'Product Catalog Dashboard',
        description_es: 'Aplicación Backend para gestión de catálogo de productos. Proyecto de práctica para pruebas técnicas.',
        description_en: 'Backend application for product catalog management. Practice project focused on technical assessments.',
        tags: ['.NET', 'C#', 'React', 'SQL'],
        image: imgProduct,
        github: 'https://github.com/edwsilme/CatalogProduct',
        demo: '#'
    },
    {
        id: 'pos-OutletRentalCars',
        title: 'Vehicle Rental & Search Dashboard',
        description_es: 'Aplicación Backend para gestión de búsqueda y reserva de vehículos. Proyecto de práctica para pruebas técnicas.',
        description_en: 'Backend system for vehicle search and booking management. Built for technical evaluation practice.',
        tags: ['.NET', 'C#', 'Docker', 'MySQL', 'MongoDB'],
        image: imgOutlet,
        github: 'https://github.com/edwsilme/OutletRentalCars',
        demo: '#'
    },
    {
        id: 'pos-SpaceInvaders',
        title: 'Space Invaders',
        description_es: 'Aplicación de videojuego basado en el popular Space Invaders.',
        description_en: 'Video game application based on the classic Space Invaders arcade game.',
        tags: ['Python'],
        image: imgSpace,
        github: 'https://github.com/edwsilme/spaceInvaders',
        demo: '#'
    }
]

export default projects