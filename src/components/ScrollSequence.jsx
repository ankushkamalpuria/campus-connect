import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const ScrollSequence = ({ frames, height = "400vh" }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Use scroll progress relevant to the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress (0 to 1) to frame index (0 to totalFrames - 1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frames.length - 1]);

    useEffect(() => {
        let loadedCount = 0;
        const imgArray = [];

        frames.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frames.length) {
                    setImagesLoaded(true);
                }
            };
            imgArray.push(img);
        });
        setImages(imgArray);
    }, [frames]);

    const renderFrame = (index) => {
        const canvas = canvasRef.current;
        if (!canvas || !imagesLoaded || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        const img = images[Math.round(index)];

        if (!img) return;

        // Set canvas dimensions to match window (or container)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Calculate scaling to "cover" the canvas
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    };

    useMotionValueEvent(frameIndex, "change", (latest) => {
        renderFrame(latest);
    });

    useEffect(() => {
        // Initial render once images are loaded
        if (imagesLoaded) {
            renderFrame(0);
        }
    }, [imagesLoaded]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (imagesLoaded) renderFrame(frameIndex.get());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [imagesLoaded]);


    return (
        <div
            ref={containerRef}
            style={{ height: height, position: 'relative' }}
            className="scroll-sequence-container"
        >
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>
                <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
            </div>
        </div>
    );
};

export default ScrollSequence;
