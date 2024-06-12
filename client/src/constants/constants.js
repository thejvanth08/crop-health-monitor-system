import sunnyImg from "../assets/images/weather/sunny.png"
import coconutImg from "../assets/images/coconut-leaf-blight.jpg";


export const loginInputs = [
  {
    type: "email",
    name: "email",
    placeholder: "Email Address"
  },
  {
    type: "password",
    name: "email",
    placeholder: "Password"
  }
]


export const signupInputs = [
  // use these in separate page
  // {
  //   type: "text",
  //   name: "fullname",
  //   placeholder: "Full Name",
  // },
  // {
  //   type: "tel",
  //   name: "phoneNum",
  //   placeholder: "Phone Number",
  // },
  {
    type: "email",
    name: "email",
    placeholder: "Email Address",
  },
  // {
  //   type: "number",
  //   name: "aadharNum",
  //   placeholder: "Aadhar Number",
  // }
];

export const coordinates = [
  [51.51, -0.12],
  [51.51, -0.09],
];


// after disease detection -> showing analysis & remedies
export const diseaseRemedies = [
  {
    crop: "coconut tree",
    disease: "leaf blight",
    type: "fungal",
    image: coconutImg,
    causes: [
      "Fungal Infection: Pestalotiopsis spp. fungi infect coconut palms.",
      "Environmental Conditions: Warm, humid climates with high rainfall promote fungal growth.",
      "Poor Cultural Practices: Overhead watering and excessive moisture retention increase susceptibility.",
    ],
    remedies: [
      "Sanitation: Remove infected debris to prevent spread.",
      "Pruning: Trim affected leaves using sterilized tools.",
      "Fungicide Application: Use fungicides as directed.",
      "Proper Irrigation: Avoid overwatering, ensure drainage.",
      "Plant Health Management: Maintain overall health.",
      "Crop Rotation: Avoid problem areas.",
      "Resistant Varieties: Consider resistant coconut palm varieties.",
      "Monitoring: Regularly check for signs of infection.",
    ],
  },
  {
    crop: "coconut tree",
    disease: "leaf blight",
    type: "fungal",
    image: coconutImg,
    causes: [
      "Fungal Infection: Pestalotiopsis spp. fungi infect coconut palms.",
      "Environmental Conditions: Warm, humid climates with high rainfall promote fungal growth.",
      "Poor Cultural Practices: Overhead watering and excessive moisture retention increase susceptibility.",
    ],
    remedies: [
      "Sanitation: Remove infected debris to prevent spread.",
      "Pruning: Trim affected leaves using sterilized tools.",
      "Fungicide Application: Use fungicides as directed.",
      "Proper Irrigation: Avoid overwatering, ensure drainage.",
      "Plant Health Management: Maintain overall health.",
      "Crop Rotation: Avoid problem areas.",
      "Resistant Varieties: Consider resistant coconut palm varieties.",
      "Monitoring: Regularly check for signs of infection.",
    ],
  },
  {
    crop: "coconut tree",
    disease: "leaf blight",
    type: "fungal",
    image: coconutImg,
    causes: [
      "Fungal Infection: Pestalotiopsis spp. fungi infect coconut palms.",
      "Environmental Conditions: Warm, humid climates with high rainfall promote fungal growth.",
      "Poor Cultural Practices: Overhead watering and excessive moisture retention increase susceptibility.",
    ],
    remedies: [
      "Sanitation: Remove infected debris to prevent spread.",
      "Pruning: Trim affected leaves using sterilized tools.",
      "Fungicide Application: Use fungicides as directed.",
      "Proper Irrigation: Avoid overwatering, ensure drainage.",
      "Plant Health Management: Maintain overall health.",
      "Crop Rotation: Avoid problem areas.",
      "Resistant Varieties: Consider resistant coconut palm varieties.",
      "Monitoring: Regularly check for signs of infection.",
    ],
  },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Bacterial Spot",
  //   type: "bacterial",
  //   image: "tomatoImg",
  //   causes: [
  //     "Bacterial Infection: Xanthomonas campestris infects tomato plants.",
  //     "Moist Conditions: Wet and humid environments favor bacterial growth.",
  //     "Infected Plant Material: Contaminated seeds or transplants can introduce the bacteria.",
  //   ],
  //   remedies: [
  //     "Sanitation: Remove infected plant debris to prevent the spread.",
  //     "Copper-based Sprays: Apply copper fungicides to affected plants.",
  //     "Crop Rotation: Avoid planting tomatoes in the same location year after year.",
  //     "Resistant Varieties: Consider planting tomato varieties resistant to bacterial spot.",
  //     "Proper Spacing: Ensure good air circulation between plants to reduce humidity.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Early Blight",
  //   type: "fungal",
  //   image: "tomatoImg",
  //   causes: [
  //     "Fungal Infection: Alternaria solani attacks tomato plants.",
  //     "Warm and Humid Conditions: Favors fungal growth and spread.",
  //     "Infected Plant Debris: Pathogens survive on infected plant material.",
  //   ],
  //   remedies: [
  //     "Crop Rotation: Rotate crops to prevent buildup of pathogens in the soil.",
  //     "Mulching: Use organic mulch to prevent soil splash onto lower leaves.",
  //     "Fungicide Application: Apply fungicides containing chlorothalonil or copper.",
  //     "Proper Irrigation: Water at the base of plants to keep foliage dry.",
  //     "Pruning: Remove infected leaves and branches to prevent spread.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Early Blight",
  //   type: "fungal",
  //   image: "tomatoImg",
  //   causes: [
  //     "Fungal Infection: Alternaria solani attacks tomato plants.",
  //     "Warm and Humid Conditions: Favors fungal growth and spread.",
  //     "Infected Plant Debris: Pathogens survive on infected plant material.",
  //   ],
  //   remedies: [
  //     "Crop Rotation: Rotate crops to prevent buildup of pathogens in the soil.",
  //     "Mulching: Use organic mulch to prevent soil splash onto lower leaves.",
  //     "Fungicide Application: Apply fungicides containing chlorothalonil or copper.",
  //     "Proper Irrigation: Water at the base of plants to keep foliage dry.",
  //     "Pruning: Remove infected leaves and branches to prevent spread.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Late Blight",
  //   type: "fungal",
  //   image: "tomatoImg",
  //   causes: [
  //     "Fungal Infection: Phytophthora infestans infects tomato plants.",
  //     "Wet Conditions: Fungal spores spread rapidly in humid environments.",
  //     "Infected Plant Material: Pathogens survive in infected debris.",
  //   ],
  //   remedies: [
  //     "Fungicide Treatment: Apply fungicides containing mancozeb or copper.",
  //     "Proper Spacing: Allow air circulation between plants to reduce humidity.",
  //     "Remove Infected Plants: Promptly remove and destroy infected plants.",
  //     "Mulching: Prevent soil splash onto lower leaves with organic mulch.",
  //     "Resistant Varieties: Consider planting tomato varieties resistant to late blight.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Leaf Mold",
  //   type: "fungal",
  //   image: "tomatoImg",
  //   causes: [
  //     "Fungal Infection: Passalora fulva (formerly Fulvia fulva) affects tomato plants.",
  //     "High Humidity: Warm and moist conditions promote fungal growth.",
  //     "Overhead Watering: Wet foliage encourages the spread of spores.",
  //   ],
  //   remedies: [
  //     "Proper Ventilation: Ensure good airflow to reduce humidity around plants.",
  //     "Fungicide Application: Apply fungicides containing chlorothalonil or mancozeb.",
  //     "Watering Practices: Water at the base of plants to keep foliage dry.",
  //     "Remove Infected Leaves: Prune and discard infected foliage promptly.",
  //     "Resistant Varieties: Choose tomato varieties with resistance to leaf mold.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Septoria Leaf Spot",
  //   type: "fungal",
  //   image: "tomatoImg",
  //   causes: [
  //     "Fungal Infection: Septoria lycopersici infects tomato plants.",
  //     "Warm and Humid Conditions: Ideal for fungal spore germination and spread.",
  //     "Infected Debris: Pathogens overwinter on plant residue in the soil.",
  //   ],
  //   remedies: [
  //     "Crop Rotation: Rotate crops to prevent buildup of pathogens in the soil.",
  //     "Mulching: Use organic mulch to prevent soil splash onto lower leaves.",
  //     "Fungicide Treatment: Apply fungicides containing copper or chlorothalonil.",
  //     "Proper Spacing: Ensure good airflow between plants to reduce humidity.",
  //     "Remove Infected Leaves: Prune and destroy affected foliage to prevent spread.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Spider Mites",
  //   type: "pest",
  //   image: "tomatoImg",
  //   causes: [
  //     "Infestation: Tetranychus urticae and other spider mite species attack tomato plants.",
  //     "Hot and Dry Conditions: Ideal for rapid mite reproduction and activity.",
  //     "Low Humidity: Spider mites thrive in dry environments.",
  //   ],
  //   remedies: [
  //     "Insecticidal Soap: Apply insecticidal soap to affected plants to control mite populations.",
  //     "Neem Oil: Use neem oil to deter spider mites and reduce feeding damage.",
  //     "Natural Predators: Introduce predatory mites or ladybugs to control spider mite populations.",
  //     "Proper Watering: Maintain adequate soil moisture to discourage mite activity.",
  //     "Pruning: Remove heavily infested plant parts to reduce mite populations.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Two-Spotted Spider Mite",
  //   type: "pest",
  //   image: "tomatoImg",
  //   causes: [
  //     "Infestation: Tetranychus urticae infests tomato plants.",
  //     "Hot and Dry Conditions: Favorable for mite reproduction and activity.",
  //     "Overcrowding: Dense plantings can lead to increased mite infestations.",
  //   ],
  //   remedies: [
  //     "Insecticidal Soap: Apply insecticidal soap to affected plants to control mite populations.",
  //     "Neem Oil: Use neem oil as a natural deterrent against spider mites.",
  //     "Predatory Insects: Introduce predatory mites or ladybugs to control mite populations.",
  //     "Proper Watering: Maintain consistent soil moisture to discourage mite activity.",
  //     "Pruning: Remove heavily infested plant parts to reduce mite populations.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Target Spot",
  //   type: "fungal",
  //   image: "tomatoImg",
  //   causes: [
  //     "Fungal Infection: Corynespora cassiicola affects tomato plants.",
  //     "Warm and Humid Conditions: Ideal for fungal spore germination and spread.",
  //     "Infected Debris: Pathogens survive on plant residue in the soil.",
  //   ],
  //   remedies: [
  //     "Crop Rotation: Rotate crops to prevent buildup of pathogens in the soil.",
  //     "Mulching: Use organic mulch to prevent soil splash onto lower leaves.",
  //     "Fungicide Treatment: Apply fungicides containing copper or chlorothalonil.",
  //     "Proper Spacing: Ensure good airflow between plants to reduce humidity.",
  //     "Remove Infected Leaves: Prune and destroy affected foliage to prevent spread.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Mosaic Virus",
  //   type: "viral",
  //   image: "tomatoImg",
  //   causes: [
  //     "Viral Infection: Various strains of the Tobacco mosaic virus infect tomato plants.",
  //     "Mechanical Transmission: Spread through contact with infected plant sap or tools.",
  //     "Infected Seeds: Virus can be transmitted through contaminated seed stock.",
  //   ],
  //   remedies: [
  //     "Sanitation: Use sterilized tools and equipment to prevent mechanical transmission.",
  //     "Resistant Varieties: Plant tomato varieties bred for resistance to mosaic virus.",
  //     "Control Vectors: Manage populations of aphids and other potential vectors.",
  //     "Remove Infected Plants: Promptly remove and destroy infected plants to prevent spread.",
  //     "Seed Treatment: Use certified disease-free seeds to minimize viral transmission.",
  //   ],
  // },
  // {
  //   crop: "tomato",
  //   disease: "Tomato Yellow Leaf Curl Virus",
  //   type: "viral",
  //   image: "tomatoImg",
  //   causes: [
  //     "Viral Infection: Begomovirus species, transmitted by whiteflies, infect tomato plants.",
  //     "Whitefly Infestation: Whiteflies act as vectors, spreading the virus between plants.",
  //     "Warm Temperatures: Virus transmission and symptom development are favored in warm climates.",
  //   ],
  //   remedies: [
  //     "Vector Control: Manage whitefly populations through insecticidal treatments or natural predators.",
  //     "Resistant Varieties: Plant tomato varieties bred for resistance to yellow leaf curl virus.",
  //     "Reflective Mulch: Use reflective mulch to deter whiteflies from landing on plants.",
  //     "Remove Infected Plants: Promptly remove and destroy infected plants to prevent spread.",
  //     "Sanitation: Keep the garden clean to reduce opportunities for whiteflies to breed and spread the virus.",
  //   ],
  // },
];

export const crops = [
  {
    name: "Coconut",
    climate:
      "Plenty of sunlight and it does not grow well under shade or in too cloudy regions",
    temp: "27±5°C",
    soilType:
      "Well-drained, sandy or loamy soils with good water-holding capacity",
    location:
      "Kerala, Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, West Bengal, Odisha, Maharashtra, Gujarat, Assam, Bihar, Tripura, Chhattisgarh, Nagaland, Arunachal Pradesh, Mizoram",
    growingSeason: "Through the year",
    soilConditions: {
      nitrogen: "1.5% - 2.5%",
      phosphorus: "0.5% - 1.5%",
      potassium: "1.5% - 2.5%",
      humidity: "Medium to High",
      temp: "25°C to 32°C",
      ec: "1.0 - 2.0 dS/m",
      ph: "5.5 - 7.0",
    },
  },
  {
    name: "Mango",
    climate: "Humid and dry conditions",
    temp: "23.9°C to 26.7°C",
    soilType: "Lateritic, alluvial, sandy loam and sandy",
    location:
      "Uttar Pradesh, Andhra Pradesh, Bihar, Karnataka, Gujarat, Tamil Nadu, Maharashtra, West Bengal, Odisha, Madhya Pradesh",
    growingSeason:
      "Grown from June to October and harvested from April to June",
    soilConditions: {
      nitrogen: "1.0% - 2.0%",
      phosphorus: "0.3% - 1.0%",
      potassium: "1.0% - 2.0%",
      humidity: "Low to Medium",
      temp: "20°C to 30°C",
      ec: "0.8 - 1.5 dS/m",
      ph: "5.5 - 7.0",
    },
  },
  {
    name: "Banana",
    climate: "Warm tropical climate with high humidity",
    temp: "26°C to 30°C",
    soilType:
      "Deep, fertile, well-drained soils with high organic matter content",
    location:
      "Widely cultivated across India, major production regions include Maharashtra, Gujarat, Tamil Nadu, Andhra Pradesh, Karnataka, Bihar, Uttar Pradesh, Kerala, and West Bengal",
    growingSeason:
      "Continuously throughout the year, with peak production during warm, humid months",
    soilConditions: {
      nitrogen: "1.2% - 2.5%",
      phosphorus: "0.3% - 1.2%",
      potassium: "1.0% - 2.2%",
      humidity: "High",
      temp: "25°C to 30°C",
      ec: "0.8 - 1.5 dS/m",
      ph: "5.5 - 6.5",
    },
  },
  {
    name: "Tomato",
    climate: "Warm, temperate climate with plenty of sunlight",
    temp: "15°C to 30°C",
    soilType: "Well-drained, fertile soil with good organic matter content",
    location:
      "Cultivated across India, major production regions include Maharashtra, Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, Uttar Pradesh, and West Bengal",
    growingSeason:
      "Dependent on the region and variety, typically planted in winter to spring and harvested in spring to summer, but can be grown year-round in suitable climates",
    soilConditions: {
      nitrogen: "1.0% - 2.5%",
      phosphorus: "0.3% - 1.5%",
      potassium: "1.0% - 2.0%",
      humidity: "Medium",
      temp: "18°C to 30°C",
      ec: "0.5 - 1.2 dS/m",
      ph: "5.5 - 7.5",
    },
  },
  {
    name: "Palm",
    climate: "Tropical climate with high temperatures and high humidity",
    temp: "24°C to 28°C",
    soilType:
      "Well-drained, deep soils with good water-holding capacity, preferably loamy or sandy loam",
    location:
      "Primarily cultivated in the southern states of India including Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, and Kerala, as well as parts of Maharashtra and Gujarat",
    growingSeason:
      "Can be planted throughout the year, but optimal planting time is during the monsoon season from June to August. Harvesting usually begins 2.5 to 3 years after planting",
    soilConditions: {
      nitrogen: "0.8% - 2.0%",
      phosphorus: "0.1% - 1.0%",
      potassium: "0.6% - 1.5%",
      humidity: "High",
      temp: "22°C to 28°C",
      ec: "0.5 - 1.0 dS/m",
      ph: "5.5 - 6.5",
    },
  },
  {
    name: "Cashew",
    climate: "Warm tropical climate with moderate humidity",
    temp: "24°C to 30°C",
    soilType: "Well-drained sandy or sandy-loam soil with good water retention",
    location:
      "Cultivated primarily in the coastal regions of India, including Goa, Kerala, Karnataka, Maharashtra, Tamil Nadu, and Andhra Pradesh",
    growingSeason:
      "Typically planted in the monsoon season from June to August and harvested from February to May, but can vary depending on the region",
    soilConditions: {
      nitrogen: "0.8% - 1.5%",
      phosphorus: "0.2% - 0.8%",
      potassium: "0.5% - 1.2%",
      humidity: "Medium to High",
      temp: "25°C to 30°C",
      ec: "0.5 - 1.0 dS/m",
      ph: "5.5 - 7.0",
    },
  },
  {
    name: "Jackfruit",
    climate: "Tropical to subtropical climate with high humidity",
    temp: "20°C to 35°C",
    soilType:
      "Deep, well-drained soil with good organic matter content, preferably loamy or sandy loam",
    location:
      "Widely grown in the southern and coastal regions of India, including Kerala, Karnataka, Tamil Nadu, Andhra Pradesh, and Maharashtra",
    growingSeason:
      "Can be planted throughout the year, but optimal planting time is during the monsoon season from June to August. Harvesting typically occurs 3 to 8 months after flowering, depending on the variety and growing conditions",
    soilConditions: {
      nitrogen: "0.8% - 1.5%",
      phosphorus: "0.2% - 1.0%",
      potassium: "0.6% - 1.2%",
      humidity: "High",
      temp: "25°C to 30°C",
      ec: "0.5 - 1.2 dS/m",
      ph: "5.5 - 7.0",
    },
  },
  {
    name: "Guava",
    climate: "Warm tropical to subtropical climate with moderate humidity",
    temp: "25°C to 35°C",
    soilType:
      "Well-drained, fertile soil with good organic matter content, preferably sandy loam or loamy soil",
    location:
      "Cultivated across various states in India, including Uttar Pradesh, Bihar, Maharashtra, Gujarat, Karnataka, Andhra Pradesh, Tamil Nadu, and West Bengal",
    growingSeason:
      "Typically planted during the pre-monsoon season from April to June and harvested from September to December, though it can vary depending on the region and variety. Guavas can be grown throughout the year in suitable climates",
    soilConditions: {
      nitrogen: "1.0% - 2.5%",
      phosphorus: "0.3% - 1.2%",
      potassium: "0.8% - 2.0%",
      humidity: "Medium to High",
      temp: "25°C to 30°C",
      ec: "0.8 - 1.5 dS/m",
      ph: "5.5 - 7.0",
    },
  },
];

export const weatherData = [
  {
    month: "April",
    date: "30",
    temp: "29° C",
    condition: "Sunny",
    img: sunnyImg,
  },
  {
    month: "April",
    date: "29",
    temp: "29° C",
    condition: "Sunny",
    img: sunnyImg,
  },
  {
    month: "April",
    date: "28",
    temp: "29° C",
    condition: "Sunny",
    img: sunnyImg,
  },
  {
    month: "April",
    date: "27",
    temp: "29° C",
    condition: "Sunny",
    img: sunnyImg,
  },
];

export const reports = [
  { id: 1, date: "24.04.2024" },
  { id: 2, date: "25.04.2024" },
  { id: 3, date: "26.04.2024" },
  { id: 4, date: "27.04.2024" },
  { id: 5, date: "28.04.2024" },
  { id: 6, date: "29.04.2024" },
  { id: 7, date: "30.04.2024" },
];


export const sensors = [
  { name: "Nitrogen" },
  { name: "Phosphorus" },
  { name: "Potassium" },
  { name: "Soil Humidity" },
  { name: "Temperature" },
  { name: "Electrical Conductivity" },
  { name: "Soil pH" },
];

export const soilConditions = [
{
  cropName: "mango",
  parameters: [
    {
      name: "nitrogen",
      unit: "",
      range: {
        start: "",
        second: "",
        third: "",
        last: ""
      }
    },
    
  ]
}
]