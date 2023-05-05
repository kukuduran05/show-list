import React from "react";

export const File = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((info, index) => {
          return (
            <div className="d-flex align-items-center" key={index}>
              <div className="flex-shrink-0">
                <img className="image" src={info.url} />
              </div>
              <div className="flex-grow-1 ms-3">
                <span>{info.title}</span>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
