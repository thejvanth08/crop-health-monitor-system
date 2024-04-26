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
  {
    type: "text",
    name: "fullname",
    placeholder: "Full Name",
  },
  {
    type: "tel",
    name: "phoneNum",
    placeholder: "Phone Number",
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email Address",
  },
  {
    type: "number",
    name: "aadharNum",
    placeholder: "Aadhar Number",
  }
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
  },
  {
    name: "Mango",
    climaticRequirements: "Humid and dry conditions",
    temperatureRange: "23.9°C to 26.7°C",
    soilType: "Lateritic, alluvial, sandy loam and sandy",
    location:
      "Uttar Pradesh, Andhra Pradesh, Bihar, Karnataka, Gujarat, Tamil Nadu, Maharashtra, West Bengal, Odisha, Madhya Pradesh",
    growingSeason:
      "Grown from June to October and harvested from April to June",
  },
];


// export const weatherReports = [
//   {
//     date: 
//   }
// ]