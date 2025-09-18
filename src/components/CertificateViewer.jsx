// CertificateViewer.jsx
export default function CertificateViewer({ img }) {
  return (
    <div style={{
      backgroundColor: "lightgreen",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      target: "_blank"
    }}>
      <img src={img} alt="Certificate" style={{ maxWidth: "90%", maxHeight: "90%" }} />
    </div>
  );
}
