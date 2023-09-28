const strokes = {
  primary: "stroke-primary",
  accent: "stroke-accent",
  success: "stroke-green-600",
  error: "stroke-red-600",
  warning: "stroke-yellow-400",
};

const CommentIcon = ({ fontSize, color }) => {
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
        <path d="M7 7h10v2H7zm0 4h7v2H7z"></path>
        <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
    </svg>
  );
};

export default CommentIcon;
