import { useState } from "react";

const moods = {
  happy: {
    description: "This makes me feel happy because of sunny days.",
    link: "https://www.youtube.com/watch?v=d-diB65scQU", // Example song
    memory: "I remember playing outside all day with my friends during summer vacations.",
    color: "#ffeb3b",
  },
  nostalgic: {
    description: "This makes me feel nostalgic when I hear old songs from my childhood.",
    link: "https://www.youtube.com/watch?v=3JWTaaS7LdU", // Example song
    memory: "Sitting in my room, listening to my favorite CDs on repeat.",
    color: "#ffc107",
  },
  excited: {
    description: "I get excited whenever I plan a trip or start a new project!",
    link: "https://www.youtube.com/watch?v=OPf0YbXqDm0", // Example song
    memory: "That one time I spontaneously booked a weekend trip and had the best adventure!",
    color: "#ff5722",
  },
};

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px", background: selectedMood ? moods[selectedMood].color : "white" }}>
      <h1>My Mood Tracker</h1>
      <div>
        {Object.keys(moods).map((mood) => (
          <button key={mood} onClick={() => setSelectedMood(mood)} style={{ margin: "10px", padding: "10px" }}>
            {mood.charAt(0).toUpperCase() + mood.slice(1)}
          </button>
        ))}
      </div>
      {selectedMood && (
        <div style={{ marginTop: "20px", padding: "20px", borderRadius: "10px", background: "white" }}>
          <h2>{selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)}</h2>
          <p>{moods[selectedMood].description}</p>
          <p><strong>Memory:</strong> {moods[selectedMood].memory}</p>
          <a href={moods[selectedMood].link} target="_blank" rel="noopener noreferrer">Listen to a song</a>
        </div>
      )}
    </div>
  );
}

