// import React, { useState } from "react";

// interface Msg {
//   role: "user" | "assistant";
//   content: string;
// }

// export default function Chat() {
//   const [messages, setMessages] = useState<Msg[]>([]);
//   const [text, setText] = useState("");

//   const sendMessage = async () => {
//     if (!text.trim()) return;

//     const newMessage: Msg = { role: "user", content: text };
//     setMessages((prev) => [...prev, newMessage]);
//     setText("");

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "This is a dummy AI response." },
//       ]);
//     }, 600);
//   };

//   return (
//     <div style={styles.wrapper}>
//       <h2 style={styles.heading}>💜 AI Chatbot</h2>

//       <div style={styles.chatBox}>
//         {messages.map((m, i) => (
//           <div key={i} style={m.role === "user" ? styles.userBubble : styles.aiBubble}>
//             {m.content}
//           </div>
//         ))}
//       </div>

//       <div style={styles.inputRow}>
//         <input
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Write a message…"
//           style={styles.input}
//         />
//         <button onClick={sendMessage} style={styles.button}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// // 💜 BEAUTIFUL PURPLE UI — RESPONSIVE — MOBILE FRIENDLY
// const styles: Record<string, React.CSSProperties> = {
//   wrapper: {
//     maxWidth: "480px",
//     margin: "0 auto",
//     height: "100vh",
//     padding: "1rem",
//     display: "flex",
//     flexDirection: "column",
//     background: "linear-gradient(160deg,#7b2ff7,#b295ff)",
//   },
//   heading: {
//     textAlign: "center",
//     color: "white",
//     marginBottom: "1rem",
//     fontSize: "1.8rem",
//     fontWeight: 700,
//   },
//   chatBox: {
//     flex: 1,
//     overflowY: "auto",
//     padding: 15,
//     borderRadius: 12,
//     backdropFilter: "blur(10px)",
//     background: "rgba(255,255,255,0.15)",
//     border: "1px solid rgba(255,255,255,0.3)",
//     marginBottom: 15,
//   },
//   userBubble: {
//     background: "#d9c2ff",
//     padding: "10px 14px",
//     borderRadius: "18px 18px 4px 18px",
//     marginBottom: 12,
//     marginLeft: "auto",
//     maxWidth: "75%",
//     color: "#3d0066",
//     fontWeight: 500,
//   },
//   aiBubble: {
//     background: "white",
//     padding: "10px 14px",
//     borderRadius: "18px 18px 18px 4px",
//     marginBottom: 12,
//     marginRight: "auto",
//     maxWidth: "75%",
//     color: "#333",
//     boxShadow: "0 3px 6px rgba(0,0,0,0.08)",
//   },
//   inputRow: {
//     display: "flex",
//     gap: 10,
//   },
//   input: {
//     flex: 1,
//     padding: "12px",
//     borderRadius: 30,
//     border: "none",
//     outline: "none",
//     fontSize: "1rem",
//     background: "white",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//   },
//   button: {
//     padding: "12px 20px",
//     borderRadius: 30,
//     border: "none",
//     background: "#5a00d3",
//     color: "white",
//     fontWeight: "bold",
//     cursor: "pointer",
//     transition: "0.2s",
//   },
// };





















import React, { useState } from "react";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = () => {
    if (!text.trim()) return;

    const newMsg: Msg = { role: "user", content: text };
    setMessages((p) => [...p, newMsg]);
    setText("");

    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((p) => [
        ...p,
        { role: "assistant", content: "Typing simulation complete ✨" },
      ]);
    }, 1200);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.chatCard}>
        {/* NAVBAR */}
        <div style={styles.navbar}>
          <img src="/img/ai.png" alt="AI" style={styles.avatar} />
          <span style={styles.navTitle}>AI Assist</span>
        </div>

        {/* CHAT */}
        <div style={styles.chatBox}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={m.role === "user" ? styles.userBubble : styles.aiBubble}
            >
              {m.content}
            </div>
          ))}

          {/* TYPING */}
          {typing && (
            <div style={styles.typingBubble}>
              <span style={styles.dot}></span>
              <span style={styles.dot}></span>
              <span style={styles.dot}></span>
            </div>
          )}
        </div>

        {/* INPUT */}
        <div style={styles.inputRow}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a message…"
            style={styles.input}
          />
          <button onClick={sendMessage} style={styles.button}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------- STYLES ----------------
const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(160deg,#7b2ff7,#b295ff)",
  },

  chatCard: {
    width: "420px",
    height: "600px",
    background: "rgba(255,255,255,0.22)",
    backdropFilter: "blur(16px)",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.35)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },

  navbar: {
    height: "65px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "0 18px",
    background: "rgba(255,255,255,0.18)",
    borderBottom: "1px solid rgba(255,255,255,0.3)",
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: "50%",
  },

  navTitle: {
    fontSize: "1.3rem",
    fontWeight: 800,
    color: "white",
  },

  chatBox: {
    flex: 1,
    padding: 18,
    overflowY: "auto",
  },

  userBubble: {
    background: "#d9c2ff",
    padding: "10px 14px",
    borderRadius: "18px 18px 4px 18px",
    marginBottom: 12,
    marginLeft: "auto",
    maxWidth: "75%",
    color: "#3d0066",
    fontWeight: 500,
  },

  aiBubble: {
    background: "white",
    padding: "10px 14px",
    borderRadius: "18px 18px 18px 4px",
    marginBottom: 12,
    marginRight: "auto",
    maxWidth: "75%",
    color: "#222",
    boxShadow: "0 3px 6px rgba(0,0,0,0.08)",
  },

  typingBubble: {
    background: "white",
    padding: "8px 14px",
    borderRadius: "18px 18px 18px 4px",
    marginBottom: 10,
    marginRight: "auto",
    width: 55,
    display: "flex",
    justifyContent: "space-between",
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#7a52ff",
    animation: "blink 1.4s infinite",
  },

  inputRow: {
    padding: 12,
    display: "flex",
    gap: 10,
    background: "rgba(255,255,255,0.25)",
    borderTop: "1px solid rgba(255,255,255,0.3)",
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: 25,
    border: "none",
    outline: "none",
    fontSize: "1rem",
    background: "white",
  },

  button: {
    padding: "12px 20px",
    borderRadius: 25,
    border: "none",
    background: "#5a00d3",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1.1rem",
  },
};
