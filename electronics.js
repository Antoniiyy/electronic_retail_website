/**
 * Опис структури даних для каталогу електроніки.
 * Масив об'єктів, де кожен об'єкт представляє окрему одиницю товару.
 */
const electronicsList = [
    {
        id: "elec-1001",
        name: "Смартфон TechPro Max 5G",
        brand: "TechPro",
        category: "Смартфони",
        price: 32999, // Ціна у гривнях
        inStock: true,
        rating: 4.8,
        reviewsCount: 124,
        images: [
            "/assets/images/techpro-max-front.jpg",
            "/assets/images/techpro-max-back.jpg"
        ],
        // Вкладений об'єкт для специфічних технічних характеристик
        specs: {
            screen: "6.7 дюймів, OLED, 120Hz",
            processor: "Octa-core 3.2 GHz",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5000 mAh"
        },
        tags: ["новинка", "хіт продажу"]
    },
    {
        id: "elec-1002",
        name: "Ноутбук DevBook Pro 15",
        brand: "CodeMachines",
        category: "Ноутбуки",
        price: 54500,
        inStock: false, // Товару немає в наявності
        rating: 4.9,
        reviewsCount: 89,
        images: [
            "/assets/images/devbook-open.jpg",
            "/assets/images/devbook-closed.jpg"
        ],
        specs: {
            screen: "15.6 дюймів, 4K Retina",
            processor: "M2 Max",
            ram: "32 GB",
            storage: "1 TB SSD",
            battery: "До 18 годин роботи"
        },
        tags: ["для програмістів", "потужний"]
    },
    {
        id: "elec-1003",
        name: "Бездротові навушники SoundBeat Active",
        brand: "AudioNova",
        category: "Аудіотехніка",
        price: 3499,
        inStock: true,
        rating: 4.6,
        reviewsCount: 312,
        images: [
            "/assets/images/soundbeat-black.jpg",
            "/assets/images/soundbeat-case.jpg"
        ],
        specs: {
            type: "Внутрішньоканальні",
            connection: "Bluetooth 5.3",
            noiseCancellation: "Активне (ANC)",
            battery: "До 30 годин з кейсом"
        },
        tags: ["спорт", "знижка"]
    }
];

// Експорт масиву для подальшого використання в інших файлах проєкту
export default electronicsList;
