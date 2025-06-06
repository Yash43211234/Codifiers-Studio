import React, { useState, useEffect } from 'react';
import { Clock, Music, Headphones, Guitar, Piano, Mic } from 'lucide-react';

export default function ComingSoon() {
    const [timeLeft, setTimeLeft] = useState({
        days: 30,
        hours: 12,
        minutes: 45,
        seconds: 20
    });

    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSubscribe = () => {
        if (email) {
            setIsSubscribed(true);
            setEmail('');
        }
    };

    const musicIcons = [
        { Icon: Music, delay: '0s' },
        { Icon: Headphones, delay: '0.5s' },
        { Icon: Guitar, delay: '1s' },
        { Icon: Piano, delay: '1.5s' },
        { Icon: Mic, delay: '2s' }
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#F0E81B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Animated Icons */}
            <div style={{ position: 'absolute', inset: 0 }}>
                {musicIcons.map(({ Icon, delay }, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            left: `${20 + index * 15}%`,
                            top: `${10 + index * 20}%`,
                            opacity: 0.1,
                            animation: `bounce 3s ease-in-out infinite`,
                            animationDelay: delay
                        }}
                    >
                        <Icon size={48} color="black" />
                    </div>
                ))}
            </div>

            {/* Main content */}
            <div style={{ maxWidth: '900px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                {/* Icon */}
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '96px',
                        height: '96px',
                        backgroundColor: '#000',
                        borderRadius: '50%',
                        margin: '0 auto 1.5rem',
                        animation: 'pulse 2s infinite',
                        boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                    }}
                >
                    <Music size={48} color="#F0E81B" />
                </div>

                {/* Heading */}
                <h1 style={{ fontSize: '5rem', fontWeight: 'bold', color: '#000', marginBottom: '1rem' }}>
                    Coming Soon
                </h1>

                {/* Description */}
                <p style={{ fontSize: '1.25rem', color: '#333', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
                    We're crafting something amazing for your musical journey.
                    <br />
                    <span style={{ fontWeight: '600' }}>Stay tuned for an extraordinary experience!</span>
                </p>

                {/* Timer */}
                <div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#000', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                        <Clock size={24} /> Launch Countdown
                    </h2>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div
                                key={unit}
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0.1)',
                                    padding: '1rem',
                                    borderRadius: '20px',
                                    minWidth: '80px',
                                    border: '1px solid rgba(0,0,0,0.2)',
                                    transition: 'transform 0.3s',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#000' }}>
                                    {value.toString().padStart(2, '0')}
                                </div>
                                <div style={{ fontSize: '0.85rem', fontWeight: '500', color: '#444', textTransform: 'uppercase' }}>
                                    {unit}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bounce animation keyframes */}
            <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
}
