const strokes = {
  primary: "stroke-primary",
  accent: "stroke-accent",
  success: "stroke-green-600",
  error: "stroke-red-600",
  warning: "stroke-yellow-400",
};


const DownloadIcon = ({ fontSize, color }) => {
  return (
    <svg
      className={`${strokes[color]}`}
      style={{ fontSize: `${fontSize}px` }}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      stroke="none"
      fill="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
        <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
    </svg>
  );
};

export default DownloadIcon;
