import React, { useEffect } from 'react';
import ScrollSequence from '../components/ScrollSequence';
import { motion } from 'framer-motion';

const NamasteLanding = () => {

    // Generate frame paths
    const totalFrames = 40;
    const frames = [];
    for (let i = 1; i <= totalFrames; i++) {
        // Pad with leading zeros (e.g., ezgif-frame-001.jpg)
        const frameNumber = i.toString().padStart(3, '0');
        frames.push(`/frame-sequence/ezgif-frame-${frameNumber}.jpg`);
    }

    // Scroll container height relative to frames for pacing
    // 400vh gives us enough scroll distance to play the animation smoothly

    return (
        <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-white/20">
            {/* Scroll Sequence Background */}
            <div className="fixed inset-0 z-0">
                {/* We pass the frames and let the component handle the sticky positioning */}
            </div>

            <ScrollSequence frames={frames} height="500vh" />

            {/* Content Overlay */}
            {/* We position content absolutely over the scroll sequence container based on scroll depth ideas 
                or just fixed/sticky elements that fade in/out */}

            {/* Hero Section - Fixed at Start */}
            <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 pointer-events-none mix-blend-difference">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter text-center"
                >
                    NAMASTE
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-6 text-xl text-white/60 tracking-widest uppercase"
                >
                    Scroll to Initiate
                </motion.p>
            </div>

            {/* Narrative Sections - These scroll nicely over the sequence */}
            {/* Since ScrollSequence takes up space (500vh), we can place absolute markers relative to that flow if we wanted, 
                but for a pure background effect, fixed overlays with scroll-linked opacity works best.
                However, to simplify, let's just let the user scroll and watch the animation.
            */}

            <motion.div
                className="fixed bottom-10 right-10 z-20 mix-blend-difference text-right hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <p className="text-sm text-white/40">Sequence: 01-40</p>
                <p className="text-xs text-white/20">RENDER_MODE: CANVAS</p>
            </motion.div>

        </div>
    );
};

export default NamasteLanding;
