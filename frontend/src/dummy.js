import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Aarav Gupta",
    place: "Delhi, India",
    description:
      "A software engineer passionate about building innovative web applications.",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Meera Iyer",
    place: "Bangalore, India",
    description: "A graphic designer with a love for minimalist designs.",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Rohan Sharma",
    place: "Mumbai, India",
    description: "A travel blogger exploring India's hidden gems.",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Priya Nair",
    place: "Kochi, India",
    description: "A writer who enjoys penning stories about culture and art.",
    latitude: 9.9312,
    longitude: 76.2673,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Aditya Rao",
    place: "Hyderabad, India",
    description: "An entrepreneur driven by creating impactful solutions.",
    latitude: 17.385,
    longitude: 78.4867,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Lakshmi Reddy",
    place: "Chennai, India",
    description: "A classical dancer who shares her journey through vlogs.",
    latitude: 13.0827,
    longitude: 80.2707,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Karan Verma",
    place: "Pune, India",
    description: "A tech enthusiast and open-source contributor.",
    latitude: 18.5204,
    longitude: 73.8567,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Ananya Das",
    place: "Kolkata, India",
    description: "A digital marketer focused on building brand narratives.",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Ishaan Bhatt",
    place: "Ahmedabad, India",
    description: "A photographer capturing the vibrant streets of India.",
    latitude: 23.0225,
    longitude: 72.5714,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Sanya Kapoor",
    place: "Jaipur, India",
    description: "A fashion designer inspired by traditional Indian crafts.",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Amit Patel",
    place: "Surat, India",
    description: "A textile entrepreneur with a passion for innovation.",
    latitude: 21.1702,
    longitude: 72.8311,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Neha Joshi",
    place: "Lucknow, India",
    description: "A chef experimenting with fusion cuisines.",
    latitude: 26.8467,
    longitude: 80.9462,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Arjun Singh",
    place: "Amritsar, India",
    description: "A historian fascinated by Sikh heritage.",
    latitude: 31.634,
    longitude: 74.8723,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Ritika Malhotra",
    place: "Indore, India",
    description: "An architect focused on sustainable designs.",
    latitude: 22.7196,
    longitude: 75.8577,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Vikram Ahuja",
    place: "Bhopal, India",
    description: "A poet who writes about human emotions.",
    latitude: 23.2599,
    longitude: 77.4126,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Pooja Chawla",
    place: "Chandigarh, India",
    description: "A yoga instructor sharing wellness tips online.",
    latitude: 30.7333,
    longitude: 76.7794,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Harsh Vardhan",
    place: "Patna, India",
    description: "A political analyst with a focus on state policies.",
    latitude: 25.5941,
    longitude: 85.1376,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Tanya Mehta",
    place: "Vadodara, India",
    description: "An interior designer passionate about modern aesthetics.",
    latitude: 22.3072,
    longitude: 73.1812,
  },
  {
    id: uuidv4(),
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop",
    name: "Ankur Jain",
    place: "Nagpur, India",
    description: "A wildlife photographer documenting India's biodiversity.",
    latitude: 21.1458,
    longitude: 79.0882,
  },
];

export default dummyData;
