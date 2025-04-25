import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/thumbnail.css";

export default function ThumbnailById({ id }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // React Router navigation hook
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://apagefromthephotographer.site"; // Fallback to localhost if env variable is not set

  useEffect(() => {
    fetch(`${API_BASE_URL}/config/data_fetch.php?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        try {
          // Remove "Connected successfully" and parse the JSON
          const cleanedData = data.replace("Connected successfully", "").trim();
          const jsonData = JSON.parse(cleanedData);
          setThumbnail(jsonData);
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError);
          setError("Invalid response from server.");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching thumbnail:", error);
        setError("Failed to load thumbnail. Please try again later.");
        setIsLoading(false);
      });
  }, [id]);

  const incrementViews = async () => {
    if (!thumbnail) return; // Ensure thumbnail is not null

    try {
      const response = await fetch(
        `${API_BASE_URL}/config/increment_views.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );
      const data = await response.json();

      if (data.success) {
        // Increment the views count locally
        setThumbnail((prev) => ({
          ...prev,
          views: parseInt(prev.views) + 1,
        }));
      } else {
        console.error("Failed to increment views:", data.message);
      }
    } catch (error) {
      console.error("Error incrementing views:", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!thumbnail) {
    return <p>Thumbnail not found</p>;
  }

  return (
    <div className="thumbnail">
      <a
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.466)), url(${thumbnail.image_url})`,
        }}
        href={`/videos/${id}`}
        aria-label={thumbnail.title}
        onClick={async (e) => {
          e.preventDefault(); // Prevent default navigation
          await incrementViews(); // Increment views
          navigate(`/videos/${id}`); // Redirect using React Router
        }}
      >
        <div className="details">
          <p>Views:&nbsp;{thumbnail.views}</p>
          <p>Likes:&nbsp;{thumbnail.likes}</p>
        </div>
      </a>
    </div>
  );
}