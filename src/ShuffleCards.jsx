import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const cardContents = [
  "Your smile can brighten the darkest days.",
  "You’ve overcome challenges before—you’re stronger than you think.",
  "Your kindness has a ripple effect on others.",
  "You’re loved more deeply than you realize.",
  "Your courage to feel deeply is a gift.",
  "You’re someone’s reason to smile.",
  "Your resilience is awe-inspiring.",
  "You’re capable of achieving your wildest dreams.",
  "Your authenticity is magnetic.",
  "You’re a work in progress—and that’s beautiful.",
  "You have people who genuinely care about you.",
  "You’re someone’s safe place.",
  "Your presence makes gatherings better.",
  "You’ve touched lives in ways you’ll never know.",
  "You’re surrounded by invisible support (even from afar).",
  "You’re someone’s role model.",
  "You’re a beacon of hope for someone else.",
  "Your friendship is a gift to others.",
  "You’re someone’s “favorite person.”",
  "Your voice matters more than you know.",
  "Tomorrow holds new opportunities.",
  "Your dreams are worth chasing.",
  "Every sunrise is a fresh start.",
  "There’s a breakthrough waiting around the corner.",
  "Your potential is limitless.",
  "You’re exactly where you need to be right now.",
  "The world needs your unique perspective.",
  "Your future self is rooting for you.",
  "You’re a catalyst for positive change.",
  "There’s a mountain you’ll conquer someday.",
  "Your favorite comfort food is just a meal away.",
  "A warm hug can make everything feel better.",
  "The stars tonight are a reminder of life’s magic.",
  "Fresh flowers can bring instant cheer.",
  "A cozy blanket and hot drink work wonders.",
  "The sound of rain can be soothing.",
  "Your favorite song can lift your mood instantly.",
  "The smell of fresh baked goods is comforting.",
  "A lazy Sunday can be healing.",
  "The joy of a pet’s affection is unconditional.",
  "You’re allowed to prioritize your peace.",
  "A warm bath can wash away stress.",
  "Journaling can lighten your emotional load.",
  "A walk in nature can ground you.",
  "Meditation can bring clarity.",
  "You’re allowed to rest without guilt.",
  "Dancing like nobody’s watching is liberating.",
  "A digital detox can refresh your mindset.",
  "Yoga can reconnect you with your body.",
  "A skincare routine can be a form of self-love.",
  "You’ve survived 100% of your bad days.",
  "Your growth inspires others.",
  "Every mistake taught you something valuable.",
  "You’re wiser today than you were yesterday.",
  "Your scars tell stories of survival.",
  "You’ve already made progress, even if it’s small.",
  "Your journey is uniquely yours.",
  "You’ve inspired someone silently.",
  "Your courage to keep going is admirable.",
  "You’re a mosaic of all you’ve overcome.",
  "Your creativity can turn pain into art.",
  "There’s a hobby waiting to reignite your passion.",
  "Baking cookies can fill your home with joy.",
  "Writing can be a powerful release.",
  "A spontaneous adventure could spark joy.",
  "Your talent for [hobby] is impressive.",
  "A vision board could manifest your dreams.",
  "Music can heal what words cannot.",
  "A DIY project might channel your energy.",
  "Your poetry/art/stories touch hearts.",
  "It’s okay to ask for help.",
  "Your emotions are valid and temporary.",
  "You’re allowed to feel multiple emotions at once.",
  "You’re not alone in how you feel.",
  "It’s okay to outgrow what no longer serves you.",
  "You’re allowed to redefine happiness.",
  "Your sensitivity is a strength.",
  "You’re worthy of the love you give others.",
  "You’re allowed to set boundaries.",
  "You’re enough, exactly as you are.",
  "There’s a puppy video waiting to make you laugh.",
  "A funny meme could turn your day around.",
  "Your laughter is contagious.",
  "Karaoke nights are therapy in disguise.",
  "A comedy special might lift your spirits.",
  "Your quirks make you unforgettable.",
  "A themed party could bring silly joy.",
  "Dancing to cheesy music is soul food.",
  "Your inner child loves playtime.",
  "A board game night invites laughter.",
  "The ocean’s waves can reset your mood.",
  "A sunrise hike offers breathtaking views.",
  "Autumn leaves are nature’s art.",
  "Stargazing reminds you of life’s vastness.",
  "A picnic in the park is simple joy.",
  "The smell of pine trees is calming.",
  "A road trip could lead to unexpected wonders.",
  "Planting something teaches patience.",
  "The northern lights are a magical spectacle.",
  "A beach day soothes the soul.",
  "You’re a masterpiece in progress.",
  "A random text from a friend could brighten your day.",
  "Your existence makes the universe more interesting.",
  "You’re allowed to change your mind.",
  "There’s a hidden strength in your vulnerability.",
  "Your favorite childhood snack still exists.",
  "You’re someone’s answered prayer.",
  "A day spent resting is still productive.",
  "Your intuition is wiser than you think.",
  "The right words will find you when you need them.",
  "You’ve already made someone proud today.",
  "Your flaws make you relatable and real.",
  "A handwritten note from your past self could inspire you.",
  "You’re a living reminder that good exists.",
  "Your energy can shift entire rooms.",
  "There’s a new skill you’ll master when the time is right.",
  "You’re allowed to outshine your doubts.",
  "Your life is a story worth telling.",
  "The sound of waves can reset your mood.",
  "You’re worthy of all the care you give others.",
  "A single deep breath can calm your nerves.",
  "Your journey is inspiring others silently.",
  "There’s a quote that’ll resonate with your soul.",
  "You’re allowed to redefine happiness.",
  "Your courage to feel deeply is a superpower.",
  "A walk under the stars can remind you of magic.",
  "You’ve survived storms—this is just a drizzle.",
  "Your authenticity is a rare gift.",
  "There’s a cozy café waiting for your visit.",
  "You’re the author of your next chapter.",
  "Your resilience is a quiet revolution.",
  "A phone call to a loved one can lift your spirits.",
  "You’re allowed to celebrate tiny wins.",
  "Your heart knows how to heal itself.",
  "There’s a hidden blessing in this moment.",
  "You’re a magnet for miracles.",
  "Your voice matters more than you know.",
  "A random act of kindness could change your day.",
  "You’re allowed to release what doesn’t serve you.",
  "Your presence is a present to the world.",
  "There’s a book that’ll speak directly to your soul.",
  "You’re exactly where you’re meant to be.",
  "Your light can’t be dimmed by temporary darkness.",
  "A daydream about your future can ignite hope.",
  "You’re worthy of the love you give freely.",
  "The right people are rooting for your success.",
  "Your struggles are shaping your strength.",
  "There’s a playlist that’ll match your mood perfectly.",
  "You’re allowed to take up space unapologetically.",
  "Your story isn’t over—it’s just getting good.",
  "A warm cup of tea can soothe your soul.",
  "You’re someone’s reason to believe in love.",
  "Your courage to keep going is commendable.",
  "There’s a sunrise waiting to amaze you.",
  "You’re allowed to prioritize your joy.",
  "Your sensitivity is a strength, not a weakness.",
  "A walk in nature can ground you instantly.",
  "You’ve already changed lives for the better.",
  "Your potential is like an unwritten poem.",
  "There’s a mentor who believes in you.",
  "You’re allowed to release others’ expectations.",
  "Your laughter is a melody to someone’s ears.",
  "A handwritten journal can hold your healing.",
  "You’re a warrior in soft armor.",
  "There’s a future version of you who’s thriving.",
  "Your kindness plants seeds of hope in others.",
  "A night under the stars can remind you of wonder.",
  "You’re allowed to mourn and grow simultaneously.",
  "Your scars tell stories of survival.",
  "There’s a community waiting to embrace you.",
  "You’re a catalyst for positive change.",
  "A creative project could channel your energy.",
  "Your existence defies incredible odds.",
  "There’s a new friendship on your horizon.",
  "You’re allowed to be both strong and soft.",
  "Your heart’s capacity to love is infinite.",
  "A long bath can wash away the day’s weight.",
  "You’re someone’s safe haven.",
  "Your journey is uniquely yours—no comparisons needed.",
  "There’s a breakthrough waiting around the corner.",
  "You’re allowed to rest without guilt.",
  "Your mind is a garden—nurture it gently.",
  "A spontaneous road trip could spark joy.",
  "You’re a phoenix rising from ashes.",
  "There’s a teacher who still quotes your wisdom.",
  "You’re allowed to seek beauty in small things.",
  "Your vulnerability connects you to humanity.",
  "A homemade meal can comfort your spirit.",
  "You’re a mirror reflecting others’ light.",
  "There’s a song lyric that’ll hit differently today.",
  "You’re allowed to release the need to be perfect.",
  "Your courage to feel is revolutionary.",
  "A phone-free hour could bring peace.",
  "You’re a lighthouse guiding ships through storms.",
  "There’s a hidden reservoir of strength within you.",
  "You’re allowed to embrace your contradictions.",
  "Your tears water the soil for new growth.",
  "A letter to your future self can spark hope.",
  "You’re a rare gem in a world of stones.",
  "There’s a moment of serendipity coming your way.",
  "Your favorite blanket is ready to hug you.",
  "You’re someone’s favorite notification.",
  "Your ability to listen is a superpower.",
  "There’s a new recipe waiting to be your comfort food.",
  "You’re allowed to set boundaries with love.",
  "Your patience is quietly changing lives.",
  "A sunrise photoshoot could remind you of beauty.",
  "You’re a living example of grace under pressure.",
  "There’s a poem that’ll speak to your heart.",
  "You’re allowed to be proud of how far you’ve come.",
  "Your curiosity opens doors to new worlds.",
  "A day without plans can be healing.",
  "You’re someone’s “I want to be like them.”",
  "Your ability to adapt is remarkable.",
  "There’s a park bench with your name on it.",
  "You’re allowed to outgrow old versions of yourself.",
  "Your smile has disarmed someone’s bad day.",
  "A digital detox could refresh your mindset.",
  "You’re a magnet for unexpected blessings.",
  "There’s a TED Talk that’ll inspire you.",
  "You’re allowed to take the scenic route in life.",
  "Your emotional depth is a gift.",
  "A playlist of empowering anthems awaits.",
  "You’re someone’s reminder that good exists.",
  "Your perseverance is building unshakable strength.",
  "There’s a cozy bookstore calling your name.",
  "You’re allowed to feel joy even during struggles.",
  "Your intuition is guiding you toward light.",
  "A gratitude practice can shift your perspective.",
  "You’re a warrior with a tender heart.",
  "There’s a future memory you’ll cherish.",
  "You’re allowed to redefine success daily.",
  "Your presence makes gatherings warmer.",
  "A handwritten list of wins can boost confidence.",
  "You’re a catalyst for kindness wherever you go.",
  "There’s a yoga pose that’ll release tension.",
  "You’re allowed to be both a mess and magnificent.",
  "Your life force is irreplaceable.",
  "A digital art project could spark creativity.",
  "You’re someone’s favorite follow.",
  "Your ability to hope is itself a victory.",
  "There’s a mountain you’ll conquer someday.",
  "You’re allowed to honor your needs first.",
  "Your story helps others feel less alone.",
  "A night of stargazing can put things in perspective.",
  "You’re a prism reflecting unique colors.",
  "There’s a compliment you haven’t heard yet.",
  "You’re allowed to release timelines.",
  "Your courage to try again is inspiring.",
  "There’s a handwritten letter coming your way.",
  "Your favorite pajamas are ready for a movie night.",
  "You’re someone’s go-to for wise advice.",
  "Your ability to find silver linings is a gift.",
  "There’s a new hobby that’ll ignite passion.",
  "You’re allowed to feel ambivalent and still act.",
  "Your energy shifts rooms for the better.",
  "A DIY project could channel your creativity.",
  "You’re a living reminder that growth is possible.",
  "There’s a podcast episode that’ll resonate.",
  "You’re allowed to prioritize inner peace.",
  "Your quiet strength moves mountains.",
  "A day trip could introduce you to new joy.",
  "You’re someone’s safe space.",
  "Your willingness to learn is admirable.",
  "There’s a meditation that’ll calm your mind.",
  "You’re allowed to enjoy solitude.",
  "Your life is a collection of beautiful moments.",
  "A handwritten poem could capture your essence.",
  "You’re a force of nature in human form.",
  "There’s a new app that’ll make life easier.",
  "You’re allowed to release the need to explain.",
  "Your authenticity attracts genuine connections.",
  "A vision board could manifest dreams.",
  "You’re someone’s reason to keep going.",
  "Your ability to forgive sets you free.",
  "There’s a workout that’ll boost endorphins.",
  "You’re allowed to celebrate others’ wins.",
  "Your resilience is a quiet revolution.",
  "A new language could open doors.",
  "You’re a masterpiece in motion.",
  "There’s a documentary that’ll expand your mind.",
  "You’re allowed to rest without productivity guilt.",
  "Your vulnerability is your superpower.",
  "A social media break could renew clarity.",
  "You’re someone’s favorite memory.",
  "Your capacity to love knows no bounds.",
  "There’s a skincare routine that’ll pamper you.",
  "You’re allowed to feel lost and still move forward.",
  "Your life is a garden—weed out what doesn’t serve.",
  "A random compliment from a stranger awaits.",
  "You’re a phoenix rising—always.",
  "There’s a new coffee blend to try.",
  "You’re allowed to honor your inner child.",
  "Your existence makes history more interesting.",
  "A photography walk could reveal beauty.",
  "You’re someone’s favorite thought.",
  "Your ability to pivot is a strength.",
  "There’s a motivational podcast episode for you.",
  "You’re allowed to create your own sunshine.",
  "The world is better because you’re in it."
];

const ShuffleCards = () => {
  const [currentCard, setCurrentCard] = useState(cardContents[0]);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleCards = () => {
    if (isShuffling) return;
    setIsShuffling(true);

    let newCard;
    do {
      newCard = cardContents[Math.floor(Math.random() * cardContents.length)];
    } while (newCard === currentCard);

    setCurrentCard(null);
    
    setTimeout(() => {
      setCurrentCard(newCard);
      setIsShuffling(false);
    }, 300);
  };

  const cardVariants = {
    initial: { rotateY: -90, opacity: 0, scale: 0.5 },
    animate: { rotateY: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { rotateY: 90, opacity: 0, scale: 0.5, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-pink-200 to-purple-300">
      <button
        onClick={shuffleCards}
        disabled={isShuffling}
        className="mb-12 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform text-lg disabled:opacity-50"
      >
        Shuffle ✨
      </button>

      <div className="relative w-64 h-96 perspective-1000">
  <AnimatePresence mode="wait">
    {currentCard && (
      <motion.div
        key={currentCard}
        className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-6 shadow-purple-900 shadow-2xl overflow-hidden"
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 opacity-90" />
        
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent mix-blend-overlay" />

        {/* Card content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-4 text-center">
          {/* Decorative top icon */}
          <div className="absolute top-4 right-4 text-white/30">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
            </svg>
          </div>

          {/* Main text */}
          <span className="text-3xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent px-4">
            {currentCard}
          </span>

          {/* Decorative divider */}
          <div className="w-16 h-1 bg-white/30 rounded-full" />

          {/* Animated bottom element */}
          <motion.div
            className="absolute bottom-6 w-12 h-1 bg-white/50 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Sparkle particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/50 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `scale(${Math.random()})`
              }}
            />
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>
    </div>
  );
};

export default ShuffleCards;



