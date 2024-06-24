import sunnyImg from "../assets/images/weather/sunny.png"
import tomatoBactSpotImg from "../assets/images/diseases/tomato/tomatoBactSpotImg.jpg";
import tomatoEarlyBlightImg from "../assets/images/diseases/tomato/tomatoEarlyBlightImg.jpg";
import tomatoLateBlightImg from "../assets/images/diseases/tomato/tomatoLateBlightImg.jpg";
import tomatoLeafMoldImg from "../assets/images/diseases/tomato/tomatoLeafMoldImg.jpg";
import tomatoSeptoriaLeafSpotImg from "../assets/images/diseases/tomato/tomatoSeptoriaLeafSpotImg.jpg";
import tomatoSpiderMitesImg from "../assets/images/diseases/tomato/tomatoSpiderMitesImg.jpg";
import tomatoTargetSpotImg from "../assets/images/diseases/tomato/tomatoTargetSpotImg.jpg";
import tomatoYellowLeafCurlVirusImg from "../assets/images/diseases/tomato/tomatoYellowLeafCurlVirusImg.jpg";
import tomatoMosaicVirusImg from "../assets/images/diseases/tomato/tomatoMosaicVirusImg.jpg";


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
    crop: "tomato",
    disease: "Tomato___Bacterial_spot",
    type: "bacterial",
    image: tomatoBactSpotImg,
    causes: [
      "Bacterial Infection: Xanthomonas campestris infects tomato plants.",
      "Moist Conditions: Wet and humid environments favor bacterial growth.",
      "Infected Plant Material: Contaminated seeds or transplants can introduce the bacteria.",
    ],
    remedies: [
      "Sanitation: Remove infected plant debris to prevent the spread.",
      "Copper-based Sprays: Apply copper fungicides to affected plants.",
      "Crop Rotation: Avoid planting tomatoes in the same location year after year.",
      "Resistant Varieties: Consider planting tomato varieties resistant to bacterial spot.",
      "Proper Spacing: Ensure good air circulation between plants to reduce humidity.",
    ],
  },
  {
    crop: "tomato",
    disease: "Tomato___Early_blight",
    type: "fungal",
    image: tomatoEarlyBlightImg,
    causes: [
      "Fungal Infection: Alternaria solani infects tomato plants.",
      "Wet Conditions: Extended periods of leaf wetness and high humidity promote fungal growth.",
      "Infected Plant Debris: The fungus can survive on plant debris in the soil.",
      "Poor Nutrition: Weak plants due to poor nutrition are more susceptible to infection.",
    ],
    remedies: [
      "Sanitation: Remove and destroy infected plant debris to reduce the source of infection.",
      "Fungicide Application: Use fungicides containing chlorothalonil or mancozeb to manage the disease.",
      "Crop Rotation: Rotate crops to prevent the buildup of the pathogen in the soil.",
      "Resistant Varieties: Plant tomato varieties that are resistant to early blight.",
      "Mulching: Apply mulch to reduce soil splashing onto leaves, which can spread the fungus.",
      "Proper Watering: Water at the base of the plants to keep foliage dry and reduce humidity.",
    ],
  },
  {
    crop: "tomato",
    disease: "Tomato___Late_blight",
    type: "fungal",
    image: tomatoLateBlightImg,
    causes: [
      "Fungal Infection: Phytophthora infestans infects tomato plants.",
      "Moist Conditions: Prolonged periods of wet and cool weather favor fungal development.",
      "Infected Plant Material: The fungus can be introduced through infected transplants or seeds.",
      "Poor Air Circulation: Dense foliage and crowded plants increase humidity, promoting the spread of the fungus.",
    ],
    remedies: [
      "Sanitation: Remove and destroy infected plant material to prevent the spread.",
      "Fungicide Application: Use fungicides containing chlorothalonil, mancozeb, or copper-based products to control the disease.",
      "Resistant Varieties: Plant tomato varieties that are resistant to late blight.",
      "Proper Spacing: Ensure adequate spacing between plants to improve air circulation.",
      "Watering Practices: Water plants at the base and avoid overhead irrigation to keep foliage dry.",
      "Crop Rotation: Rotate crops to prevent the pathogen from building up in the soil.",
    ],
  },
  {
    crop: "tomato",
    disease: "Tomato___Leaf_Mold",
    type: "fungal",
    image: tomatoLeafMoldImg,
    causes: [
      "Fungal Infection: Fulvia fulva (syn. Cladosporium fulvum) infects tomato plants.",
      "High Humidity: The fungus thrives in humid conditions with poor air circulation.",
      "Contaminated Water: The pathogen can spread through water splashed onto leaves.",
      "Infected Plant Material: The fungus can survive on plant debris and spread through contaminated tools or hands.",
    ],
    remedies: [
      "Sanitation: Remove and destroy infected leaves and plant debris to reduce the source of infection.",
      "Fungicide Application: Use fungicides containing chlorothalonil or copper-based products to control the disease.",
      "Proper Ventilation: Improve air circulation in greenhouses or high tunnels to reduce humidity.",
      "Resistant Varieties: Plant tomato varieties that are resistant to leaf mold.",
      "Watering Practices: Water plants at the base to avoid wetting the foliage.",
      "Crop Rotation: Practice crop rotation to prevent the buildup of the pathogen in the soil.",
    ],
  },
  {
    crop: "tomato",
    disease: "Tomato___Septoria_leaf_spot",
    type: "fungal",
    image: tomatoSeptoriaLeafSpotImg,
    causes: [
      "Fungal Infection: Septoria lycopersici infects tomato plants.",
      "Wet Conditions: The fungus thrives in wet, humid conditions.",
      "Infected Plant Debris: The pathogen can survive on plant debris and in the soil.",
      "Poor Air Circulation: Dense foliage and crowded plants increase humidity, promoting the spread of the fungus.",
    ],
    remedies: [
      "Sanitation: Remove and destroy infected leaves and plant debris to reduce the source of infection.",
      "Fungicide Application: Use fungicides containing chlorothalonil or copper-based products to manage the disease.",
      "Crop Rotation: Rotate crops to prevent the buildup of the pathogen in the soil.",
      "Resistant Varieties: Plant tomato varieties that are resistant to Septoria leaf spot.",
      "Proper Spacing: Ensure adequate spacing between plants to improve air circulation.",
      "Watering Practices: Water plants at the base to keep foliage dry and reduce humidity.",
    ],
  },
  {
    crop: "tomato",
    disease: "Tomato___Spider_mites_Two-spotted_spider_mite",
    type: "pest",
    image: tomatoSpiderMitesImg,
    causes: [
      "Pest Infestation: Tetranychus urticae, also known as the two-spotted spider mite, infests tomato plants.",
      "Dry Conditions: Hot, dry weather conditions favor spider mite infestations.",
      "Overcrowding: Dense plantings can lead to higher humidity, which can encourage mite populations.",
      "Stress Factors: Plants under stress due to drought, poor nutrition, or other factors are more susceptible to mite infestations.",
    ],
    remedies: [
      "Biological Control: Introduce natural predators like ladybugs, predatory mites, or lacewings to control spider mite populations.",
      "Miticide Application: Use appropriate miticides to control severe infestations, following label instructions carefully.",
      "Water Spray: Regularly spray plants with water to dislodge mites and reduce their populations.",
      "Proper Watering: Maintain adequate irrigation to reduce plant stress and discourage mite infestations.",
      "Cleanliness: Remove and destroy heavily infested plant material to prevent the spread of mites.",
      "Mulching: Apply mulch to conserve soil moisture and reduce dust, which can exacerbate mite problems.",
    ],
  },
  {
    crop: "tomato",
    disease: "Tomato___Target_Spot",
    type: "fungal",
    image: tomatoTargetSpotImg,
    causes: [
      "Fungal Infection: Corynespora cassiicola infects tomato plants.",
      "Wet Conditions: The fungus thrives in wet and humid conditions.",
      "Infected Plant Debris: The pathogen can survive on plant debris and in the soil.",
      "Poor Air Circulation: Dense foliage and crowded plants increase humidity, promoting the spread of the fungus.",
    ],
    remedies: [
      "Sanitation: Remove and destroy infected leaves and plant debris to reduce the source of infection.",
      "Fungicide Application: Use fungicides containing chlorothalonil, mancozeb, or copper-based products to manage the disease.",
      "Crop Rotation: Rotate crops to prevent the buildup of the pathogen in the soil.",
      "Resistant Varieties: Plant tomato varieties that are resistant to target spot.",
      "Proper Spacing: Ensure adequate spacing between plants to improve air circulation.",
      "Watering Practices: Water plants at the base to keep foliage dry and reduce humidity.",
    ],
  },
  {
    crop: "tomato",
    disease: "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
    type: "viral",
    image: tomatoYellowLeafCurlVirusImg,
    causes: [
      "Viral Infection: Tomato Yellow Leaf Curl Virus (TYLCV) infects tomato plants.",
      "Whitefly Vectors: The virus is transmitted by whiteflies (Bemisia tabaci).",
      "Infected Plant Material: The virus can spread through infected transplants or cuttings.",
      "Environmental Conditions: Warm temperatures and high whitefly populations favor the spread of the virus.",
    ],
    remedies: [
      "Whitefly Control: Use insecticidal soaps, neem oil, or yellow sticky traps to manage whitefly populations.",
      "Resistant Varieties: Plant tomato varieties that are resistant to TYLCV.",
      "Exclusion: Use physical barriers like row covers to protect plants from whiteflies.",
      "Sanitation: Remove and destroy infected plants to prevent the spread of the virus.",
      "Weed Control: Remove weeds that can host whiteflies and the virus.",
      "Proper Spacing: Ensure adequate spacing between plants to reduce whitefly habitats and improve air circulation.",
    ],
  },
  {
    crop: "tomato",
    disease: "Tomato___Tomato_mosaic_virus",
    type: "viral",
    image: tomatoMosaicVirusImg,
    causes: [
      "Viral Infection: Tomato mosaic virus (ToMV) infects tomato plants.",
      "Mechanical Transmission: The virus spreads through handling of plants, contaminated tools, and plant-to-plant contact.",
      "Infected Seeds: The virus can be introduced through infected seeds.",
      "Environmental Conditions: The virus can persist in soil and plant debris under various environmental conditions.",
    ],
    remedies: [
      "Sanitation: Disinfect tools and wash hands frequently to prevent mechanical transmission.",
      "Resistant Varieties: Plant tomato varieties that are resistant to ToMV.",
      "Seed Treatment: Use certified disease-free seeds and consider treating seeds with disinfectants.",
      "Crop Rotation: Rotate crops to prevent the buildup of the virus in the soil.",
      "Rogueing: Remove and destroy infected plants to reduce the spread of the virus.",
      "Avoid Tobacco: Avoid handling tomato plants after using tobacco products, as the virus can be present in tobacco.",
    ],
  },
  {
    crop: "tomato",
    disease: "Tomato___healthy",
    type: "healthy",
    // image: tomatoHealthyImg,
    characteristics: [
      "Vibrant Green Leaves: Healthy tomato plants have deep green, glossy leaves.",
      "Strong Stem: The stem is sturdy and upright, supporting the weight of the plant.",
      "Abundant Flowers: Healthy plants produce numerous yellow flowers that lead to fruit set.",
      "Uniform Fruit Development: Fruits are uniformly sized, colored, and shaped, free from blemishes or spots.",
      "Good Growth Rate: The plant exhibits steady growth without any stunted or distorted parts.",
      "Absence of Pests and Diseases: No visible signs of pests, fungal infections, or nutrient deficiencies.",
    ],
    care: [
      "Adequate Watering: Water consistently at the base of the plant, ensuring soil remains moist but not waterlogged.",
      "Proper Nutrition: Fertilize with a balanced fertilizer rich in nitrogen, phosphorus, and potassium.",
      "Pruning: Remove suckers and lower leaves to improve air circulation and plant health.",
      "Mulching: Apply mulch to retain soil moisture, regulate temperature, and prevent weed growth.",
      "Support: Use stakes, cages, or trellises to support the plant and prevent damage to stems and fruits.",
      "Regular Monitoring: Inspect plants regularly for any signs of stress, pests, or disease to take timely action.",
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