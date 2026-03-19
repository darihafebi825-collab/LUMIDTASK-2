// src/components/FixedButtons.jsx

export default function FixedButtons() {
  return (
    <div style={{
      position: "fixed",
      bottom: "30px",
      right: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      zIndex: 9999,
    }}>
      <a href="/buy" style={btnStyle}>Buy Template - $99</a>
      <a href="/templates" style={btnStyle}>More Templates</a>
    </div>
  );
}

const btnStyle = {
  background: "#fff",
  color: "#111",
  border: "1.5px solid #ccc",
  padding: "12px 22px",
  fontSize: "14px",
  fontWeight: "600",
  borderRadius: "6px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
  textDecoration: "none",
  whiteSpace: "nowrap",
  cursor: "pointer",
};