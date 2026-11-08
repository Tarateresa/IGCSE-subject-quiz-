// data.js
// Minimal dataset (expand later). 1 question per screen.

window.SUBJECTS = {
  bio:  { code:"0610", name:"Biology",  syllabus:"2026–2028" },
  chem: { code:"0620", name:"Chemistry", syllabus:"2026–2028" },
  phy:  { code:"0625", name:"Physics",   syllabus:"2026–2028" },
  ict:  { code:"0417", name:"ICT",       syllabus:"2026–2028" },
};

// Each question: {topic, prompt, options[], answerIndex, difficulty(1-3)}
window.QUESTIONS = {
  bio: [
    {
      topic: "Cell structure",
      prompt: "Which part of the cell contains enzymes and controls chemical reactions?",
      options: ["Nucleus", "Cytoplasm", "Cell wall", "Mitochondria"],
      answerIndex: 1,
      difficulty: 1
    },
    {
      topic: "Nutrition",
      prompt: "Digestion of proteins starts in the stomach mainly due to:",
      options: ["Amylase", "Bile", "Pepsin", "Lipase"],
      answerIndex: 2,
      difficulty: 1
    },
    {
      topic: "Transport in plants",
      prompt: "Transpiration mainly helps to move water because it creates:",
      options: ["High pressure at root only", "A pulling force due to water loss", "No effect on movement", "Gravity"],
      answerIndex: 1,
      difficulty: 2
    },
  {
    topic: "Cell structure",
    prompt: "Which structure is present in plant cells but not animal cells and is mainly responsible for maintaining the cell's shape?",
    options: ["Cell membrane", "Cell wall", "Cytoplasm", "Nucleus"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Cell structure",
    prompt: "A cell contains many mitochondria. What does this suggest about the cell?",
    options: [
      "It carries out many energy-requiring reactions",
      "It produces large amounts of cellulose",
      "It carries out photosynthesis",
      "It stores large amounts of water"
    ],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Movement into and out of cells",
    prompt: "A plant cell is placed in a concentrated sugar solution. What is most likely to happen?",
    options: [
      "Water enters the cell by osmosis",
      "Water leaves the cell by osmosis",
      "Sugar leaves the cell by active transport",
      "The cell gains turgor"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Movement into and out of cells",
    prompt: "Which process requires energy from respiration to move substances against a concentration gradient?",
    options: ["Diffusion", "Osmosis", "Active transport", "Transpiration"],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Enzymes",
    prompt: "Why does an enzyme stop working effectively at very high temperatures?",
    options: [
      "The enzyme becomes a carbohydrate",
      "The active site changes shape",
      "The substrate becomes an enzyme",
      "The enzyme gains more active sites"
    ],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Enzymes",
    prompt: "An enzyme has an optimum pH of 7. At pH 2, its activity is very low. What is the most likely explanation?",
    options: [
      "The enzyme has been denatured or its active site has changed shape",
      "There is too much substrate",
      "The enzyme has become a lipid",
      "The reaction has become photosynthesis"
    ],
    answerIndex: 0,
    difficulty: 3
  },
  {
    topic: "Photosynthesis",
    prompt: "Which substance is a raw material required for photosynthesis?",
    options: ["Glucose", "Oxygen", "Carbon dioxide", "Starch"],
    answerIndex: 2,
    difficulty: 1
  },
  {
    topic: "Photosynthesis",
    prompt: "A plant is kept in darkness for several days before testing a leaf for starch. Why?",
    options: [
      "To increase the amount of chlorophyll",
      "To remove stored starch from the leaves",
      "To increase respiration",
      "To prevent water entering the roots"
    ],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Photosynthesis",
    prompt: "Why does increasing carbon dioxide concentration eventually stop increasing the rate of photosynthesis?",
    options: [
      "Carbon dioxide becomes poisonous immediately",
      "Another factor becomes limiting",
      "The plant stops absorbing water",
      "Chlorophyll is converted into glucose"
    ],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Nutrition",
    prompt: "Which enzyme breaks down starch into maltose?",
    options: ["Protease", "Lipase", "Amylase", "Pepsin"],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Nutrition",
    prompt: "What is the main function of bile in digestion?",
    options: [
      "To digest proteins into amino acids",
      "To emulsify fats and neutralise stomach acid",
      "To digest starch into glucose",
      "To absorb glucose into the blood"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Nutrition",
    prompt: "Why is the small intestine well adapted for absorption?",
    options: [
      "It has villi that provide a large surface area",
      "It contains no blood vessels",
      "It has a thick wall to prevent diffusion",
      "It produces bile"
    ],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Transport in plants",
    prompt: "Which tissue transports water and mineral ions from the roots to the leaves?",
    options: ["Phloem", "Xylem", "Epidermis", "Meristem"],
    answerIndex: 1,
    difficulty: 1
  },
  {
    topic: "Transport in plants",
    prompt: "Which condition would usually increase the rate of transpiration?",
    options: [
      "High humidity",
      "Low temperature",
      "Strong air movement",
      "Low light intensity"
    ],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Transport in plants",
    prompt: "What is the main function of stomata?",
    options: [
      "Transport glucose through the plant",
      "Allow gas exchange and control water loss",
      "Absorb mineral ions from the soil",
      "Produce chlorophyll"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Transport in animals",
    prompt: "Which feature of red blood cells makes them well adapted to transport oxygen?",
    options: [
      "They have a large nucleus",
      "They contain haemoglobin and have a biconcave shape",
      "They can produce antibodies",
      "They have cell walls"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Transport in animals",
    prompt: "Why is the wall of the left ventricle thicker than the wall of the right ventricle?",
    options: [
      "It pumps blood to the lungs",
      "It pumps blood around the whole body",
      "It receives blood from the lungs",
      "It contains more valves"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Respiration",
    prompt: "Which equation correctly represents aerobic respiration?",
    options: [
      "Glucose → lactic acid + energy",
      "Glucose + oxygen → carbon dioxide + water + energy",
      "Carbon dioxide + water → glucose + oxygen",
      "Glucose → ethanol + carbon dioxide"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Respiration",
    prompt: "During vigorous exercise, why may anaerobic respiration occur in muscles?",
    options: [
      "There is insufficient oxygen available for the energy demand",
      "Muscles stop requiring energy",
      "Carbon dioxide is no longer produced",
      "Glucose cannot enter muscle cells"
    ],
    answerIndex: 0,
    difficulty: 3
  },
  {
    topic: "Homeostasis",
    prompt: "When the body becomes too hot, which response helps reduce body temperature?",
    options: [
      "Vasoconstriction and shivering",
      "Vasodilation and increased sweating",
      "Reduced blood flow to the skin",
      "Increased production of adrenaline"
    ],
    answerIndex: 1,
    difficulty: 2
  }

  ],
  chem: [
    {
      topic: "Atomic structure",
      prompt: "An atom becomes an ion when it:",
      options: ["Gains neutrons", "Loses or gains electrons", "Gains protons", "Loses protons"],
      answerIndex: 1,
      difficulty: 1
    },
    {
      topic: "Chemical reactions",
      prompt: "What type of reaction describes rusting of iron?",
      options: ["Oxidation", "Decomposition", "Displacement", "Combustion only"],
      answerIndex: 0,
      difficulty: 2
    },
  {
    topic: "Atomic structure",
    prompt: "An atom has 17 protons and 18 neutrons. What is its mass number?",
    options: ["17", "18", "35", "36"],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Atomic structure",
    prompt: "An atom has 12 protons and 10 electrons. What is the charge on the ion?",
    options: ["2−", "1−", "1+", "2+"],
    answerIndex: 3,
    difficulty: 2
  },
  {
    topic: "Bonding",
    prompt: "Why do ionic compounds usually have high melting points?",
    options: [
      "They contain weak intermolecular forces",
      "They have strong electrostatic attractions between oppositely charged ions",
      "Their atoms are held together by metallic bonds",
      "They contain free-moving electrons"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Bonding",
    prompt: "Which substance contains covalent bonds but does not conduct electricity because it has no free-moving charged particles?",
    options: ["Sodium chloride solution", "Copper", "Diamond", "Molten sodium chloride"],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Bonding",
    prompt: "Why does graphite conduct electricity?",
    options: [
      "It contains mobile ions",
      "It contains delocalised electrons",
      "It contains metallic bonds",
      "Its carbon atoms are positively charged"
    ],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Periodic table",
    prompt: "What happens to the reactivity of Group 1 metals as you move down the group?",
    options: [
      "It decreases",
      "It stays the same",
      "It increases",
      "It first increases then decreases"
    ],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Periodic table",
    prompt: "Which statement correctly describes Group 7 elements?",
    options: [
      "They are metals and form 1+ ions",
      "They are non-metals and form 1− ions",
      "They are noble gases",
      "They become less reactive down the group"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Chemical calculations",
    prompt: "What is the relative formula mass of CaCO₃? (Ca = 40, C = 12, O = 16)",
    options: ["68", "84", "100", "116"],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Chemical calculations",
    prompt: "How many moles are present in 18 g of water, H₂O? (Mr = 18)",
    options: ["0.5 mol", "1 mol", "2 mol", "18 mol"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Chemical calculations",
    prompt: "A reaction produces 0.5 mol of carbon dioxide. What volume would this gas occupy at room temperature and pressure? (1 mol gas = 24 dm³)",
    options: ["6 dm³", "12 dm³", "24 dm³", "48 dm³"],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Acids and bases",
    prompt: "Which ion is responsible for the acidic properties of an aqueous solution?",
    options: ["Na⁺", "OH⁻", "H⁺", "Cl⁻"],
    answerIndex: 2,
    difficulty: 1
  },
  {
    topic: "Acids and bases",
    prompt: "What is the pH of a neutral solution at room temperature?",
    options: ["0", "5", "7", "14"],
    answerIndex: 2,
    difficulty: 1
  },
  {
    topic: "Acids and bases",
    prompt: "What type of reaction occurs when hydrochloric acid reacts with sodium hydroxide?",
    options: ["Oxidation", "Neutralisation", "Decomposition", "Polymerisation"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Chemical reactions",
    prompt: "Which observation would most strongly indicate that a chemical reaction has occurred?",
    options: [
      "A solid is cut into smaller pieces",
      "A gas is produced",
      "Water changes container",
      "A substance is dissolved without another change"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Rates of reaction",
    prompt: "Which change would usually increase the rate of reaction between a solid and an acid?",
    options: [
      "Using larger pieces of the solid",
      "Lowering the temperature",
      "Decreasing the concentration of the acid",
      "Increasing the surface area of the solid"
    ],
    answerIndex: 3,
    difficulty: 2
  },
  {
    topic: "Rates of reaction",
    prompt: "A catalyst increases the rate of a reaction because it:",
    options: [
      "Increases the temperature of the reaction",
      "Provides an alternative pathway with lower activation energy",
      "Increases the amount of reactants",
      "Is converted into a product"
    ],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Electrolysis",
    prompt: "During electrolysis, positively charged ions move towards which electrode?",
    options: ["Anode", "Cathode", "Electrolyte", "Power supply"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Electrolysis",
    prompt: "During electrolysis of molten lead(II) bromide, what is produced at the cathode?",
    options: ["Bromine", "Oxygen", "Lead", "Hydrogen"],
    answerIndex: 2,
    difficulty: 3
  },
  {
    topic: "Organic chemistry",
    prompt: "Which general formula represents the alkanes?",
    options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Organic chemistry",
    prompt: "What is the main difference between an alkane and an alkene?",
    options: [
      "Alkanes contain oxygen but alkenes do not",
      "Alkenes contain a carbon-carbon double bond",
      "Alkanes contain ionic bonds",
      "Alkenes contain no carbon atoms"
    ],
    answerIndex: 1,
    difficulty: 2
  }

  ],
  phy: [
    {
      topic: "Electricity",
      prompt: "Increasing the resistance of a circuit will generally:",
      options: ["Increase current (same voltage)", "Decrease current (same voltage)", "Not change current", "Increase voltage automatically"],
      answerIndex: 1,
      difficulty: 1
    },
    {
      topic: "Forces",
      prompt: "If the resultant force on an object is zero, then:",
      options: ["It must be speeding up", "It is either stationary or moving at constant velocity", "It must stop immediately", "It must change direction"],
      answerIndex: 1,
      difficulty: 2
    },
  {
    topic: "Electricity",
    prompt: "A resistor has a resistance of 6 Ω and a current of 2 A passes through it. What is the potential difference across the resistor?",
    options: ["3 V", "8 V", "12 V", "18 V"],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Electricity",
    prompt: "Two resistors of 4 Ω and 6 Ω are connected in series. What is their combined resistance?",
    options: ["2.4 Ω", "10 Ω", "24 Ω", "0.4 Ω"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Electricity",
    prompt: "Two resistors are connected in parallel. Compared with the resistance of either individual resistor, the combined resistance is:",
    options: ["Greater", "Equal to the larger resistor", "Less than both resistors", "Equal to the sum of the resistors"],
    answerIndex: 2,
    difficulty: 3
  },
  {
    topic: "Electricity",
    prompt: "A lamp is connected to a 12 V supply and has a current of 0.5 A. What is the electrical power of the lamp?",
    options: ["6 W", "12 W", "24 W", "0.04 W"],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Electricity",
    prompt: "A 60 W lamp is switched on for 5 minutes. How much electrical energy does it use?",
    options: ["300 J", "3600 J", "18000 J", "30000 J"],
    answerIndex: 2,
    difficulty: 3
  },
  {
    topic: "Electricity",
    prompt: "Which statement about current in a series circuit is correct?",
    options: [
      "Current is different at every point",
      "Current is the same at every point",
      "Current is always zero after passing through a resistor",
      "Current increases after passing through a lamp"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Forces",
    prompt: "A car of mass 1200 kg accelerates at 2 m/s². What is the resultant force acting on the car?",
    options: ["600 N", "1200 N", "2400 N", "3600 N"],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Forces",
    prompt: "A 5 kg object is acted on by a resultant force of 20 N. What is its acceleration?",
    options: ["0.25 m/s²", "4 m/s²", "15 m/s²", "100 m/s²"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Forces",
    prompt: "An object moves at constant velocity. Which statement must be true?",
    options: [
      "There is no force acting on it",
      "The resultant force acting on it is zero",
      "It has no mass",
      "Its acceleration is increasing"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Forces",
    prompt: "A skydiver reaches terminal velocity. What happens to the resultant force?",
    options: [
      "It increases continuously",
      "It becomes zero",
      "It becomes equal to the weight",
      "It becomes greater than the weight"
    ],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Motion",
    prompt: "A cyclist travels 150 m in 10 seconds. What is the cyclist's average speed?",
    options: ["15 m/s", "150 m/s", "0.067 m/s", "160 m/s"],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Motion",
    prompt: "An object accelerates from 5 m/s to 25 m/s in 4 seconds. What is its acceleration?",
    options: ["5 m/s²", "6.25 m/s²", "20 m/s²", "100 m/s²"],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Energy",
    prompt: "A 2 kg object is lifted vertically through a height of 5 m. Take g = 10 N/kg. What is the increase in gravitational potential energy?",
    options: ["10 J", "25 J", "50 J", "100 J"],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Energy",
    prompt: "Which energy transfer occurs when a falling object accelerates?",
    options: [
      "Kinetic energy to gravitational potential energy",
      "Gravitational potential energy to kinetic energy",
      "Thermal energy to kinetic energy",
      "Chemical energy to gravitational potential energy"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Waves",
    prompt: "A wave has a frequency of 5 Hz and a wavelength of 2 m. What is its wave speed?",
    options: ["0.4 m/s", "2.5 m/s", "7 m/s", "10 m/s"],
    answerIndex: 3,
    difficulty: 2
  },
  {
    topic: "Waves",
    prompt: "Which property of a wave determines how high-pitched a sound is?",
    options: ["Amplitude", "Frequency", "Wavelength only", "Speed"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Thermal physics",
    prompt: "Why does a metal spoon become hot when left in a cup of hot tea?",
    options: [
      "Metal is a good thermal conductor",
      "Metal is a good thermal insulator",
      "The spoon produces thermal energy",
      "The spoon absorbs light energy"
    ],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Thermal physics",
    prompt: "During the melting of a pure substance, its temperature remains constant because the energy supplied is mainly used to:",
    options: [
      "Increase the speed of the particles",
      "Increase the mass of the particles",
      "Break bonds between particles",
      "Decrease the volume of the substance"
    ],
    answerIndex: 2,
    difficulty: 3
  },
  {
    topic: "Magnetism",
    prompt: "Which material is most likely to be attracted strongly to a magnet?",
    options: ["Copper", "Aluminium", "Iron", "Plastic"],
    answerIndex: 2,
    difficulty: 1
  },
  {
    topic: "Electromagnetism",
    prompt: "What happens to the strength of an electromagnet when the current in its coil is increased?",
    options: [
      "It becomes weaker",
      "It becomes stronger",
      "It becomes non-magnetic",
      "There is no change"
    ],
    answerIndex: 1,
    difficulty: 2
  }

  ],
  ict: [
    {
      topic: "Hardware and software",
      prompt: "Which is an example of application software?",
      options: ["Operating system", "Windows", "Word processing software", "CPU"],
      answerIndex: 2,
      difficulty: 1
    },
    {
      topic: "Data representation",
      prompt: "In binary, data is represented using:",
      options: ["0 and 1", "1 and 2", "Ten symbols", "Only letters"],
      answerIndex: 0,
      difficulty: 1
    },
    
  {
    topic: "Hardware and software",
    prompt: "A school installs a new operating system on its computers. Which type of software is the operating system?",
    options: ["Application software", "System software", "Utility software", "Programming software"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Hardware and software",
    prompt: "A student wants to edit a photograph. Which type of software would be most suitable?",
    options: ["Database management software", "Image editing software", "Spreadsheet software", "Compiler software"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Data representation",
    prompt: "What is the denary value of the binary number 101101?",
    options: ["43", "45", "47", "51"],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Data representation",
    prompt: "A bitmap image has a colour depth of 8 bits. How many different colours can each pixel represent?",
    options: ["8", "16", "128", "256"],
    answerIndex: 3,
    difficulty: 3
  },
  {
    topic: "Data representation",
    prompt: "Why does increasing the resolution of a bitmap image usually increase its file size?",
    options: [
      "More pixels have to be stored",
      "Each pixel becomes physically larger",
      "The image automatically uses a different file format",
      "The number of colours is always doubled"
    ],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Input and output devices",
    prompt: "A supermarket uses a device to automatically read the characters printed on cheques. Which technology is most likely being used?",
    options: ["OMR", "OCR", "MICR", "QR code"],
    answerIndex: 2,
    difficulty: 3
  },
  {
    topic: "Input and output devices",
    prompt: "A teacher wants to collect answers from multiple-choice examination papers. The students shade circles on the answer sheet. Which technology is most suitable?",
    options: ["OCR", "OMR", "MICR", "Barcode reader"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Storage devices",
    prompt: "A company needs to store a very large amount of data for long-term archival purposes. Which storage medium is most suitable?",
    options: ["RAM", "Magnetic tape", "Cache memory", "Register"],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Storage devices",
    prompt: "Which is an advantage of an SSD compared with a traditional HDD?",
    options: [
      "It contains more magnetic disks",
      "It has moving read/write heads",
      "It generally provides faster access to data",
      "It requires regular defragmentation"
    ],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Networks",
    prompt: "A school wants computers in different classrooms to share files and printers. Which type of network would normally be used?",
    options: ["LAN", "WAN", "PAN", "MAN"],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Networks",
    prompt: "What is the main purpose of a router on a network?",
    options: [
      "To store files permanently",
      "To connect different networks and route data between them",
      "To convert analogue signals into digital signals",
      "To display web pages"
    ],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Networks",
    prompt: "A company wants employees to connect securely to its private network while working from home. Which technology would be most appropriate?",
    options: ["VPN", "HTTP", "Bluetooth", "NFC"],
    answerIndex: 0,
    difficulty: 3
  },
  {
    topic: "Internet and communication",
    prompt: "Which protocol is used to securely transfer web pages between a browser and a web server?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    answerIndex: 1,
    difficulty: 3
  },
  {
    topic: "Internet and communication",
    prompt: "Which protocol is primarily used to send email from a user's device to a mail server?",
    options: ["SMTP", "HTTP", "FTP", "TCP"],
    answerIndex: 0,
    difficulty: 3
  },
  {
    topic: "Cybersecurity",
    prompt: "A user receives an email claiming to be from their bank and is asked to click a link and enter their password. What type of attack is this most likely to be?",
    options: ["Phishing", "DDoS", "Brute-force attack", "Data compression"],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Cybersecurity",
    prompt: "Which method is most effective at protecting a network from unauthorised incoming connections?",
    options: ["Firewall", "Defragmentation", "File compression", "Screen saver"],
    answerIndex: 0,
    difficulty: 2
  },
  {
    topic: "Databases",
    prompt: "A database contains a field called 'DateOfBirth'. Which data type would normally be most appropriate?",
    options: ["Boolean", "Date/time", "Currency", "Object"],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Databases",
    prompt: "A database contains thousands of student records. Why would a query be useful?",
    options: [
      "To permanently delete the database",
      "To search for and display records that meet specific criteria",
      "To automatically create a backup",
      "To increase the storage capacity"
    ],
    answerIndex: 1,
    difficulty: 2
  },
  {
    topic: "Spreadsheets",
    prompt: "Cell B2 contains the price of an item and cell C2 contains the quantity purchased. Which formula calculates the total cost?",
    options: [
      "=B2+C2",
      "=B2-C2",
      "=B2*C2",
      "=B2/C2"
    ],
    answerIndex: 2,
    difficulty: 2
  },
  {
    topic: "Spreadsheets",
    prompt: "A spreadsheet formula is copied from cell C2 to cell C3. The formula contains $A$1. What happens to this reference?",
    options: [
      "The column changes but the row stays the same",
      "The row changes but the column stays the same",
      "Both the row and column change",
      "Neither the row nor the column changes"
    ],
    answerIndex: 3,
    difficulty: 3
  }

  ]
};