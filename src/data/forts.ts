export type FortType = "Hill" | "Sea" | "Forest" | "Land";

export interface Fort {
  id: string;
  name: string;
  district: string;
  type: FortType;
  altitude: number; 
  lat: number;
  lng: number;
  image: string;
  shortDescription: string;
  history: string;
  significance: string;
}

export const districts = [
  "Pune", "Raigad", "Satara", "Kolhapur", "Sindhudurg", "Ratnagiri",
  "Nashik", "Ahmednagar", "Thane", "Mumbai", "Aurangabad", "Osmanabad",
  "Solapur", "Sangli", "Latur", "Beed", "Palghar", "Jalgaon", "Dhule",
  "Amravati", "Akola", "Nanded"
];

export const fortTypes: FortType[] = ["Hill", "Sea", "Forest", "Land"];

export const forts: Fort[] = [
  {
    id: "raigad",
    name: "Raigad Fort",
    district: "Raigad",
    type: "Hill",
    altitude: 820,
    lat: 18.2334,
    lng: 73.4473,
    image: "/images/forts/raigad.jpg",
    shortDescription: "The capital of the Maratha Empire under Chhatrapati Shivaji Maharaj.",
    history: "Raigad was the capital fort of the Maratha Empire. Shivaji Maharaj was crowned here in 1674 CE. The fort stands at 820 meters and was considered nearly impregnable.",
    significance: "Coronation site of Chhatrapati Shivaji Maharaj and capital of the Maratha Empire."
  },
  {
    id: "pratapgad",
    name: "Pratapgad Fort",
    district: "Satara",
    type: "Hill",
    altitude: 1080,
    lat: 17.9367,
    lng: 73.5803,
    image: "/images/forts/pratapgad.jpg",
    shortDescription: "Site of the legendary Battle of Pratapgad in 1659.",
    history: "Built by Shivaji Maharaj in 1656, Pratapgad witnessed the famous battle where Afzal Khan was slain. This victory established Maratha dominance in the Deccan.",
    significance: "Site of the iconic battle between Shivaji Maharaj and Afzal Khan."
  },
  {
    id: "sinhagad",
    name: "Sinhagad Fort",
    district: "Pune",
    type: "Hill",
    altitude: 1312,
    lat: 18.3662,
    lng: 73.7557,
    image: "/images/forts/sinhagad.jpg",
    shortDescription: "The Lion Fort, scene of Tanaji Malusare's legendary sacrifice.",
    history: "Originally known as Kondhana, this fort was renamed Sinhagad after the brave sacrifice of Tanaji Malusare in 1670. The Battle of Sinhagad is one of the most celebrated battles in Maratha history.",
    significance: "Named after the lion-hearted sacrifice of Tanaji Malusare."
  },
  {
    id: "torna",
    name: "Torna Fort",
    district: "Pune",
    type: "Hill",
    altitude: 1404,
    lat: 18.2757,
    lng: 73.6226,
    image: "/images/forts/torna.jpg",
    shortDescription: "The first fort captured by young Shivaji at age 16.",
    history: "In 1646, a 16-year-old Shivaji captured Torna Fort, marking the beginning of the Maratha Empire. This was the first fort in what would become an empire of over 300 forts.",
    significance: "The birthplace of the Maratha Empire — the first fort captured by Shivaji Maharaj."
  },
  {
    id: "rajgad",
    name: "Rajgad Fort",
    district: "Pune",
    type: "Hill",
    altitude: 1376,
    lat: 18.2476,
    lng: 73.6827,
    image: "/images/forts/rajgad.jpg",
    shortDescription: "The 'King Fort' — capital of Maratha Empire for 26 years.",
    history: "Rajgad served as the Maratha capital for 26 years before Raigad. Shivaji Maharaj spent a significant portion of his career at this fort, which has three machis (plateaus) and a formidable Balekilla.",
    significance: "Former capital of Maratha Empire for over two decades."
  },
  {
    id: "shivneri",
    name: "Shivneri Fort",
    district: "Pune",
    type: "Hill",
    altitude: 1040,
    lat: 19.2036,
    lng: 73.8694,
    image: "/images/forts/shivneri.jpg",
    shortDescription: "Birthplace of Chhatrapati Shivaji Maharaj.",
    history: "Shivneri Fort near Junnar is the birthplace of Shivaji Maharaj, born on February 19, 1630. The fort has the temple of Goddess Shivai, after whom Shivaji was named.",
    significance: "Sacred birthplace of the founder of the Maratha Empire."
  },
  {
    id: "sindhudurg",
    name: "Sindhudurg Fort",
    district: "Sindhudurg",
    type: "Sea",
    altitude: 0,
    lat: 16.0467,
    lng: 73.4650,
    image: "/images/forts/sindhudurg.jpg",
    shortDescription: "An invincible sea fort built on a rocky island in the Arabian Sea.",
    history: "Built by Shivaji Maharaj in 1664, Sindhudurg is a marvel of marine architecture. It was built on a rocky island to counter the rising influence of foreign naval powers.",
    significance: "Master of naval fortification and Shivaji Maharaj's vision for maritime power."
  },
  {
    id: "vijaydurg",
    name: "Vijaydurg Fort",
    district: "Sindhudurg",
    type: "Sea",
    altitude: 0,
    lat: 16.5631,
    lng: 73.3367,
    image: "/images/forts/vijaydurg.jpg",
    shortDescription: "The oldest and strongest sea fort on the Konkan coast.",
    history: "Vijaydurg is considered the oldest fort on the Konkan coast. Shivaji Maharaj captured it and expanded it significantly, making it the headquarters of the Maratha Navy.",
    significance: "Headquarters of the formidable Maratha Navy."
  },
  {
    id: "panhala",
    name: "Panhala Fort",
    district: "Kolhapur",
    type: "Hill",
    altitude: 977,
    lat: 16.8114,
    lng: 74.1103,
    image: "/images/forts/panhala.jpg",
    shortDescription: "The largest fort in the Deccan, witness to Shivaji's daring escape.",
    history: "Panhala is one of the largest forts in the Deccan. It is famous for Shivaji Maharaj's daring escape from the Siddi Jauhar siege in 1660.",
    significance: "Scene of one of the most dramatic escapes in Maratha history."
  },
  {
    id: "lohagad",
    name: "Lohagad Fort",
    district: "Pune",
    type: "Hill",
    altitude: 1033,
    lat: 18.7085,
    lng: 73.4749,
    image: "/images/forts/lohagad.jpg",
    shortDescription: "The Iron Fort, closely linked with Visapur Fort.",
    history: "Lohagad, meaning 'Iron Fort', has been used since ancient times. Shivaji Maharaj captured it in 1648 and used it to store the treasure looted from Surat.",
    significance: "Treasury fort of the Maratha Empire."
  },
  {
    id: "murud-janjira",
    name: "Murud-Janjira Fort",
    district: "Raigad",
    type: "Sea",
    altitude: 0,
    lat: 18.2939,
    lng: 72.9638,
    image: "/images/forts/murud-janjira.jpg",
    shortDescription: "The unconquered island fortress of the Siddis.",
    history: "One of the strongest marine forts, Janjira was never conquered by any power. Even Shivaji Maharaj and later Sambhaji Maharaj attempted to capture it but the fort remained unconquered.",
    significance: "The only fort that remained unconquered by the Marathas."
  },
  {
    id: "purandar",
    name: "Purandar Fort",
    district: "Pune",
    type: "Hill",
    altitude: 1387,
    lat: 18.2825,
    lng: 73.9822,
    image: "/images/forts/purandar.jpg",
    shortDescription: "Birthplace of Sambhaji Maharaj and site of a pivotal treaty.",
    history: "Purandar Fort witnessed the birth of Sambhaji Maharaj in 1657. The Treaty of Purandar in 1665 between Shivaji and Jai Singh I was a turning point in Maratha history.",
    significance: "Birthplace of Sambhaji Maharaj and site of the Treaty of Purandar."
  },
  {
    id: "rangana",
    name: "Rangana Fort",
    district: "Kolhapur",
    type: "Forest",
    altitude: 1050,
    lat: 16.0500,
    lng: 73.8200,
    image: "/images/forts/rangana.jpg",
    shortDescription: "A remote forest fort in the dense Sahyadri ranges.",
    history: "Rangana is a forest fort nestled deep in the Sahyadri mountains. It was strategically important for controlling trade routes through the dense Western Ghats.",
    significance: "Guardian of the Sahyadri mountain trade routes."
  },
  {
    id: "rajmachi",
    name: "Rajmachi Fort",
    district: "Pune",
    type: "Hill",
    altitude: 928,
    lat: 18.8370,
    lng: 73.3993,
    image: "/images/forts/rajmachi.jpg",
    shortDescription: "A twin-fortified hill overlooking the Bor Ghat trade route.",
    history: "Rajmachi consists of two fortified peaks, Shrivardhan and Manaranjan. It controlled the ancient trade route through Bor Ghat connecting the Konkan coast to the Deccan plateau.",
    significance: "Strategic control over the vital Bor Ghat trade route."
  },
  {
    id: "suvarnadurg",
    name: "Suvarnadurg Fort",
    district: "Ratnagiri",
    type: "Sea",
    altitude: 0,
    lat: 17.3833,
    lng: 73.1833,
    image: "/images/forts/suvarnadurg.jpg",
    shortDescription: "The Golden Fort guarding the Konkan coastline.",
    history: "Suvarnadurg, meaning 'Golden Fort', was strengthened by Shivaji Maharaj as part of his coastal defense strategy. It served as an important naval base.",
    significance: "Key naval base protecting the Konkan coast."
  },
  {
    id: "salher",
    name: "Salher Fort",
    district: "Nashik",
    type: "Hill",
    altitude: 1567,
    lat: 20.6333,
    lng: 73.7000,
    image: "/images/forts/salher.jpg",
    shortDescription: "The highest fort in Maharashtra, site of a decisive Maratha victory.",
    history: "At 1567 meters, Salher is the highest fort in Maharashtra. The Battle of Salher in 1672 was the first large-scale pitched battle won by Marathas against the Mughals.",
    significance: "Highest fort in Maharashtra and site of a landmark Maratha victory."
  },
  {
    id: "daulatabad",
    name: "Daulatabad Fort",
    district: "Aurangabad",
    type: "Hill",
    altitude: 250,
    lat: 19.9427,
    lng: 75.2182,
    image: "/images/forts/daulatabad.jpg",
    shortDescription: "One of the most powerful forts in the Deccan.",
    history: "Originally called Devagiri, Daulatabad is one of the most formidable forts in India. It features a massive moat, a dark spiral passage, and ingenious defensive architecture.",
    significance: "A masterpiece of medieval military engineering."
  },
  {
    id: "korigad",
    name: "Korigad Fort",
    district: "Pune",
    type: "Hill",
    altitude: 929,
    lat: 18.6250,
    lng: 73.2500,
    image: "/images/forts/korigad.jpg",
    shortDescription: "A fort with beautiful fortifications near Lonavala.",
    history: "Korigad was captured by Shivaji Maharaj in 1657. The fort features beautiful bastions and offers panoramic views of the Sahyadri ranges.",
    significance: "Part of the chain of forts defending the Bor Ghat."
  },
  {
    id: "harishchandragad",
    name: "Harishchandragad",
    district: "Ahmednagar",
    type: "Hill",
    altitude: 1422,
    lat: 19.3900,
    lng: 73.7760,
    image: "/images/forts/harishchandragad.jpg",
    shortDescription: "Ancient fort famous for the Konkan Kada cliff.",
    history: "Built during the 6th century, it was later controlled by the Marathas. It is renowned for its monumental Konkan Kada, an imposing cliff face.",
    significance: "An architectural and natural marvel."
  },
  {
    id: "visapur",
    name: "Visapur Fort",
    district: "Pune",
    type: "Hill",
    altitude: 1084,
    lat: 18.7200,
    lng: 73.4900,
    image: "/images/forts/visapur.jpg",
    shortDescription: "Twin of Lohagad with massive fortification walls.",
    history: "Built much later than Lohagad by the first Peshwa, Balaji Vishwanath. Visapur has extensive defensive walls and shares a plateau with Lohagad.",
    significance: "A key defensive garrison near the ancient trade routes."
  },
  {
    id: "tikona",
    name: "Tikona Fort",
    district: "Pune",
    type: "Hill",
    altitude: 1091,
    lat: 18.6300,
    lng: 73.5100,
    image: "/images/forts/tikona.jpg",
    shortDescription: "The pyramidal hill fort known as Vitandgad.",
    history: "Known for its distinct pyramidal shape, it was captured by Shivaji Maharaj in 1657. It features a prominent Trimbakeshwar Mahadev temple.",
    significance: "Dominates the Pawna Maval region."
  },
  {
    id: "tung",
    name: "Tung Fort",
    district: "Pune",
    type: "Hill",
    altitude: 1075,
    lat: 18.6500,
    lng: 73.4600,
    image: "/images/forts/tung.jpg",
    shortDescription: "A conical watchtower fort in the Pawna basin.",
    history: "Tung, meaning 'difficult', was primarily a watchtower built to guard the approach to the more significant fort of Tikona.",
    significance: "Served as a critical early-warning watchpost."
  },
  {
    id: "vasota",
    name: "Vasota Fort",
    district: "Satara",
    type: "Forest",
    altitude: 1171,
    lat: 17.6500,
    lng: 73.6800,
    image: "/images/forts/vasota.jpg",
    shortDescription: "A remote fort deep within the Koyna Wildlife Sanctuary.",
    history: "Surrounded by dense forest and water on three sides, Vasota was used by Marathas to hold high-profile prisoners due to its inaccessibility.",
    significance: "One of the most impenetrable forest forts."
  },
  {
    id: "sajjangad",
    name: "Sajjangad Fort",
    district: "Satara",
    type: "Hill",
    altitude: 914,
    lat: 17.6500,
    lng: 73.9100,
    image: "/images/forts/sajjangad.jpg",
    shortDescription: "The final resting place of Samarth Ramdas Swami.",
    history: "Originally called Parali, the fort was renamed Sajjangad. It is famous as the abode and samadhi site of Samarth Ramdas Swami, the spiritual guru of Shivaji Maharaj.",
    significance: "A major pilgrimage site and spiritual center."
  },
  {
    id: "ajinkyatara",
    name: "Ajinkyatara Fort",
    district: "Satara",
    type: "Hill",
    altitude: 1005,
    lat: 17.6700,
    lng: 73.9900,
    image: "/images/forts/ajinkyatara.jpg",
    shortDescription: "The 'Impregnable Star' that served as the fourth Maratha capital.",
    history: "Following the fall of Raigad, Rajaram Maharaj moved the capital here. It served as a critical Maratha stronghold during the 27-year war against Mughals.",
    significance: "The fourth capital of the Maratha Empire."
  },
  {
    id: "sudhagad",
    name: "Sudhagad Fort",
    district: "Raigad",
    type: "Hill",
    altitude: 618,
    lat: 18.5400,
    lng: 73.3100,
    image: "/images/forts/sudhagad.jpg",
    shortDescription: "A massive fort proposed by Shivaji Maharaj as his capital.",
    history: "Sudhagad (formerly Bhorapgad) is a large plateau fort. It was a strong candidate for the capital of the Maratha Empire before Raigad was finalized.",
    significance: "The fort that almost became the capital."
  },
  {
    id: "karnala",
    name: "Karnala Fort",
    district: "Raigad",
    type: "Hill",
    altitude: 439,
    lat: 18.8800,
    lng: 73.1100,
    image: "/images/forts/karnala.jpg",
    shortDescription: "A funnel-shaped hill fort now surrounded by a bird sanctuary.",
    history: "The fort was strategically located overlooking the Bor Pass. It changed hands frequently between Marathas, Mughals, and Portuguese.",
    significance: "Crucial watchtower on the Konkan coast."
  },
  {
    id: "prabalgad",
    name: "Prabalgad Fort",
    district: "Raigad",
    type: "Hill",
    altitude: 700,
    lat: 18.9600,
    lng: 73.2200,
    image: "/images/forts/prabalgad.jpg",
    shortDescription: "A massive plateau fort overlooking Panvel.",
    history: "Also known as Muranjan, it was captured by Shivaji Maharaj in 1657. It shares a saddle with the steep Kalavantin Durg.",
    significance: "A major garrison controlling the Mumbai-Pune route."
  },
  {
    id: "harihar",
    name: "Harihar Fort",
    district: "Nashik",
    type: "Hill",
    altitude: 1120,
    lat: 19.9000,
    lng: 73.4700,
    image: "/images/forts/harihar.jpg",
    shortDescription: "Famous for its near-vertical rock-cut steps.",
    history: "Built on a triangular prism of rock, Harihar was part of the Trimbak range forts. It is widely known today for its thrilling vertical staircase carved into the rock.",
    significance: "An engineering marvel of ancient rock-cut architecture."
  },
  {
    id: "kandhar",
    name: "Kandhar Fort",
    district: "Nanded",
    type: "Land",
    altitude: 400,
    lat: 18.8800,
    lng: 77.1900,
    image: "/images/forts/kandhar.jpg",
    shortDescription: "An ancient water fort built by the Rashtrakutas.",
    history: "Located in the heart of Kandhar town, it is almost completely surrounded by a moat. It was a major stronghold in Marathwada.",
    significance: "A prime example of a 'Jal Durg' (Water Fort) built on land."
  },
  {
    id: "gawilghur",
    name: "Gawilghur Fort",
    district: "Amravati",
    type: "Hill",
    altitude: 1000,
    lat: 21.3600,
    lng: 77.3200,
    image: "/images/forts/gawilghur.jpg",
    shortDescription: "A well-fortified mountain stronghold in the Satpura range.",
    history: "Built by the Bahamanis, it was an important stronghold in the Vidarbha region. It features heavily fortified walls and impressive iron cannons.",
    significance: "The most prominent Maratha stronghold in Vidarbha."
  },
  {
    id: "padmadurg",
    name: "Padmadurg",
    district: "Raigad",
    type: "Sea",
    altitude: 0,
    lat: 18.2900,
    lng: 72.9500,
    image: "/images/forts/padmadurg.jpg",
    shortDescription: "A sea fort built specifically to counter Murud-Janjira.",
    history: "Constructed by Shivaji Maharaj on the Kasa rock in the Arabian sea, specifically to challenge the dominance of the Siddi's Janjira fort.",
    significance: "A bold testament to Maratha naval aggression."
  }
];

export function getFortBySlug(slug: string): Fort | undefined {
  return forts.find((f) => f.id === slug);
}

export function getFortsByDistrict(district: string): Fort[] {
  return forts.filter((f) => f.district === district);
}

export function getDistrictsWithForts(): string[] {
  return [...new Set(forts.map((f) => f.district))];
}
