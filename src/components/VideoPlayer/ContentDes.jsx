import React, { useEffect, useState } from "react";

const DescriptionComponent = ({ content }) => {
  const initialLimit = 50;
  const [limit, setLimit] = useState(initialLimit);
  const [desc, setDesc] = useState("");
  useEffect(() => {
    setDesc(content);
  }, [content]);

  const showMore = () => {
    setLimit(desc.length);
  };

  const showLess = () => {
    setLimit(initialLimit);
  };

  return (
    <div>
      <p>
        <span className="font-bold">Description:</span>{" "}
        {desc ? desc.slice(0, limit) : ""}
        {desc && desc.length > initialLimit && limit <= initialLimit && (
          <span className="text-blue-500 cursor-pointer" onClick={showMore}>
            Read more
          </span>
        )}
        {limit > initialLimit && (
          <span className="text-blue-500 cursor-pointer" onClick={showLess}>
            Read less
          </span>
        )}
      </p>
    </div>
  );
};

export default DescriptionComponent;
