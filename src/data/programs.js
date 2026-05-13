import { BookOpen, GraduationCap, Trophy } from "lucide-react";

export const programs = [
  {
    id: "nursery",
    name: "Nursery School",
    shortName: "Nursery",
    ageRange: "Ages 1-5",
    tagline: "Where learning begins with love.",
    accent: "var(--color-accent-500)",
    icon: GraduationCap,
    description:
      "A caring early years environment where children build language, independence, confidence, and curiosity through guided play and structured discovery.",
    subjects: ["Phonics & Reading", "Basic Numeracy", "Creative Arts", "Physical Education", "Social Skills"],
    classStructure: ["Creche", "Pre-Nursery", "Nursery 1", "Nursery 2"],
    ratio: "1:10",
    activities: ["Story circle", "Music and movement", "Outdoor play", "Creative expression"],
  },
  {
    id: "primary",
    name: "Primary School",
    shortName: "Primary",
    ageRange: "Ages 6-11",
    tagline: "Strong fundamentals for confident learners.",
    accent: "var(--color-primary-400)",
    icon: BookOpen,
    description:
      "A balanced primary program focused on literacy, numeracy, science, values, technology, and the study habits children need for lifelong achievement.",
    subjects: ["English Language", "Mathematics", "Basic Science", "ICT", "Civic Education", "Creative Arts"],
    classStructure: ["Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"],
    ratio: "1:18",
    activities: ["Reading club", "Debate", "STEM projects", "Sports"],
  },
  {
    id: "secondary",
    name: "Secondary School",
    shortName: "Secondary",
    ageRange: "Ages 12-18",
    tagline: "Prepared for exams, leadership, and life.",
    accent: "var(--color-primary-700)",
    icon: Trophy,
    description:
      "A rigorous junior and senior secondary pathway that develops subject mastery, examination readiness, leadership, discipline, and career awareness.",
    subjects: ["Mathematics", "English", "Sciences", "Humanities", "Business Studies", "ICT"],
    classStructure: ["JSS 1-3", "SSS 1-3", "WAEC Preparation", "Career Guidance"],
    ratio: "1:22",
    activities: ["Science club", "Leadership council", "Arts showcase", "Inter-house sports"],
  },
];
