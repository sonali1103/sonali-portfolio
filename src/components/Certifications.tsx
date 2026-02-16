import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "@/data/portfolio";

const CertificationCard = ({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateY: -90 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="flip-card h-48"
    >
      <div className="flip-card-inner h-full">
        {/* Front */}
        <div className="flip-card-front glass rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-luxury">
          <motion.div
            className="text-4xl mb-3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {cert.icon}
          </motion.div>
          <h4 className="font-semibold text-sm leading-tight text-foreground">{cert.name}</h4>
        </div>

        {/* Back */}
        <div className="flip-card-back glass rounded-xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-gold/20 to-silver/20">
          <div className="text-gold text-3xl mb-3 shimmer w-12 h-12 rounded-full flex items-center justify-center">
            ✓
          </div>
          <p className="text-sm font-medium text-foreground">{cert.organization}</p>
          <p className="text-xs mt-2 text-muted-foreground">Verified Credential</p>
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-10 relative">
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
            Professional <span className="text-gradient-gold">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
