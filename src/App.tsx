import { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, ArrowLeft, ArrowRight, Home } from 'lucide-react';

// Import all 16 local images
import fiona1 from '/images/fiona1.jpg';
import fiona2 from '/images/fiona2.jpg';
import fiona3 from '/images/fiona3.jpg';
import fiona5 from '/images/fiona5.jpg';
import fiona4 from '/images/fiona4.jpg';
import fiona6 from '/images/fiona6.jpg';
import fiona7 from '/images/fiona7.jpg';
import fiona8 from '/images/fiona8.jpg';
import fiona9 from '/images/fiona9.jpg';
import fiona10 from '/images/fiona10.jpg';
import fiona11 from '/images/fiona11.jpg';
import fiona12 from '/images/fiona12.jpg';
import fiona13 from '/images/fiona13.jpg';
import fiona14 from '/images/fiona14.jpg';
import fiona15 from '/images/fiona15.jpg';
import fiona16 from '/images/fiona16.jpg';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPhrase, setPhraseIndex] = useState(0);

  const birthDate = new Date('2010-03-19T00:00:00');
  const adoptionDate = new Date('2020-09-26T00:00:00');
  const passedDate = new Date('2024-12-31T22:30:00+01:00'); // Paris time
  const currentDate = new Date(); // Fixed current date

  // Use all 16 local images
  const catPhotos = [
    fiona1,
    fiona2,
    fiona3,
    fiona4,
    fiona5,
    fiona6,
    fiona7,
    fiona8,
    fiona9,
    fiona10,
    fiona11,
    fiona12,
    fiona13,
    fiona14,
    fiona15,
    fiona16,
  ];

  const memoryPhrases = [
    "Forever in our hearts, sweet Fiona 💕",
    "The queen of purrs and cuddles ✨",
    "Every day with you was a gift 🌟",
    "Your paw prints will always be in our hearts 🐾",
    "The most precious companion anyone could ask for 💝",
    "Your gentle spirit touched us all 🌈",
    "Missing your sweet meows every day 🎵",
    "Thank you for all the love you gave 💖",
    "Our beautiful angel watching from above ⭐",
    "The best cuddle buddy ever 🤗",
    "Your love made our house a home 🏠",
    "Forever remembered, forever loved 💗",
    "The sweetest soul we've ever known 🦋",
    "Our precious little guardian angel 👼",
    "You brought so much joy to our lives 🌞",
    "The most perfect cat companion 🐱",
    "Missing you more with each passing day 💫",
    "Your memory lives on in our hearts 🌹",
    "Until we meet again, sweet girl 🌈"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % catPhotos.length);
      setPhraseIndex((prev) => (prev + 1) % memoryPhrases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const calculateAge = () => {
    const ageInMillis = passedDate.getTime() - birthDate.getTime();
    const years = Math.floor(ageInMillis / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((ageInMillis % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    return `${years} years and ${months} months`;
  };

  const calculateTimeSincePassage = () => {
    const timeSince = currentDate.getTime() - passedDate.getTime();
    const days = Math.floor(timeSince / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeSince % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    return `${days} days and ${hours} hours`;
  };

  const calculateNextBirthday = () => {
    const nextBirthday = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < currentDate) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const timeUntil = nextBirthday.getTime() - currentDate.getTime();
    const days = Math.floor(timeUntil / (24 * 60 * 60 * 1000));
    return `${days} days until your next birthday in heaven`;
  };

  const calculateTimeSinceAdoption = () => {
    const timeSince = currentDate.getTime() - adoptionDate.getTime();
    const years = Math.floor(timeSince / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeSince % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    return `${years} years and ${months} months`;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % catPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + catPhotos.length) % catPhotos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        {/* Title and Memory Phrase */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">In Memory of Fiona</h1>
          <p className="text-gray-600 italic">{memoryPhrases[currentPhrase]}</p>
        </div>

        {/* Carousel */}
        <div className="relative h-96 rounded-xl overflow-hidden group bg-gray-100">
          <img
            src={catPhotos[currentSlide]}
            alt="Fiona memories"
            className="w-full h-full object-contain"
          />
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-purple-500" />
              <h2 className="font-semibold text-gray-800">Fiona's Age</h2>
            </div>
            <p className="text-gray-600">{calculateAge()}</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-pink-500" />
              <h2 className="font-semibold text-gray-800">Time Since Passing</h2>
            </div>
            <p className="text-gray-600">{calculateTimeSincePassage()}</p>
          </div>

          <div className="bg-rose-50 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="text-rose-500" />
              <h2 className="font-semibold text-gray-800">Next Birthday</h2>
            </div>
            <p className="text-gray-600">{calculateNextBirthday()}</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Home className="text-blue-500" />
              <h2 className="font-semibold text-gray-800">Time Since Adoption</h2>
            </div>
            <p className="text-gray-600">{calculateTimeSinceAdoption()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;