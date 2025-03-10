'use client';

import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Building2, Trophy, MapPin, BarChart3 } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

interface MilestoneCardProps {
  number: string;
  label: string;
  icon: React.ElementType;
}

const MilestoneCard = ({ number, label, icon: Icon }: MilestoneCardProps) => (
  <motion.div
    variants={fadeIn}
    className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/40 transition-all duration-300 group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
    <div className="relative text-center space-y-4">
      <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h4 className="text-3xl md:text-4xl font-bold text-white">{number}</h4>
      <p className="text-sm uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors duration-300">
        {label}
      </p>
    </div>
  </motion.div>
);

export default function LegacySection() {
  return (
    <Section
      id="legacy"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(180,151,90,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(180,151,90,0.15),transparent_50%)]" />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="container relative max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              The Legacy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
            Milestones Over A Decade
          </h2>
          <p className="text-lg text-gray-300">
            Our Expertise, Your Joy - Building Excellence Since Inception
          </p>
        </motion.div>

        {/* Milestones Grid */}
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <MilestoneCard
            icon={Building2}
            number="3 CR SQ.FT."
            label="OF AREA DELIVERED"
          />
          <MilestoneCard
            icon={BarChart3}
            number="4 CR SQ.FT."
            label="UNDER CONSTRUCTION"
          />
          <MilestoneCard
            icon={Trophy}
            number="LARGEST"
            label="DEVELOPER IN NORTH INDIA"
          />
          <MilestoneCard
            icon={MapPin}
            number="3,000 ACRES"
            label="OF LAND BANK"
          />
        </motion.div>

        {/* Bottom Content */}
        <motion.div variants={fadeIn} className="text-center mt-16">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            M3M Group has established itself as one of India&apos;s
            fastest-growing real estate developers, with a focus on delivering
            premium residential and commercial spaces.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
