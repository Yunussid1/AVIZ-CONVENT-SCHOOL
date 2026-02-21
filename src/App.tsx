import { useEffect, useState, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  GraduationCap,
  Heart,
  Users,
  BookOpen,
  Award,
  Menu,
  X,
  ChevronRight,
  Star,
  CheckCircle,
  Calendar,
  ArrowRight,
  Feather,
} from "lucide-react";
import { cn } from "./utils/cn";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const aboutSectionRef = useRef<HTMLElement>(null);

  // Show popup after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!popupShown) {
        setShowPopup(true);
        setPopupShown(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [popupShown]);

  // Show popup on scroll after initial load
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !popupShown) {
        setShowPopup(true);
        setPopupShown(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popupShown]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
    setShowPopup(false);
  };

  const features = [
    {
      icon: Heart,
      title: "Kindness at Core",
      description:
        "We nurture empathy, compassion, and strong moral values in every child.",
    },
    {
      icon: Feather,
      title: "Feathers to Fly",
      description:
        "Building confidence, independence, and self-belief for a bright future.",
    },
    {
      icon: Users,
      title: "Individual Attention",
      description:
        "Every child is known, valued, and supported as a unique individual.",
    },
    {
      icon: BookOpen,
      title: "21st Century Skills",
      description:
        "Communication, collaboration, creativity, and critical thinking.",
    },
  ];

  const facilities = [
    "Experienced and caring teachers",
    "Smart classrooms with digital learning tools",
    "Well-ventilated classrooms and good campus space",
    "Focus on discipline, routine, and student safety",
    "Activity-based learning and student participation",
    "Regular assessments and academic tracking",
  ];

  const testimonials = [
    {
      name: "Mrs. Sharma",
      role: "Parent of Class 5 Student",
      quote:
        "Aviz Convent has transformed my daughter. She has become more confident and expressive. The teachers truly care about each child's growth.",
    },
    {
      name: "Mr. Khan",
      role: "Parent of Class 3 Student",
      quote:
        "The school's focus on values alongside academics is commendable. My son looks forward to going to school every single day.",
    },
    {
      name: "Mrs. Gupta",
      role: "Parent of Playgroup Student",
      quote:
        "A safe, nurturing environment where my little one feels at home. The personal attention given to each child is remarkable.",
    },
  ];

  const hours = [
    { day: "Monday", time: "7:30 am – 1:10 pm" },
    { day: "Tuesday", time: "7:30 am – 1:10 pm" },
    { day: "Wednesday", time: "7:30 am – 1:10 pm" },
    { day: "Thursday", time: "7:30 am – 1:10 pm" },
    { day: "Friday", time: "7:30 am – 1:10 pm" },
    { day: "Saturday", time: "7:30 am – 1:10 pm" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-amber-200">
                <img src="/logo.png" alt="logo.png" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-slate-800 leading-tight">
                  Aviz Convent School
                </h1>
                <p className="text-xs text-slate-500">
                  Comprehensive English Education
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "philosophy", label: "Philosophy" },
                { id: "facilities", label: "Facilities" },
                { id: "admissions", label: "Admissions" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-amber-600",
                    activeSection === item.id
                      ? "text-amber-600"
                      : "text-slate-600",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100">
            <div className="px-4 py-4 space-y-3">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "philosophy", label: "Philosophy" },
                { id: "facilities", label: "Facilities" },
                { id: "admissions", label: "Admissions" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setShowPopup(true);
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm mt-4"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 lg:pt-0 min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-amber-100/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Admissions Open 2026-2027 • Established 1999</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Kindness at the Core —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  Feathers to Fly
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                At Aviz Convent School, we believe every child is known, valued,
                and supported as an individual. We prepare students for real
                life, not just exams, with 21st-century skills for a global,
                digital world.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-semibold text-base hover:border-amber-300 hover:text-amber-600 transition-all"
                >
                  Learn More
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800">25+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800">Pg-8</div>
                  <div className="text-sm text-slate-500">Classes Offered</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800">UP</div>
                  <div className="text-sm text-slate-500">Board</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                  alt="Happy students learning"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      Admissions Open
                    </p>
                    <p className="text-sm text-slate-500">
                      2026-2027 Academic Year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutSectionRef}
        className="py-20 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
              About Our School
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              A Trusted Institution Since 1999
            </h2>
            <p className="text-slate-600 text-lg">
              Aviz Convent School is a well-established, trusted, medium-sized
              school providing comprehensive English education with a focus on
              holistic development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "UP Board Curriculum",
                description:
                  "Following UP Board syllabus with English medium instruction for Classes Playgroup to 8.",
              },
              {
                icon: Heart,
                title: "Safe & Nurturing",
                description:
                  "A safe, disciplined, and nurturing environment where every child feels at home.",
              },
              {
                icon: Users,
                title: "Personal Attention",
                description:
                  "Medium-sized school ensuring personal attention to every student's needs.",
              },
              {
                icon: Award,
                title: "Strong Pastoral Care",
                description:
                  "Dedicated teacher guidance and strong pastoral care for student wellbeing.",
              },
              {
                icon: BookOpen,
                title: "Balanced Education",
                description:
                  "Equal focus on academics, character building, and overall wellbeing.",
              },
              {
                icon: Star,
                title: "Community Trust",
                description:
                  "Strong reputation in the local community built over two decades.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                  <item.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        id="philosophy"
        className="py-20 lg:py-28 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Building Character, Creating Future Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-10">
              Our Core Values
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Kindness & Empathy",
                "Strong Values",
                "Inclusive Education",
                "Innovative Learning",
                "Confidence Building",
                "Critical Thinking",
                "Collaboration",
                "Creativity",
              ].map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="font-medium text-slate-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Our Facilities
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Quality Infrastructure for Quality Education
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We provide a conducive learning environment with practical
                facilities that support our students' academic and personal
                growth.
              </p>

              <div className="space-y-4">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-slate-50 rounded-xl p-4"
                  >
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-slate-700 font-medium">
                      {facility}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Classroom"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop"
                    alt="Students learning"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1549057736-889b732754a2?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="School activities"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop"
                    alt="Digital learning"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Parent Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              What Parents Say About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section
        id="admissions"
        className="py-20 lg:py-28 bg-gradient-to-br from-amber-500 to-orange-500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-white/20 text-white font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-6">
              Admissions Open 2026-2027
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Give Your Child the Feathers to Fly
            </h2>
            <p className="text-white/90 text-lg">
              Admissions are now open for the 2026-2027 academic year. Join our
              community and watch your child soar.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-10">
              Simple 3-Step Admission Process
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Visit School",
                  description:
                    "Come and explore our campus. Meet our faculty and see our facilities firsthand.",
                },
                {
                  step: "02",
                  title: "Meet Faculty",
                  description:
                    "Have a conversation with our experienced teachers about your child's needs.",
                },
                {
                  step: "03",
                  title: "Enroll",
                  description:
                    "Complete the simple enrollment process and secure your child's future.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => setShowPopup(true)}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Start Your Journey
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Visit Us Today
            </h2>
            <p className="text-slate-600 text-lg">
              We'd love to hear from you. Reach out to us for any queries or to
              schedule a visit.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        Address
                      </p>
                      <p className="text-slate-600">
                        Mozum Nagar, near Vivek Plywood,
                        <br />
                        near Vikas Dairy, Lucknow,
                        <br />
                        Uttar Pradesh – 226003
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">Phone</p>
                      <a
                        href="tel:08172948400"
                        className="text-slate-600 hover:text-amber-600 transition-colors"
                      >
                        08172948400
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">Email</p>
                      <a
                        href="mailto:avizimam@gmail.com"
                        className="text-slate-600 hover:text-amber-600 transition-colors"
                      >
                        avizimam@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">
                        School Hours
                      </p>
                      <div className="text-slate-600 text-sm space-y-1">
                        {hours.map((h, i) => (
                          <div key={i} className="flex justify-between gap-8">
                            <span>{h.day}</span>
                            <span
                              className={
                                h.day === "Sunday"
                                  ? "text-amber-600 font-medium"
                                  : ""
                              }
                            >
                              {h.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="tel:08172948400"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918172948400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Visit
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-slate-50 rounded-2xl p-2 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.234567890123!2d80.90123456789012!3d26.901234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzA0LjQiTiA4MMKwNTQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1rem", minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aviz Convent School Location"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* School Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-amber-300">
                  <img src="/logo.png" alt="logo.png" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Aviz Convent School</h3>
                  <p className="text-slate-400 text-sm">
                    Comprehensive English Education
                  </p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                Established in 1999, we are committed to providing quality
                education with kindness at the core. Every child is known,
                valued, and supported as an individual.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:8172948400"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:avizimam@gmail.com"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "philosophy", label: "Our Philosophy" },
                  { id: "facilities", label: "Facilities" },
                  { id: "admissions", label: "Admissions" },
                  { id: "contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* School Hours */}
            <div>
              <h4 className="font-bold text-lg mb-6">School Hours</h4>
              <ul className="space-y-2 text-slate-400">
                {hours.map((h, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{h.day}</span>
                    <span
                      className={h.day === "Sunday" ? "text-amber-400" : ""}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Aviz Convent School. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Established 1999 • UP Board • English Medium
            </p>
          </div>
        </div>
      </footer>

      {/* CTA Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Feather className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Admissions Open
              </h3>
              <p className="text-lg text-amber-600 font-semibold">
                Give Your Child the Feathers to Fly
              </p>
              <p className="text-slate-500 mt-2">2026-2027 Academic Year</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setShowPopup(false);
                  scrollToSection("admissions");
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="tel:8172948400"
                className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <button
                onClick={() => {
                  setShowPopup(false);
                  scrollToSection("contact");
                }}
                className="w-full bg-slate-100 text-slate-700 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
            </div>

            <p className="text-center text-slate-500 text-sm mt-6">
              Limited seats available. Enquire today!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
