"use client";
import { motion, Variants } from "framer-motion";
import { Trophy, BookOpen, Leaf, Globe, Award, Target } from "lucide-react";

export default function PortfolioPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <div className="min-h-screen px-6 py-12 md:py-24 max-w-6xl mx-auto relative z-10">
      
      {/* Portfolio Hero */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-24"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/50 backdrop-blur-md text-emerald-300 text-sm font-semibold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          Curriculum Vitae
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-teal-200 to-emerald-400 mb-6 drop-shadow-lg">
          Alwin Jose Mathew
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100/70 max-w-3xl mx-auto font-light leading-relaxed">
          Scholar, Environmental Activist, and relentless protector of Earth&apos;s delicate ecosystems. Dedicated to forging a sustainable future through education and direct action.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-32"
      >
        {/* Activism & Environmental Work */}
        <motion.section variants={itemVariants} className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Leaf className="text-white w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Activism & Environmental Legacy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-8 rounded-3xl border border-emerald-900/40 bg-emerald-950/20 backdrop-blur-md hover:bg-emerald-900/30 transition-colors">
              <h3 className="text-xl font-bold text-emerald-200 mb-2">Founder, Global Green Canopy</h3>
              <p className="text-sm text-emerald-400 mb-4">2023 - Present</p>
              <p className="text-emerald-50/70 leading-relaxed">
                Spearheaded an international reforestation initiative successfully planting over 250,000 native tree species across deforested regions in Southeast Asia and South America.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-3xl border border-emerald-900/40 bg-emerald-950/20 backdrop-blur-md hover:bg-emerald-900/30 transition-colors">
              <h3 className="text-xl font-bold text-emerald-200 mb-2">Lead Campaigner, Save The Critical 8</h3>
              <p className="text-sm text-emerald-400 mb-4">2021 - 2024</p>
              <p className="text-emerald-50/70 leading-relaxed">
                Drafted policy petitions and mobilized 50,000+ volunteers globally to lobby for strict marine and forest protection laws guarding critically endangered species like the Vaquita and Amur Leopard.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Academic Achievements */}
        <motion.section variants={itemVariants} className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <BookOpen className="text-white w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Academic Excellence</h2>
          </div>
          
          <div className="relative border-l border-emerald-800/50 pl-8 ml-4 space-y-12">
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#07190f] bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              <h3 className="text-2xl font-bold text-emerald-100">Master of Science in Conservation Biology</h3>
              <p className="text-emerald-400 font-medium my-2">University of Oxford | Graduated with Distinction</p>
              <p className="text-emerald-50/70 max-w-3xl leading-relaxed">
                Specialized in macro-ecology and endangered species population dynamics. Thesis: &quot;Effects of Micro-climates on the Survival Rate of the Javan Rhino&quot;.
              </p>
            </div>
            
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-[#07190f] bg-emerald-600" />
              <h3 className="text-2xl font-bold text-emerald-100">Bachelor of Science in Environmental Science</h3>
              <p className="text-emerald-400 font-medium my-2">Stanford University | Cum Laude</p>
              <p className="text-emerald-50/70 max-w-3xl leading-relaxed">
                Minored in Public Policy. Led the university&apos;s renowned Student Wildlife Conservation Society and established the campus-wide zero-waste initiative.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Awards & Honors */}
        <motion.section variants={itemVariants} className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Trophy className="text-white w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Awards & Honors</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "UN Earth Champion Award", year: "2025", desc: "Recognized by UNEP for outstanding contribution to reversing deforestation trends." },
              { icon: Award, title: "National Geographic Emerging Explorer", year: "2023", desc: "Selected for innovative tracking models predicting poaching hotspots." },
              { icon: Target, title: "Presidential Green Medal", year: "2022", desc: "Highest collegiate honor for executing sustainable urban wildlife corridors." }
            ].map((award, i) => (
              <div key={i} className="flex flex-col items-start p-6 rounded-2xl border border-emerald-900/30 bg-emerald-950/10 backdrop-blur-sm">
                <award.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-bold text-emerald-100 mb-1">{award.title}</h3>
                <span className="text-xs font-bold text-emerald-500 tracking-wider mb-3 block">{award.year}</span>
                <p className="text-sm text-emerald-50/60 leading-relaxed">{award.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
        
      </motion.div>
    </div>
  );
}
