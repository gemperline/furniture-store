import WilmingtonSofa from 'app/assets/images/Wilmington99UpholsteredSofa.png';
import GerdieCoffeeTable from 'app/assets/images/GerdieSolidWoodSingleCoffee.png';
import AdonBoucleFabricBed from 'app/assets/images/AdonBoucleFabricBed.png';
import Givens42CarvedWoodTable from 'app/assets/images/Givens42CarvedWoodStorageCo.png';
import NanCoffeeTable from 'app/assets/images/NanCoffeeTable.png';
import { IProduct } from 'app/models/Product/product';

export const MOCK_PRODUCTS = [
    {
        id: 1,
        name: `Gerdie Solid Wood Single Coffee Table`,
        description: 'Gerdie Solid Wood Single Coffee Table',
        image: GerdieCoffeeTable,
        altText: 'Gerdie Solid Wood Single Coffee Table',
        sku: 'SKU-34386786',
        rating: 4.0,
        price: 1999.99,
        salePrice: 1499.99,
        varieties: [
            {
                type: 'colors',
                options: [
                    {
                        name: 'Natural',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Natural',
                        sku: 'SKU-987654321-0001',
                        rating: 4.0,
                    },
                    {
                        name: 'Walnut',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Walnut',
                        sku: 'SKU-987654321-0002',
                        rating: 4.0,
                    },
                    {
                        name: 'Black',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Black',
                        sku: 'SKU-987654321-0003',
                        rating: 4.0,
                    }
                ],
            },
            {
                type: 'textiles',
                options: [
                    {
                        name: 'suede',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Cotton',
                        sku: 'SKU-987654321-0004',
                        rating: 4.0,
                    },
                    {
                        name: 'Polyester',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Polyester',
                        sku: 'SKU-987654321-0005',
                        rating: 4.0,
                    },
                    {
                        name: 'Wool',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Wool',
                        sku: 'SKU-987654321-0006',
                        rating: 4.0,
                    }
                ],
            }
        ],
    },
    {
        id: 2,
        name: `Wilmington 99" Upholstered Sofa`,
        description: 'Wilmington 99" Upholstered Sofa',
        image: WilmingtonSofa,
        altText: 'Wilmington 99" Upholstered Sofa',
        sku: 'SKU-8756345',
        rating: 4.5,
        price: 1999.99,
        salePrice: 1499.99,
        varieties: [
            {
                type: 'colors',
                options: [
                    {
                        name: 'Black',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Black',
                        sku: 'SKU-987654321-0003',
                        rating: 4.0,
                    }
                ]
            }
        ],
        
    },
    {
        id: 3,
        name: `Adon Boucle Fabric Bed`,
        description: 'Adon Boucle Fabric Bed',
        image: AdonBoucleFabricBed,
        altText: 'Adon Boucle Fabric Bed',
        sku: 'SKU-456231454',
        rating: 4.5,
        price: 1999.99,
        salePrice: 1499.99,
        varieties: [
            {
                type: 'colors',
                options: [
                    {
                        name: 'Walnut',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Walnut',
                        sku: 'SKU-987654321-0002',
                        rating: 4.0,
                    },
                    {
                        name: 'Black',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Black',
                        sku: 'SKU-987654321-0003',
                        rating: 4.0,
                    }
                ]
            }
        ],
    },
    {
        id: 4,
        name: `Givens 42" Carved Wood Storage Coffee Table`,
        description: 'Givens 42" Carved Wood Storage Coffee Table',
        image: Givens42CarvedWoodTable,
        altText: 'Givens 42" Carved Wood Storage Coffee Table',
        sku: 'SKU-4643732',
        rating: 5.0,
        price: 1999.99,
        salePrice: 1499.99,
        varieties: [
            {
                type: 'colors',
                options: [
                    {
                        name: 'Natural',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Natural',
                        sku: 'SKU-987654321-0001',
                        rating: 4.0,
                    },
                ]
            }
        ],
    },
    {
        id: 5,
        name: `Nan Coffee Table`,
        description: 'Nan Coffee Table',
        image: NanCoffeeTable,
        altText: 'Nan Coffee Table',
        sku: 'SKU-86796722',
        rating: 4.7,
        price: 1999.99,
        salePrice: 1499.99,
        varieties: [
            {
                type: 'colors',
                options: [
                    {
                        name: 'Natural',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Natural',
                        sku: 'SKU-987654321-66',
                        rating: 4.0,
                    },
                    {
                        name: 'Black',
                        image: GerdieCoffeeTable,
                        altText: 'Gerdie Solid Wood Single Coffee Table in Black',
                        sku: 'SKU-343-0003',
                        rating: 4.0,
                    }
                ]
            }
        ],
    }
] as IProduct[];