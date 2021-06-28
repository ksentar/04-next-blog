import { FC } from "react";

export const Card: FC<{ id: number; text: string; created_at: string }> = (
  props
) => {
  const i = Math.random();

  return (
    <div className="card shadow-sm">
      <svg
        className="bd-placeholder-img card-img-top"
        width="100%"
        height={225}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
      <div className="card-body">
        <p className="card-text">{props.text}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-muted"> {i} mins</small>
        </div>
      </div>
    </div>
  );
};
