export interface Project {
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  links: {
    demo?: string;
    repository?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Crew Module Structural Design for Human Spaceflight",
    description:
      "Designed and analyzed primary structure for a crewed spacecraft module subjected to parachute deceleration, water impact, and transportation loads. Developed detailed finite element models with shell-beam modeling, material and geometric nonlinearities, couplings, and contact simulations. Executed in-depth linear and non-linear static analyses to validate structural compliance with design requirements and standards.",
    image: {
      src: "/assets/generated/crew-module-fea.dim_800x500.png",
      alt: "Crew module structural FEA analysis visualization",
    },
    links: {},
  },
  {
    title: "Skin-Stringer Spacecraft Structure Optimization",
    description:
      "Optimized stringer placement and sizing for a skin-stringer aerospace panel under lift-off and stage separation loads. Performed analytical calculations for skin-stringer design along with FE model generation and analysis in ABAQUS. Designed multiple ground support structures for satellite handling, integration, and transportation, ensuring load capacity and alignment requirements.",
    image: {
      src: "/assets/generated/skin-stringer-fea.dim_800x500.png",
      alt: "Skin-stringer structure FEA stress contour",
    },
    links: {},
  },
  {
    title: "STOL Aircraft Structural Design & Lab Infrastructure",
    description:
      "Led structural design and analysis for Short Take-Off and Landing aircraft components, ensuring robust performance under flight and ground loads within mass budget. Established end-to-end manufacturing processes from conceptualization and prototyping to assembly. Set up a new aerospace manufacturing facility, developing facility layouts, process workflows, and vendor partnerships.",
    image: {
      src: "/assets/generated/stol-aircraft-structure.dim_800x500.png",
      alt: "STOL aircraft structural design and analysis",
    },
    links: {},
  },
  {
    title: "Satellite Ground Support Structure Design",
    description:
      "Designed handling, integration, and transport structures for satellite ground operations ensuring load capacity, structural alignment, and operational safety. Analyzed fabricated hardware to identify and map dimensional variations. Strategically positioned and configured brackets to compensate for welding distortions and ensure precise alignment.",
    image: {
      src: "/assets/generated/ground-support-structure.dim_800x500.png",
      alt: "Satellite ground support structure design",
    },
    links: {},
  },
];
