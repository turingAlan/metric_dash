import ReactJson from "react-json-view";

const JsonViewer = ({ data }) => {
  return (
    <div style={{
        height: "100%",
        maxHeight:"67vh",
        overflowY: "auto",
        width: "100%",
        borderRadius: "10px",
    }}
    className="json-viewer"
    >
      <ReactJson
        src={data}
        style={{
          backgroundColor: "rgba(40, 44, 53,0.3)",
          filter:"blur(0.5px)",
          paddingInline: "0.5rem",
          paddingBlock: "0.3rem",
        }}
        collapseStringsAfterLength={50}
        theme={"ocean"}
      />
    </div>
  );
};

export default JsonViewer;
