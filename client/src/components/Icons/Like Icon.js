const strokes = {
  primary: "stroke-primary",
  accent: "stroke-accent",
  success: "stroke-green-600",
  error: "stroke-red-600",
  warning: "stroke-yellow-400",
};

const LikeIcon = ({ fontSize, color }) => {
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
        <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"></path>
    </svg>
  );
};

export default LikeIcon;
