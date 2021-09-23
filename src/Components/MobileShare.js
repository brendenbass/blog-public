import React from 'react';
import { FiSend } from 'react-icons/fi';

const MobileShare = () => {
  const handleOnClick = () => {
    if (navigator.share) {
        navigator
          .share({
            title: "Brenden Bass' Blog",
            text: "Check out this blog!",
            url: document.location.href,
          })
          .then(() => {
            console.log('Successfully shared');
          })
          .catch(error => {
            console.error('Something went wrong sharing the blog', error);
          });
      }
  };

  return (
    <div onClick={handleOnClick}>
      <FiSend className="sendButton"/>
    </div>
  );
};

export default MobileShare;