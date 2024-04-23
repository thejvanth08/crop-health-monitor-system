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
    name: "leaf blight",
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
    name: "leaf blight",
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
    name: "leaf blight",
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