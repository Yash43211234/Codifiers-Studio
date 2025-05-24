import React from 'react';

export default function One_One() {
  const styles = {
    container: {
      width: '100%',
      marginTop:'0',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '"Inter", Arial, sans-serif',
      padding: '0',
      overflowX: 'hidden',
    },
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '6rem 1rem',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 70% 30%, rgba(229, 9, 20, 0.15) 0%, transparent 60%)',
    },
    heading: {
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
      fontWeight: '800',
      marginBottom: '1.5rem',
      color: '#ffffff',
      lineHeight: '1.2',
      position: 'relative',
      textShadow: '0 4px 20px rgba(229, 9, 20, 0.5)',
      background: 'linear-gradient(90deg, #fff, #e50914)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    },
    subText: {
      fontSize: 'clamp(1rem, 2vw, 1.4rem)',
      maxWidth: '800px',
      opacity: 0.9,
      marginBottom: '3rem',
      lineHeight: '1.6',
    },
    ctaButton: {
      padding: '18px 42px',
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#fff',
      background: 'linear-gradient(45deg, #e50914, #b20710)',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 30px rgba(229, 9, 20, 0.4)',
      position: 'relative',
      overflow: 'hidden',
      zIndex: '1',
    },
    ctaButtonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 35px rgba(229, 9, 20, 0.6)',
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2.5rem',
      padding: '6rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    featureCard: {
      background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
      padding: '2.5rem 2rem',
      borderRadius: '16px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    featureCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px rgba(229, 9, 20, 0.2)',
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '1.5rem',
      background: 'linear-gradient(45deg, #e50914, #ff4d4d)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    },
    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      color: '#fff',
    },
    featureDesc: {
      fontSize: '1.05rem',
      opacity: 0.85,
      lineHeight: '1.6',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      textAlign: 'center',
      marginBottom: '3rem',
      background: 'linear-gradient(90deg, #fff, #e50914)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    },
    testimonialSection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(to bottom, #16213e, #0f3460)',
      position: 'relative',
    },
    testimonials: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    testimonialCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      padding: '2rem',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    testimonialText: {
      fontStyle: 'italic',
      marginBottom: '1.5rem',
      lineHeight: '1.6',
    },
    testimonialAuthor: {
      fontWeight: '700',
    },
    testimonialRole: {
      opacity: 0.7,
      fontSize: '0.9rem',
    },
    courseSection: {
      padding: '6rem 2rem',
      background: '#0a0a0a',
    },
    courseGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    courseCard: {
      background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s ease',
    },
    courseCardHover: {
      transform: 'scale(1.03)',
    },
    courseImage: {
      height: '200px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    courseContent: {
      padding: '1.5rem',
    },
    courseTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      marginBottom: '0.5rem',
    },
    courseDesc: {
      opacity: 0.8,
      marginBottom: '1rem',
      lineHeight: '1.5',
    },
    courseDuration: {
      display: 'flex',
      alignItems: 'center',
      opacity: 0.7,
      fontSize: '0.9rem',
      marginBottom: '1rem',
    },
    pricingSection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(to bottom, #0f3460, #16213e)',
      textAlign: 'center',
    },
    pricingGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '3rem auto 0',
    },
    pricingCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      padding: '2.5rem 2rem',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'transform 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    pricingCardHover: {
      transform: 'translateY(-10px)',
      background: 'rgba(229, 9, 20, 0.1)',
      borderColor: 'rgba(229, 9, 20, 0.3)',
    },
    pricingCardPopular: {
      border: '2px solid #e50914',
      boxShadow: '0 0 30px rgba(229, 9, 20, 0.2)',
    },
    popularBadge: {
      position: 'absolute',
      top: '0',
      right: '20px',
      background: '#e50914',
      color: 'white',
      padding: '0.3rem 1.5rem',
      fontSize: '0.8rem',
      fontWeight: '700',
      borderRadius: '0 0 8px 8px',
    },
    pricingTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    pricingPrice: {
      fontSize: '3rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      background: 'linear-gradient(90deg, #fff, #e50914)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    },
    pricingFeatures: {
      textAlign: 'left',
      marginBottom: '2rem',
    },
    pricingFeature: {
      marginBottom: '0.8rem',
      display: 'flex',
      alignItems: 'center',
    },
    pricingFeatureIcon: {
      color: '#e50914',
      marginRight: '0.5rem',
    },
    faqSection: {
      padding: '6rem 2rem',
      background: '#0a0a0a',
      maxWidth: '800px',
      margin: '0 auto',
    },
    faqItem: {
      marginBottom: '1.5rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      paddingBottom: '1.5rem',
    },
    faqQuestion: {
      fontSize: '1.2rem',
      fontWeight: '700',
      marginBottom: '0.8rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
    },
    faqAnswer: {
      opacity: 0.8,
      lineHeight: '1.6',
    },
    ctaSection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      textAlign: 'center',
    },
    ctaContent: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    footer: {
      padding: '3rem 2rem',
      background: '#0a0a0a',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    footerLink: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    footerLinkHover: {
      color: '#e50914',
    },
    copyright: {
      opacity: 0.6,
      fontSize: '0.9rem',
    },
  };

  const features = [
    {
      icon: '🎵',
      title: 'Comprehensive Curriculum',
      description: 'From basics to advanced techniques, our courses cover everything you need to become a professional music producer.',
    },
    {
      icon: '🎚',
      title: 'Industry Expert Instructors',
      description: 'Learn directly from producers who have worked with top artists and labels in the industry.',
    },
    {
      icon: '🎧',
      title: 'Hands-on Projects',
      description: 'Apply what you learn by creating real tracks and getting professional feedback.',
    },
    {
      icon: '⚡',
      title: 'Community & Networking',
      description: 'Join our vibrant community of producers and collaborate on projects.',
    },
  ];

  const testimonials = [
    {
      text: "This course transformed my approach to music production. I went from making beats in my bedroom to getting signed within 6 months!",
      author: "Alex Johnson",
      role: "Electronic Producer"
    },
    {
      text: "The quality of instruction is unmatched. The instructors break down complex concepts in ways that are easy to understand and apply immediately.",
      author: "Maria Garcia",
      role: "Hip-Hop Producer"
    },
    {
      text: "The community alone is worth the price. Being able to connect and collaborate with other producers at all levels has been invaluable.",
      author: "James Wilson",
      role: "Film Composer"
    }
  ];

  const courses = [
    {
      title: "Music Production Fundamentals",
      description: "Master the basics of DAWs, sound design, and music theory to create professional-quality tracks.",
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
    },
    {
      title: "Advanced Mixing & Mastering",
      description: "Learn professional techniques to make your tracks sound radio-ready and compete with commercial releases.",
      duration: "6 weeks",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
    },
    {
      title: "Electronic Music Production",
      description: "Specialize in EDM, house, techno and other electronic genres with industry-standard techniques.",
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b"
    }
  ];

  const pricingPlans = [
    {
      title: "Starter",
      price: "$29",
      period: "per month",
      features: [
        "Access to basic courses",
        "Weekly Q&A sessions",
        "Community access",
        "2 project reviews/month"
      ]
    },
    {
      title: "Professional",
      price: "$79",
      period: "per month",
      features: [
        "All courses unlocked",
        "Priority feedback",
        "Weekly masterclasses",
        "Unlimited project reviews",
        "Exclusive sample packs"
      ],
      popular: true
    },
    {
      title: "Mentorship",
      price: "$199",
      period: "per month",
      features: [
        "1-on-1 mentorship",
        "Custom learning plan",
        "Industry networking",
        "Label submission guidance",
        "All Professional benefits"
      ]
    }
  ];

  const faqs = [
    {
      question: "Do I need any prior experience to join?",
      answer: "No! Our courses are designed for all skill levels, from complete beginners to advanced producers looking to refine their skills."
    },
    {
      question: "What equipment do I need?",
      answer: "At minimum, you'll need a computer capable of running a DAW (Digital Audio Workstation). We recommend headphones or monitors, but we'll guide you on budget-friendly options."
    },
    {
      question: "How much time should I dedicate?",
      answer: "We recommend 5-10 hours per week to make substantial progress, but you can go at your own pace. The courses are designed to be flexible."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Absolutely. We offer a 30-day money-back guarantee with no questions asked."
    }
  ];

  return (
    <div style={styles.container}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <h1 style={styles.heading}>BECOME A PROFESSIONAL MUSIC PRODUCER</h1>
        <p style={styles.subText}>
          Join the most comprehensive music production program online. Learn from industry professionals, 
          build an impressive portfolio, and launch your music career with confidence.
        </p>
        <button
          style={styles.ctaButton}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 35px rgba(229, 9, 20, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 30px rgba(229, 9, 20, 0.4)';
          }}
        >
          START YOUR JOURNEY TODAY
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section>
        <h2 style={{...styles.sectionTitle, paddingTop: '4rem'}}>WHY CHOOSE OUR PROGRAM</h2>
        <div style={styles.features}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={styles.featureCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(229, 9, 20, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section style={styles.testimonialSection}>
        <h2 style={styles.sectionTitle}>SUCCESS STORIES</h2>
        <div style={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <p style={styles.testimonialAuthor}>{testimonial.author}</p>
              <p style={styles.testimonialRole}>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES SECTION */}
      <section style={styles.courseSection}>
        <h2 style={styles.sectionTitle}>OUR CORE COURSES</h2>
        <div style={styles.courseGrid}>
          {courses.map((course, index) => (
            <div 
              key={index} 
              style={styles.courseCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{...styles.courseImage, }}></div>
              <div style={styles.courseContent}>
                <h3 style={styles.courseTitle}>{course.title}</h3>
                <p style={styles.courseDesc}>{course.description}</p>
                <div style={styles.courseDuration}>
                  <span>⏱ {course.duration}</span>
                </div>
                <button style={styles.planButton}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section style={styles.pricingSection}>
        <h2 style={styles.sectionTitle}>FLEXIBLE PRICING OPTIONS</h2>
        <p style={{...styles.subText, maxWidth: '700px', margin: '0 auto 2rem'}}>
          Choose the plan that fits your goals and budget. All plans include full access to our community and resources.
        </p>
        <div style={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              style={{
                ...styles.pricingCard,
                ...(plan.popular ? styles.pricingCardPopular : {})
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.background = 'rgba(229, 9, 20, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = plan.popular 
                  ? 'rgba(229, 9, 20, 0.1)' 
                  : 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = plan.popular 
                  ? '#e50914' 
                  : 'rgba(255, 255, 255, 0.1)';
              }}
            >
              {plan.popular && <div style={styles.popularBadge}>MOST POPULAR</div>}
              <h3 style={styles.pricingTitle}>{plan.title}</h3>
              <div style={styles.pricingPrice}>{plan.price}</div>
              <div style={styles.pricingFeatures}>
                {plan.features.map((feature, i) => (
                  <div key={i} style={styles.pricingFeature}>
                    <span style={styles.pricingFeatureIcon}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button style={styles.planButton}>Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>FREQUENTLY ASKED QUESTIONS</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div style={styles.faqQuestion}>
                <span>{faq.question}</span>
                <span>+</span>
              </div>
              <p style={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.sectionTitle}>READY TO TRANSFORM YOUR MUSIC?</h2>
          <p style={styles.subText}>
            Join thousands of producers who've accelerated their careers with our program. 
            Start your 7-day free trial today - no credit card required.
          </p>
          <button
            style={styles.ctaButton}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 35px rgba(229, 9, 20, 0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 30px rgba(229, 9, 20, 0.4)';
            }}
          >
            START FREE TRIAL
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>About</a>
          <a href="#" style={styles.footerLink}>Courses</a>
          <a href="#" style={styles.footerLink}>Pricing</a>
          <a href="#" style={styles.footerLink}>Testimonials</a>
          <a href="#" style={styles.footerLink}>Contact</a>
          <a href="#" style={styles.footerLink}>Blog</a>
        </div>
        <p style={styles.copyright}>© {new Date().getFullYear()} Music Production Institute. All rights reserved.</p>
      </footer>
    </div>
  );
}