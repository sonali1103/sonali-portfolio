// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { GraduationCap } from "lucide-react";
// import { education } from "@/data/portfolio";

// const Education = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="education" className="py-10 relative">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}>
//             <span className="text-gradient-gold">Education</span>
//           </h2>
//           <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
//         </motion.div>

//         {/* Education Cards */}
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {education.map((edu, index) => (
//             <motion.div
//               key={edu.degree}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.2 + index * 0.15 }}
//               className="glass rounded-2xl p-8 shadow-luxury hover:shadow-gold transition-all duration-300 group"
//             >
//               {/* Icon */}
//               <motion.div
//                 className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-gold/20 transition-colors"
//                 animate={{ scale: [1, 1.05, 1] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               >
//                 <GraduationCap className="w-8 h-8 text-gold" />
//               </motion.div>

//               {/* Content */}
//               <div className="text-center">
//                 <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{edu.degree}</h3>
//                 <p className="text-gold font-medium mb-1">{edu.institution}</p>
//                 <p className="text-sm mb-2 text-muted-foreground">{edu.location}</p>
//                 <p className="text-sm text-silver">{edu.dates}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;































import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-10 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)' }}>
            <span className="text-gradient-gold">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="glass rounded-2xl p-8 shadow-luxury hover:shadow-gold transition-all duration-300 group"
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-gold/20 transition-colors"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <GraduationCap className="w-8 h-8 text-gold" />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{edu.degree}</h3>
                <p className="text-gold font-medium mb-1">{edu.institution}</p>
                <p className="text-sm mb-2 text-muted-foreground">{edu.location}</p>
                <p className="text-sm font-medium text-muted-foreground">{edu.dates}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

