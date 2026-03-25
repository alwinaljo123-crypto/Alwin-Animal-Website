"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimalCard from "@/components/AnimalCard";
import ContributionForm from "@/components/ContributionForm";

const ENDANGERED_ANIMALS = [
  {
    name: "Amur Leopard",
    status: "Critically Endangered",
    description: "The world's rarest cat, adapted to a life in the temperate forests. Poaching and habitat loss continue to threaten its existence.",
    image: "/amur_leopard.png"
  },
  {
    name: "Javan Rhino",
    status: "Critically Endangered",
    description: "Once widespread in Southeast Asia, the Javan rhino population is now confined to a single national park in Indonesia.",
    image: "/javan_rhino.png"
  },
  {
    name: "Mountain Gorilla",
    status: "Endangered",
    description: "Living in the high-altitude forests of the Virunga mountains, these majestic primates face threats from human encroachment.",
    image: "/mountain_gorilla.png"
  },
  {
    name: "Hawksbill Turtle",
    status: "Critically Endangered",
    description: "Known for their beautiful shells, these marine turtles are crucial for reef health but are heavily poached.",
    image: "/hawksbill_turtle.png"
  },
  {
    name: "Sumatran Elephant",
    status: "Critically Endangered",
    description: "Habitat loss has cut their population significantly. They are key seed dispersers in the Sumatran rainforest ecosystem.",
    image: "/sumatran_elephant.png"
  },
  {
    name: "Vaquita",
    status: "Critically Endangered",
    description: "The world's smallest and most endangered marine mammal, suffering greatly from illegal fishing practices.",
    image: "/vaquita.png"
  },
  {
    name: "Saola",
    status: "Critically Endangered",
    description: "Discovered in 1992, the 'Asian unicorn' is rarely seen and its population is incredibly small and fragile.",
    image: "/saola.png"
  },
  {
    name: "Yangtze Finless Porpoise",
    status: "Critically Endangered",
    description: "Known for its mischievous smile, this intelligent creature faces extreme danger from river traffic and pollution.",
    image: "/yangtze_porpoise.png"
  }
];

const HISTORIC_DINOSAURS = [
  {
    name: "Tyrannosaurus Rex",
    status: "Extinct",
    description: "The tyrant lizard king, one of the most fearsome predators to ever walk the Earth with an immense bite force.",
    image: "/t_rex.png"
  },
  {
    name: "Triceratops",
    status: "Extinct",
    description: "A massive herbivore easily recognizable by its three horns and large bony frill used for defense and display.",
    image: "/triceratops.png"
  },
  {
    name: "Velociraptor",
    status: "Extinct",
    description: "A highly intelligent, bird-like predator that hunted with speed and lethal sickle-shaped claws.",
    image: "/velociraptor.png"
  },
  {
    name: "Stegosaurus",
    status: "Extinct",
    description: "Famous for the large diamond-shaped plates on its back and the heavily spiked tail it used to fight off predators.",
    image: "/stegosaurus.png"
  },
  {
    name: "Brachiosaurus",
    status: "Extinct",
    description: "A towering giant with an incredibly long neck, allowing it to feed on the highest prehistoric canopy.",
    image: "/brachiosaurus.png"
  },
  {
    name: "Spinosaurus",
    status: "Extinct",
    description: "A semi-aquatic behemoth larger than the T-Rex, featuring a massive sail on its back and crocodile-like jaws.",
    image: "/spinosaurus.png"
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-emerald-400 font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
              Protecting the Vulnerable
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-emerald-50 to-emerald-400/50 mb-6 drop-shadow-2xl">
              Alwin Jose Mathew
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100/80 font-light max-w-2xl mx-auto">
              Head of Endangered Species &amp; Wildlife Advocate
            </p>

            {/* Contact Links */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <a
                href="mailto:alwinaljo123@gmail.com"
                title="alwinaljo123@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-800/50 hover:border-emerald-400 transition-all duration-300 text-emerald-200 hover:text-white group"
              >
                {/* Gmail-style envelope icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm font-medium">alwinaljo123@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/alwin-jose-mathew-554787381"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 hover:bg-blue-800/50 hover:border-blue-400 transition-all duration-300 text-emerald-200 hover:text-white group"
              >
                {/* LinkedIn icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-emerald-300/60 uppercase tracking-widest font-semibold">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-400/60 to-transparent" />
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-50">About Me</h2>
            <div className="h-1 w-20 bg-emerald-500 rounded-full" />
            <p className="text-emerald-100/80 leading-relaxed text-lg">
              As a dedicated wildlife advocate and environmentalist, my life's mission has been the preservation of our planet's most vulnerable treasures. My journey began with a deep-rooted passion for nature during my vibrant college years, where I organized my first conservation drives.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4 text-emerald-200">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-400" />
                <span><strong className="text-emerald-50">Leadership Award 2024:</strong> Recognized for leading the "Green Canopy" initiative restoring 500 acres of forest.</span>
              </li>
              <li className="flex items-center gap-4 text-emerald-200">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-400" />
                <span><strong className="text-emerald-50">College Legacy:</strong> Founder of the University Wildlife Conservation Society, pioneering student-led field research.</span>
              </li>
              <li className="flex items-center gap-4 text-emerald-200">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-400" />
                <span><strong className="text-emerald-50">Global Impact:</strong> Successfully campaigned for stricter anti-poaching laws in Southeast Asia.</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full rounded-3xl overflow-hidden glass-panel border border-emerald-900/40"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-[#061109] flex items-center justify-center text-emerald-900/50">
               {/* Abstract decorative element representing Alwin's work */}
               <svg viewBox="0 0 200 200" className="w-64 h-64 opacity-20 animate-[spin_40s_linear_infinite]">
                 <path fill="currentColor" d="M42.7,-73.2C54.6,-66.4,63,-51.9,71.2,-37.4C79.4,-22.9,87.4,-8.4,85.1,5.1C82.8,18.6,70.2,31.2,59.3,42.4C48.4,53.6,39.2,63.4,27.2,71.5C15.2,79.6,0.4,86.1,-13.6,84.4C-27.6,82.7,-40.8,72.8,-53.4,62.3C-66,51.8,-78,40.7,-82.4,26.9C-86.8,13.1,-83.6,-3.4,-77,-18.2C-70.4,-33,-60.4,-46.1,-48.1,-53.5C-35.8,-60.9,-21.2,-62.6,-5.5,-56.1C10.2,-49.6,20.4,-34.9,42.7,-73.2Z" transform="translate(100 100)" />
               </svg>
            </div>
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-1">A Life for Nature</h3>
              <p className="text-emerald-400/80 text-sm">Empowering generations to protect the wild.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Critical Animals Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            The Critical 8
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-emerald-500 rounded-full"
          />
          <p className="mt-6 text-emerald-100/70 max-w-3xl text-lg">
            These eight species are at the tipping point of extinction. My mission involves rigorous field protection, global awareness, and legislative pushing to protect their crucial habitats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ENDANGERED_ANIMALS.map((animal, i) => (
            <AnimalCard key={animal.name} index={i} {...animal} />
          ))}
        </div>
      </section>

      {/* Historic Dinosaurs Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 border-t border-emerald-900/30 bg-emerald-950/20">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-500 mb-6"
          >
            Lost to Time: Epic Dinosaurs
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-teal-500 rounded-full"
          />
          <p className="mt-6 text-emerald-100/70 max-w-3xl text-lg">
            Looking at the giants of the past reminds us of the fragility of existence. The majestic dinosaurs ruled for millions of years, yet they fell. We must do everything in our power not to let our current magnificent species fade into the history books.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HISTORIC_DINOSAURS.map((dino, i) => (
            <AnimalCard key={dino.name} index={i} {...dino} />
          ))}
        </div>
      </section>

      {/* Contribution Section */}
      <section className="py-32 px-6 relative z-10 border-t border-emerald-900/30">
        <ContributionForm />
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-emerald-900/30 text-emerald-500/60 text-sm">
        <div className="flex items-center justify-center gap-6 mb-3">
          <a href="mailto:alwinaljo123@gmail.com" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            alwinaljo123@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/alwin-jose-mathew-554787381" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Alwin Portfolio. Dedicated to preserving nature's most vulnerable lives.</p>
      </footer>
    </main>
  );
}
