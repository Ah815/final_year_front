const categories = [
    {
        "_id": "6537ece708ff5b7de97d0695",
        "title": "Bird Treat",
        "value": "Bird Treat",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/handfeed.png?alt=media&token=4b93b14b-a7fd-4123-9404-e3cbb987877a",
        "createdAt": "2023-10-24T16:12:23.571Z",
        "updatedAt": "2023-10-24T16:12:23.571Z",
        "__v": 0
    },
    {
        "_id": "65310f3381e4d98d60b093c5",
        "title": "Hand Feed",
        "value": "Hand Feed",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/bird_hand_feed-removebg-preview.png?alt=media&token=7985f900-5375-4b50-86b3-c13818fa164d",
        "__v": 0
    },
    {
        "_id": "6531206cbbe4998e90af3feb",
        "title": "Ca+Vit",
        "value": "Ca+Vit",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/Ca%2BVit-removebg-preview.png?alt=media&token=c205d061-a10f-49a4-9a7f-52a28a3e4198",
        "__v": 0
    },
    {
        "_id": "6531209dbbe4998e90af3fef",
        "title": "Medicines",
        "value": "Medicines",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/medicines-removebg-preview.png?alt=media&token=a0fb6815-6f30-4bc7-9c63-e6bccbd37332",
        "__v": 0
    }
]

const vendors = [
    {
        "_id": "6530ebbcc9e72013e5b65933",
        "title": "Colisol",
        "time": "15 min",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/advance%20colisol%201.jfif?alt=media&token=c5614eaf-ef5e-490f-b4ac-184defd0f529",
        "owner": "fdfsdfsdfs",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "6765",
        "coords": {
            "id": "2023",
            "latitude": 37.78792117665919,
            "longitude": -122.41325651079953,
            "address": "698 Post St, San Francisco, CA 94109, United States",
            "title": "Lapisara Eatery",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530ea6bc9e72013e5b6592d",
        "title": "Avi Herb",
        "time": "30 min",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/AVIHERB%20natral%20digestive%202.jfif?alt=media&token=6ee62b10-5323-4009-8ccf-e6add7be7b6c",
        "owner": "sjgdsjgfjshhjs",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "3278",
        "coords": {
            "id": "2020",
            "latitude": 37.785925590588505,
            "longitude": -122.41007428687641,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "Burger King",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530eb66c9e72013e5b65931",
        "title": "C-Vit Forte",
        "time": "25 min",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/C%20vit%20forte%201.jfif?alt=media&token=c3181180-c6a3-4599-be70-ecb35273d1c4",
        "owner": "fgdgdfgd",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "5666",
        "coords": {
            "id": "2022",
            "latitude": 37.787503258917035,
            "longitude": -122.39854938269353,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "La Foods",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    },
    {
        "_id": "6530eb23c9e72013e5b6592f",
        "title": "Virkon",
        "time": "35 min",
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/virkon.jpeg?alt=media&token=3e237e45-fe99-4deb-95d4-0ad8423a6023",
        "owner": "sjgdsjgfjshhjs",
        "code": "41007428",
        "logoUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
        "rating": 5,
        "ratingCount": "3278",
        "coords": {
            "id": "2021",
            "latitude": 37.78557922976825,
            "longitude": -122.40722000299483,
            "address": "333 O'Farrell St, San Francisco, CA 94102, United States",
            "title": "Italian restauratnt",
            "latitudeDelta": 0.0122,
            "longitudeDelta": 0.0221
        }
    }
]

const foods = [
    {
        "_id": "65316968f94c6496dc84f3c1",
        "title": "Ali Birds",
        "foodTags": [
            "Vetasol",
            "Vetasol Super",
            "Virkon",
            "Virkon S",
            "Virkon S+"
        ],
        "foodType": [
            "Dessert"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restauratnt": "6530ea6bc9e72013e5b6592d",
        "rating": 4.9,
        "ratingCount": "420",
        "description": "A classic Italian dessert made of layers of coffee-soaked ladyfingers and creamy mascarpone, topped with cocoa.",
        "price": 7.99,
        "additives": [
            {
                "id": 1,
                "title": "1kg",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "1.25kg",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "1.5kg",
                "price": "2.50"
            },
            {
                "id": 4,
                "title": "0.5",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "0.25",
                "price": "0.25"
            }
        ],
        "imageUrl": [
            "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/advance%20colisol%209.jfif?alt=media&token=2adf7402-674d-4c72-8618-0b5e9269443c"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "35 min"
    },
    {
        "_id": "653168e9f94c6496dc84f3bf",
        "title": "Saad Zone",
        "foodTags": [
            "Vetasol",
            "Vetasol Super",
            "Virkon",
            "Virkon S",
            "Virkon S+"
        ],
        "foodType": [
            "Main Course",
            "Lunch",
            null
        ],
        "code": "41007428",
        "isAvailable": true,
        "restauratnt": "6530ea6bc9e72013e5b6592d",
        "rating": 4.7,
        "ratingCount": "310",
        "description": "A traditional Italian pasta dish with creamy egg sauce, pancetta, and cheese.",
        "price": 14.99,
        "additives": [
            {
                "id": 1,
                "title": "1kg",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "1.25kg",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "1.5kg",
                "price": "2.50"
            },
            {
                "id": 4,
                "title": "0.5",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "0.25",
                "price": "0.25"
            }
        ],
        "imageUrl": [
            "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/amivital%20high%204.jfif?alt=media&token=089979fb-3185-4749-97a7-a6ff9f627783"
        ],
        "__v": 2,
        "category": "6531209dbbe4998e90af3fef",
        "time": "20 min"
    },
    {
        "_id": "653169a9f94c6496dc84f3c3",
        "title": "HT Birds",
        "foodTags": [
            "Vetasol",
            "Vetasol Super",
            "Virkon",
            "Virkon S",
            "Virkon S+"
        ],
        "foodType": [
            "Starter",
            "Lunch",
            "Dinner",
            "Health",
            "Vegan"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restauratnt": "6530ea6bc9e72013e5b6592d",
        "rating": 4.6,
        "ratingCount": "230",
        "description": "A refreshing mix of organic vegetables, nuts, seeds, and a tangy vinaigrette.",
        "price": 11.99,
        "additives": [
            {
                "id": 1,
                "title": "1kg",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "1.25kg",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "1.5kg",
                "price": "2.50"
            },
            {
                "id": 4,
                "title": "0.5",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "0.25",
                "price": "0.25"
            }
        ],
        "imageUrl": [
            "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/apple%201.jfif?alt=media&token=626c069a-9404-4406-8739-e92377c49233"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "55 min"
    },
    {
        "_id": "65316771f94c6496dc84f3bd",
        "title": "Bismillah Birds",
        "foodTags": [
            "Vetasol",
            "Vetasol Super",
            "Virkon",
            
        ],
        "foodType": [
            "Main Course"
        ],
        "code": "41007428",
        "isAvailable": true,
        "restauratnt": "6530ebbcc9e72013e5b65933",
        "rating": 4.5,
        "ratingCount": "150",
        "description": "A classic Margherita pizza with fresh tomatoes, mozzarella cheese, basil, and olive oil.",
        "price": 12.99,
        "additives": [
            {
                "id": 1,
                "title": "1kg",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "1.25kg",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "1.5kg",
                "price": "2.50"
            },
            {
                "id": 4,
                "title": "0.5",
                "price": "0.50"
            },
            {
                "id": 5,
                "title": "0.25",
                "price": "0.25"
            }
        ],
        "imageUrl": [
            "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/avi%20cal%20active%201.jfif?alt=media&token=5c09af53-5ec9-4aa6-a0cd-8727de2c8549",
            "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "30 min"
    },
    {
        "_id": "65316a01f94c6496dc84f3c7",
        "title": "House of vat",
        "foodTags": [
            "Vetasol",
            "Vetasol Super",
            "Virkon",
        ],
        "foodType": [
          
        ],
        "code": "41007428",
        "isAvailable": true,
        "restauratnt": "6530ea6bc9e72013e5b6592d",
        "rating": 4.7,
        "ratingCount": "280",
        "description": "A delightful blend of tropical fruits, creating the perfect sweet and refreshing drink.",
        "price": 6.99,
        "additives": [
            {
                "id": 1,
                "title": "1kg",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "1.25kg",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "1.5kg",
                "price": "2.50"
            },
            {
                "id": 4,
                "title": "0.5",
                "price": "0.50"
            },
        ],
        "imageUrl": [
            "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/agnus%202.jfif?alt=media&token=10f05c16-2a64-41ab-a394-1b346f3ff1d3"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "25 min"
    },
    {
        "_id": "653169d8f94c6496dc84f3c5",
        "title": "Birds Zone",
        "foodTags": [
          
        ],
        "foodType": [
        
        ],
        "code": "41007428",
        "isAvailable": true,
        "restauratnt": "6530ea6bc9e72013e5b6592d",
        "rating": 4.8,
        "ratingCount": "320",
        "description": "A succulent assortment of grilled meats, served with sides and sauces.",
        "price": 18.99,
        "additives": [
            {
                "id": 1,
                "title": "1kg",
                "price": "1.00"
            },
            {
                "id": 2,
                "title": "1.25kg",
                "price": "1.50"
            },
            {
                "id": 3,
                "title": "1.5kg",
                "price": "2.50"
            },
            {
                "id": 4,
                "title": "0.5",
                "price": "0.50"
            },
        ],
        "imageUrl": [
            "https://firebasestorage.googleapis.com/v0/b/final-year-project-9fcba.appspot.com/o/advance%20colisol%201.jfif?alt=media&token=c5614eaf-ef5e-490f-b4ac-184defd0f529"
        ],
        "__v": 0,
        "category": "6531209dbbe4998e90af3fef",
        "time": "45 min"
    }
]

const cart =  [
    {
        "_id": "653b6588541d2aa2c1e89cd1",
        "userId": "6537a4448cd1bd140ebddcee",
        "productId": {
            "_id": "65316771f94c6496dc84f3bd",
            "title": "Margherita Pizza",
            "restauratnt": "6530ebbcc9e72013e5b65933",
            "rating": 4.5,
            "ratingCount": "150",
            "imageUrl": [
                "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp",
                "https://d326fntlu7tb1e.cloudfront.net/uploads/5c2a9ca8-eb07-400b-b8a6-2acfab2a9ee2-image001.webp"
            ]
        },
        "additives": [
            "Extra Cheese",
            "Mushrooms"
        ],
        "instructions": "",
        "totalPrice": 25.98,
        "quantity": 2,
        "__v": 0
    }
]

const profile = {
    "_id": "6537a4448cd1bd140ebddcee",
    "username": "Dbestech",
    "email": "db@king.com",
    "uid": "4NmOkCbvu7ToaBS9ZR1UVpv0G1g2",
    "address": [],
    "userType": "Vendor",
    "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/bdec9d7d-0544-4fc4-823d-3b898f6dbbbf-vinci_03.jpeg",
    "updatedAt": "2023-10-24T11:02:28.215Z"
}
const choicesList =[
    {
        id: 1,
        name:"Pick Up",
        value:"pickup"
    },
    {
        id: 2,
        name:"4 Star",
        value:"4star"
    },
    {
        id: 3,
        name:"3 Star",
        value:"3star"
    },
    {
        id: 4,
        name:"Under 30 min",
        value:"under30"
    },
    {
        id: 5,
        name:"Recommended",
        value:"Recommended"
    }
]

export default  {categories, vendors, foods, cart, profile, choicesList}