import { useState } from "react";

const moods = {
  nostalgic: {
    description: "Makes me recall the times of when I was kid playing my favorite games .",
    link: "https://www.youtube.com/watch?v=Cn1gqNNzTHs", // Example song
    memory: "This reminds of the nostalgia I have when playing games I had as a kid, especially the Arkham series on christmas morning",
    color: "green",
  },
  happy: {
    description: "This makes me happy, because it's my go to comfort watch channel",
    link: "https://www.youtube.com/watch?v=cAeYMYkew_k&t=1076s", // Example Video
    memory: "I remember in late high-school/early college I found Smosh and would use it as background noise, I grew to be a big fan and it's helped me understand people better.",
    color: "#ffc107",
  },
  sad: {
    description: "This happens when I hear a really sad song or I lose somebody close to me. ",
    link: "https://www.youtube.com/watch?v=04mfKJWDSzI", // Example song
    memory: "This reminds of me of the long bus rides home from highschool, where I knew as soon as I got home, i'd be bored out of mine with no one to talk too.",
    color: "blue",
  },
};

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "'Comic Sans MS', 'Poppins', cursive", background: selectedMood ? moods[selectedMood].color : "white" }}>
      <h1 style={{ fontFamily: "'Bangers', cursive" }}>Landon's Groovy Mood Tracker</h1>
      <div>
        {Object.keys(moods).map((mood) => (
          <button key={mood} onClick={() => setSelectedMood(mood)} style={{ margin: "10px", padding: "10px", fontFamily: "'Fredoka One', sans-serif" }}>
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </button>
        ))}
      </div>
      {selectedMood && (
        <div style={{ marginTop: "20px", padding: "20px", borderRadius: "10px", background: "white", fontFamily: "'Caveat', cursive" }}>
          <h2>{selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)}</h2>
          <p>{moods[selectedMood].description}</p>
          <p><strong>Memory:</strong> {moods[selectedMood].memory}</p>
          <a href={moods[selectedMood].link} target="_blank" rel="noopener noreferrer">Click for Visual Representation!</a>
        </div>
      )}
    </div>
  );
}
