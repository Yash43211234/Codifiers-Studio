import React, { useState } from 'react';
import { Music, User, Mail, Phone, GraduationCap, Award, Calendar, MessageSquare, Monitor, Users } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Clock, Headphones, Guitar, Piano, Mic, Drum, Volume2, Radio, Disc3, } from 'lucide-react';

export default function CourseRegistrationForm() {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        certificationCourses: [],
        diplomaCourses: [],
        learningMode: '',
        daws: [],
        otherDAW: '',
        goals: '',
        experience: '',
        // availability: [],
        finalNotes: '',
        hearAboutUs: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const certificationOptions = [
        'Basic Music Production',
        'Intermediate Music Production',
        'Advanced Music Production',
        'Professional Music Production'
    ];

    const diplomaOptions = [
        'Diploma in Music Production',
        'Diploma in Sound Designing',
        'Diploma in Music Production & Music Business',
        'Diploma in Music Production & Sound Designing',
        'Diploma in Music Production, Sound Designing & Music Business'
    ];

    const dawOptions = [
        'Ableton Live',
        'Logic Pro',
        'Other (please specify)'
    ];

    // const availabilityOptions = [
    //     'Weekdays',
    //     'Weekends',
    //     'Mornings',
    //     'Afternoons',
    //     'Evenings'
    // ];

    const validateForm = () => {
        const newErrors = {};

        // Full Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Full name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Course selection validation
        if (formData.certificationCourses.length === 0 && formData.diplomaCourses.length === 0) {
            newErrors.courses = 'Please select at least one course';
        }

        // Learning mode validation
        if (!formData.learningMode) {
            newErrors.learningMode = 'Please select your preferred learning mode';
        }

        // DAW validation
        if (formData.daws.length === 0) {
            newErrors.daws = 'Please select at least one DAW';
        } else if (formData.daws.includes('Other (please specify)') && !formData.otherDAW.trim()) {
            newErrors.otherDAW = 'Please specify the other DAW';
        }

        // Goals validation
        if (!formData.goals.trim()) {
            newErrors.goals = 'Please describe your goals for this course';
        } 

        // Availability validation
        // if (formData.availability.length === 0) {
        //     newErrors.availability = 'Please select your availability';
        // }

        // How did you hear about us validation
        if (!formData.hearAboutUs.trim()) {
            newErrors.hearAboutUs = 'Please let us know how you heard about the course';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const handleCheckboxChange = (field, option) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].includes(option)
                ? prev[field].filter(item => item !== option)
                : [...prev[field], option]
        }));

        // Clear related errors
        if (errors[field] || errors.courses) {
            setErrors(prev => ({
                ...prev,
                [field]: '',
                courses: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) return;

        setIsSubmitting(true);

        // Prepare JSON payload for SheetBest
        const payload = {
            Timestamp: `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`,
            FullName: formData.fullName,
            Email: formData.email,
            Phone: formData.phone,
            CertificationCourses: Array.isArray(formData.certificationCourses)
                ? formData.certificationCourses.join(', ')
                : formData.certificationCourses,
            DiplomaCourses: Array.isArray(formData.diplomaCourses)
                ? formData.diplomaCourses.join(', ')
                : formData.diplomaCourses,
            LearningMode: formData.learningMode,
            DAWs: Array.isArray(formData.daws)
                ? formData.daws.join(', ')
                : formData.daws,
            OtherDAW: formData.otherDAW,
            Goals: formData.goals,
            Experience: formData.experience,
            FinalNotes: formData.finalNotes,
            HearAboutUs: formData.hearAboutUs,
           
        };

        try {
            const response = await fetch(
                'https://api.sheetbest.com/sheets/d44f0ab8-40bb-4eb3-bb8c-4b42c4354c34/tabs/Professional_Certification_Courses',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }
            );

            if (response.ok) {
                alert('✅ Form submitted successfully!');
                resetForm(); // Clear form
                setIsSubmitted(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/submission-successfully');
            } else {
                alert('❌ Submission failed.');
            }
        } catch (err) {
            console.error('Submission error:', err);
            alert('⚠️ Something went wrong. Check the console for details.');
        } finally {
            setIsSubmitting(false);
        }
    };


    const resetForm = () => {
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            certificationCourses: [],
            diplomaCourses: [],
            learningMode: '',
            daws: [],
            otherDAW: '',
            goals: '',
            experience: '',
            // availability: [],
            finalNotes: '',
            hearAboutUs: ''
        });
        setErrors({});
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(to bottom right, #facc15, #fde047, #fcd34d)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem 1rem",
                }}
            >
                <div style={{ maxWidth: "40rem", margin: "0 auto", textAlign: "center" }}>
                    <div
                        style={{
                            background: "rgba(0,0,0,0.1)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "1.5rem",
                            padding: "3rem 2rem",
                            border: "1px solid rgba(0,0,0,0.2)",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                    >
                        <div
                            style={{
                                width: "5rem",
                                height: "5rem",
                                backgroundColor: "#000",
                                borderRadius: "9999px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 1.5rem",
                            }}
                        >
                            <GraduationCap style={{ width: "2.5rem", height: "2.5rem", color: "#facc15" }} />
                        </div>
                        <h2
                            style={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                color: "#000",
                                marginBottom: "1rem",
                            }}
                        >
                            Registration Successful!
                        </h2>
                        <p
                            style={{
                                fontSize: "1.125rem",
                                color: "rgba(0,0,0,0.8)",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Welcome to our music production family! Your registration has been submitted successfully.
                            We'll contact you within 24-48 hours to discuss your course schedule and next steps.
                        </p>
                        <div
                            style={{
                                background: "rgba(0,0,0,0.1)",
                                borderRadius: "1rem",
                                padding: "1rem",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <p
                                style={{
                                    color: "#000",
                                    fontWeight: 600,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.5rem",
                                }}
                            >
                                <Monitor style={{ width: "1.25rem", height: "1.25rem" }} />
                                Remember: All courses are available both offline and online!
                            </p>
                        </div>
                        <button
                            onClick={() => navigate("/institute")}
                            style={{
                                padding: "0.75rem 2rem",
                                backgroundColor: "#000",
                                color: "#facc15",
                                fontWeight: "bold",
                                borderRadius: "0.75rem",
                                border: "none",
                                cursor: "pointer",
                                transition: "background-color 0.3s",
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#1a1a1a")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "#000")}
                        >
                            Explore More Courses
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const musicIcons = [
        { Icon: Music, delay: '0s' },
        { Icon: Headphones, delay: '0.5s' },
        { Icon: Guitar, delay: '1s' },
        { Icon: Piano, delay: '1.5s' },
        { Icon: Mic, delay: '2s' },
        { Icon: Drum, delay: '2.5s' },
        { Icon: Volume2, delay: '3s' },
        { Icon: Radio, delay: '3.5s' },
        { Icon: Disc3, delay: '4s' },
        { Icon: Clock, delay: '4.5s' }
    ];


    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(to bottom right, #facc15, #fde047, #fcd34d)",
            padding: "2rem 1rem",
        }}>
            <style>
                {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
            </style>

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                }}
            >
                {musicIcons.map(({ Icon, delay }, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            left: `${20 + index * 15}%`,
                            top: `${10 + index * 20}%`,
                            opacity: 0.1,
                            animationName: 'bounce',
                            animationDuration: '3s',
                            animationTimingFunction: 'ease-in-out',
                            animationIterationCount: 'infinite',
                            animationDelay: delay,
                        }}
                    >
                        <Icon size={48} />
                    </div>
                ))}
            </div>


            <div
                style={{
                    maxWidth: '56rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' /* mb-8 */, maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' /* for mx-auto in paragraph */ }}>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '5rem',  // 16 * 5 = 80px (w-16)
                            height: '5rem', // h-16
                            backgroundColor: 'black',
                            borderRadius: '9999px', // rounded-full
                            marginBottom: '1rem', // mb-4
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // approximate shadow-2xl
                        }}
                    >
                        <GraduationCap
                            style={{
                                width: '2rem',  // 8 * 2 = 16px (w-8)
                                height: '2rem',
                                color: '#FBBF24', // text-yellow-400
                            }}
                        />
                    </div>

                    <h1
                        style={{
                            fontSize: '3rem', // text-3xl ~ 30px
                            fontWeight: '700',
                            color: 'black',
                            marginBottom: '0.75rem', // mb-3
                            letterSpacing: '-0.025em', // tracking-tight approx
                            lineHeight: 1.2,
                            maxWidth: '40rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        Register for Music Production Certification Course
                    </h1>

                    <p
                        style={{
                            fontSize: '1.125rem', // text-lg ~18px
                            color: 'rgba(0,0,0,0.8)', // text-black/80
                            maxWidth: '32rem', // max-w-2xl ~ 512px
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        Fill out the form below to sign up for our course and take your music production skills to the next level.
                    </p>
                </div>


                {/* Form */}
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',       // bg-black/10
                        backdropFilter: 'blur(4px)',                 // backdrop-blur-sm (approx 4px blur)
                        borderRadius: '1.5rem',                       // rounded-3xl (approx 24px)
                        padding: '1.5rem',                            // p-6 (24px)
                        border: '1px solid rgba(0, 0, 0, 0.2)',      // border + border-black/20
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // shadow-2xl
                    }}
                >

                    {/* Personal Info Section */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '1.5rem', // gap-6 ~ 24px
                        }}
                    >
                        {/* Full Name */}
                        <div style={{ gridColumn: '1 / -1' /* lg:col-span-2 means full width */ }}>
                            <label
                                style={{
                                    display: 'block',
                                    fontWeight: '600',
                                    color: 'black',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                Full Name *
                            </label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                placeholder="Enter your full name"
                                style={{
                                    width: '95%',
                                    padding: '0.75rem 1rem', // py-3 px-4
                                    borderRadius: '1rem', // rounded-xl ~ 16px
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderColor: errors.fullName ? '#ef4444' : 'rgba(0, 0, 0, 0.125)', // red-500 or black/20
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // white/90
                                    color: 'black',
                                    transition: 'all 0.3s',
                                    backdropFilter: 'blur(4px)',

                                    outline: 'none',
                                }}
                                onFocus={(e) => {
                                    e.target.style.backgroundColor = 'white';
                                    e.target.style.borderColor = 'black';
                                }}
                                onBlur={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                    e.target.style.borderColor = errors.fullName ? '#ef4444' : 'rgba(0, 0, 0, 0.125)';
                                }}
                            />
                            {errors.fullName && (
                                <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem', fontWeight: '500' }}>
                                    {errors.fullName}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: '600',
                                    color: 'black',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                <Mail style={{ width: '1rem', height: '1rem' }} />
                                Email Address *
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder="your.email@example.com"
                                style={{
                                    width: '95%',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '1rem',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderColor: errors.email ? '#ef4444' : 'rgba(0, 0, 0, 0.125)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    color: 'black',
                                    transition: 'all 0.3s',
                                    backdropFilter: 'blur(4px)',

                                    outline: 'none',
                                }}
                                onFocus={(e) => {
                                    e.target.style.backgroundColor = 'white';
                                    e.target.style.borderColor = 'black';
                                }}
                                onBlur={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                    e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(0, 0, 0, 0.125)';
                                }}
                            />
                            {errors.email && (
                                <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem', fontWeight: '500' }}>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: '600',
                                    color: 'black',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                <Phone style={{ width: '1rem', height: '1rem' }} />
                                Phone Number (Optional)
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder="+1 (555) 123-4567"
                                style={{
                                    width: '95%',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '1rem',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderColor: 'rgba(0, 0, 0, 0.125)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    color: 'black',
                                    transition: 'all 0.3s',
                                    backdropFilter: 'blur(4px)',

                                    outline: 'none',
                                }}
                                onFocus={(e) => {
                                    e.target.style.backgroundColor = 'white';
                                    e.target.style.borderColor = 'black';
                                }}
                                onBlur={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                    e.target.style.borderColor = 'rgba(0, 0, 0, 0.125)';
                                }}
                            />
                        </div>
                    </div>


                    {/* Course Details Section */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '1.25rem',
                                fontWeight: '700',
                                color: 'black',
                                marginBottom: '1.5rem',
                            }}
                        >
                            <Music style={{ width: '1.25rem', height: '1.25rem' }} />
                            Course Details
                        </h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ fontWeight: '600', color: 'black', marginBottom: '1rem' }}>
                                Which course are you interested in?
                            </p>

                            {/* Certification Courses */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '1.125rem',
                                        fontWeight: '600',
                                        color: 'black',
                                        marginBottom: '0.75rem',
                                    }}
                                >
                                    <Award style={{ width: '1rem', height: '1rem' }} />
                                    Certification Courses
                                </h4>
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(1, 1fr)',
                                        gap: '0.75rem',
                                        // For responsiveness, you may want media queries in CSS files, not inline
                                    }}
                                >
                                    {certificationOptions.map((course) => (
                                        <label
                                            key={course}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.75rem',
                                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                borderRadius: '1rem',
                                                border: '1px solid rgba(0,0,0,0.1)',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.2s',
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)')}
                                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)')}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.certificationCourses.includes(course)}
                                                onChange={() => handleCheckboxChange('certificationCourses', course)}
                                                style={{
                                                    width: '1rem',
                                                    height: '1rem',
                                                    accentColor: 'black',
                                                    borderRadius: '0.25rem',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                            <span style={{ color: 'black', fontWeight: '500' }}>{course}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Diploma Courses */}
                            <div style={{ marginBottom: '1rem' }}>
                                <h4
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '1.125rem',
                                        fontWeight: '600',
                                        color: 'black',
                                        marginBottom: '0.75rem',
                                    }}
                                >
                                    <GraduationCap style={{ width: '1rem', height: '1rem' }} />
                                    Diploma Courses
                                </h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {diplomaOptions.map((course) => (
                                        <label
                                            key={course}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.75rem',
                                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                borderRadius: '1rem',
                                                border: '1px solid rgba(0,0,0,0.1)',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.2s',
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)')}
                                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)')}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.diplomaCourses.includes(course)}
                                                onChange={() => handleCheckboxChange('diplomaCourses', course)}
                                                style={{
                                                    width: '1rem',
                                                    height: '1rem',
                                                    accentColor: 'black',
                                                    borderRadius: '0.25rem',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                            <span style={{ color: 'black', fontWeight: '500' }}>{course}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {errors.courses && (
                                <p style={{ color: '#dc2626', fontSize: '0.875rem', fontWeight: '500', marginBottom: '1rem' }}>
                                    {errors.courses}
                                </p>
                            )}

                            {/* Note about course format */}
                            {/* <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    borderRadius: '1.5rem',
                                    padding: '1rem',
                                    marginBottom: '1.5rem',
                                    border: '1px solid rgba(0,0,0,0.125)',
                                }}
                            >
                                <p
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontWeight: '600',
                                        color: 'black',
                                    }}
                                >
                                    <Monitor style={{ width: '1.25rem', height: '1.25rem' }} />
                                    Note: All courses are conducted simultaneously in both offline (classroom) and online (live) formats.
                                </p>
                            </div> */}

                            {/* Learning Mode */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    style={{
                                        display: 'block',
                                        fontWeight: '600',
                                        color: 'black',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    Preferred learning mode: *
                                </label>
                                <select
                                    value={formData.learningMode}
                                    onChange={(e) => handleInputChange('learningMode', e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '1rem',
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: errors.learningMode ? '#ef4444' : 'rgba(0,0,0,0.125)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        color: 'black',
                                        transition: 'all 0.3s',
                                        outline: 'none',
                                        backdropFilter: 'blur(4px)',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.borderColor = 'black';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                        e.target.style.borderColor = errors.learningMode ? '#ef4444' : 'rgba(0,0,0,0.125)';
                                    }}
                                >
                                    <option value="">Select your preferred mode</option>
                                    <option value="offline">Offline (attend in-person at the studio)</option>
                                    <option value="online">Online (attend live via Zoom or Google Meet)</option>
                                </select>
                                {errors.learningMode && (
                                    <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem', fontWeight: '500' }}>
                                        {errors.learningMode}
                                    </p>
                                )}
                            </div>

                            {/* DAWs */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    style={{
                                        display: 'block',
                                        fontWeight: '600',
                                        color: 'black',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    What DAW(s) do you use or want to learn? *
                                </label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {dawOptions.map((daw) => (
                                        <label
                                            key={daw}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.75rem',
                                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                                borderRadius: '1rem',
                                                border: '1px solid rgba(0,0,0,0.1)',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.2s',
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)')}
                                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)')}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.daws.includes(daw)}
                                                onChange={() => handleCheckboxChange('daws', daw)}
                                                style={{
                                                    width: '1rem',
                                                    height: '1rem',
                                                    accentColor: 'black',
                                                    borderRadius: '0.25rem',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                            <span style={{ color: 'black', fontWeight: '500' }}>{daw}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.daws && (
                                    <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem', fontWeight: '500' }}>
                                        {errors.daws}
                                    </p>
                                )}

                                {formData.daws.includes('Other (please specify)') && (
                                    <div style={{ marginTop: '0.75rem' }}>
                                        <input
                                            type="text"
                                            value={formData.otherDAW}
                                            onChange={(e) => handleInputChange('otherDAW', e.target.value)}
                                            placeholder="Please specify the DAW"
                                            style={{
                                                width: '100%',
                                                padding: '0.75rem 1rem',
                                                borderRadius: '1rem',
                                                borderWidth: '2px',
                                                borderStyle: 'solid',
                                                borderColor: errors.otherDAW ? '#ef4444' : 'rgba(0,0,0,0.125)',
                                                backgroundColor: 'rgba(255,255,255,0.9)',
                                                color: 'black',
                                                transition: 'all 0.3s',
                                                outline: 'none',
                                                backdropFilter: 'blur(4px)',
                                            }}
                                            onFocus={(e) => {
                                                e.target.style.backgroundColor = 'white';
                                                e.target.style.borderColor = 'black';
                                            }}
                                            onBlur={(e) => {
                                                e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                                e.target.style.borderColor = errors.otherDAW ? '#ef4444' : 'rgba(0,0,0,0.125)';
                                            }}
                                        />
                                        {errors.otherDAW && (
                                            <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem', fontWeight: '500' }}>
                                                {errors.otherDAW}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Goals */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    style={{
                                        display: 'block',
                                        fontWeight: '600',
                                        color: 'black',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    What are your goals for this course? *
                                </label>
                                <textarea
                                    value={formData.goals}
                                    onChange={(e) => handleInputChange('goals', e.target.value)}
                                    rows={4}
                                    placeholder="Describe what you want to achieve through this course..."
                                    style={{
                                        width: '95%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '1rem',
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: errors.goals ? '#ef4444' : 'rgba(0,0,0,0.125)',
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                        color: 'black',
                                        transition: 'all 0.3s',
                                        outline: 'none',
                                        backdropFilter: 'blur(4px)',
                                        resize: 'none',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.borderColor = 'black';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                        e.target.style.borderColor = errors.goals ? '#ef4444' : 'rgba(0,0,0,0.125)';
                                    }}
                                />
                                {errors.goals && (
                                    <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem', fontWeight: '500' }}>
                                        {errors.goals}
                                    </p>
                                )}
                            </div>

                            {/* Experience */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label
                                    style={{
                                        display: 'block',
                                        fontWeight: '600',
                                        color: 'black',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    Any prior experience with music production?
                                </label>
                                <textarea
                                    value={formData.experience}
                                    onChange={(e) => handleInputChange('experience', e.target.value)}
                                    rows={4}
                                    placeholder="Tell us about your background in music production, if any..."
                                    style={{
                                        width: '95%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '1rem',
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: 'rgba(0,0,0,0.125)',
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                        color: 'black',
                                        transition: 'all 0.3s',
                                        outline: 'none',
                                        backdropFilter: 'blur(4px)',
                                        resize: 'none',
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.borderColor = 'black';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                        e.target.style.borderColor = 'rgba(0,0,0,0.125)';
                                    }}
                                />
                            </div>
                        </div>
                    </div>


                    {/* Availability Section */}
                    {/* <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '1.5rem' }}>
                            <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
                            Availability
                        </h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ color: '#000', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>
                                When are you generally available to take classes? *
                            </label>
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '0.75rem',
                                    // For responsiveness, you could handle with media queries or JS in your app
                                }}
                            >
                                {availabilityOptions.map((option) => (
                                    <label
                                        key={option}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem',
                                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                            borderRadius: '1rem',
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            cursor: 'pointer',
                                            transition: 'background-color 0.2s ease-in-out',
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)')}
                                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)')}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.availability.includes(option)}
                                            onChange={() => handleCheckboxChange('availability', option)}
                                            style={{
                                                width: '1rem',
                                                height: '1rem',
                                                accentColor: 'black',
                                                borderRadius: '0.25rem',
                                                outline: 'none',
                                                cursor: 'pointer',
                                            }}
                                        />
                                        <span style={{ color: '#000', fontWeight: '500' }}>{option}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.availability && (
                                <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem', fontWeight: '600' }}>
                                    {errors.availability}
                                </p>
                            )}
                        </div>
                    </div> */}


                    {/* Final Notes Section */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: '700', color: '#000', marginBottom: '1.5rem' }}>
                            <MessageSquare style={{ width: '1.25rem', height: '1.25rem' }} />
                            Final Notes
                        </h3>

                        {/* Additional Notes */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ color: '#000', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>
                                Anything else you'd like us to know?
                            </label>
                            <textarea
                                value={formData.finalNotes}
                                onChange={(e) => handleInputChange('finalNotes', e.target.value)}
                                rows={4}
                                placeholder="Share any additional information, special requirements, or questions..."
                                style={{
                                    width: '95%',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '1rem',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderColor: 'rgba(0,0,0,0.125)', // border-black/20
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(8px)',
                                    outline: 'none',
                                    color: '#000',
                                    fontSize: '1rem',
                                    resize: 'none',
                                    transition: 'all 0.3s ease',
                                }}
                                onFocus={e => {
                                    e.target.style.borderColor = '#000';
                                    e.target.style.backgroundColor = '#fff';
                                }}
                                onBlur={e => {
                                    e.target.style.borderColor = 'rgba(0,0,0,0.125)';
                                    e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                }}
                            />
                        </div>

                        {/* How did you hear about us */}
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#000', fontWeight: '600', marginBottom: '0.5rem' }}>
                                <Users style={{ width: '1rem', height: '1rem' }} />
                                How did you hear about the course? *
                            </label>
                            <input
                                type="text"
                                value={formData.hearAboutUs}
                                onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                                placeholder="Social media, Google search, referral, etc."
                                style={{
                                    width: '95%',
                                    padding: '0.75rem 1rem',
                                    borderRadius: '1rem',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderColor: errors.hearAboutUs ? '#ef4444' : 'rgba(0,0,0,0.125)', // red-500 or black/20
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    backdropFilter: 'blur(8px)',
                                    outline: 'none',
                                    color: '#000',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease',
                                }}
                                onFocus={e => {
                                    e.target.style.borderColor = errors.hearAboutUs ? '#ef4444' : '#000';
                                    e.target.style.backgroundColor = '#fff';
                                }}
                                onBlur={e => {
                                    e.target.style.borderColor = errors.hearAboutUs ? '#ef4444' : 'rgba(0,0,0,0.125)';
                                    e.target.style.backgroundColor = 'rgba(255,255,255,0.9)';
                                }}
                            />
                            {errors.hearAboutUs && (
                                <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.25rem', fontWeight: '600' }}>
                                    {errors.hearAboutUs}
                                </p>
                            )}
                        </div>
                    </div>


                    {/* Submit Button */}
                    <div style={{ textAlign: 'center' }}>
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            style={{
                                padding: '1rem 2rem',
                                backgroundColor: 'black',
                                color: '#facc15', // yellow-400
                                fontWeight: '700',
                                borderRadius: '1rem',
                                fontSize: '1.125rem', // text-lg
                                transition: 'all 0.3s ease',
                                boxShadow: isSubmitting
                                    ? 'none'
                                    : '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)', // shadow-lg
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                opacity: isSubmitting ? 0.7 : 1,
                                transform: isSubmitting ? 'none' : 'scale(1)',
                            }}
                            onMouseEnter={e => {
                                if (!isSubmitting) {
                                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.9)';
                                    e.currentTarget.style.boxShadow = '0 15px 20px rgba(0,0,0,0.3)';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }
                            }}
                            onMouseLeave={e => {
                                if (!isSubmitting) {
                                    e.currentTarget.style.backgroundColor = 'black';
                                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }
                            }}
                        >
                            {isSubmitting ? (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div
                                        style={{
                                            width: '1.25rem',
                                            height: '1.25rem',
                                            border: '2px solid #facc15',
                                            borderTopColor: 'transparent',
                                            borderRadius: '50%',
                                            animation: 'spin 1s linear infinite',
                                        }}
                                    />
                                    Submitting Registration...
                                </span>
                            ) : (
                                'Submit Registration'
                            )}
                        </button>

                        <p style={{ fontSize: '0.875rem', color: 'rgba(0,0,0,0.7)', marginTop: '1rem' }}>
                            * Required fields must be filled out
                        </p>

                        {/* Add keyframes for spin animation */}
                        <style>
                            {`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}
                        </style>
                    </div>

                </div>
            </div>
        </div>
    );
}