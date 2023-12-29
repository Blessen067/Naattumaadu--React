import React, { useState, useEffect } from "react";
import { socialLinks } from "../../utils/api";

const VideoModal = () => {
  const [modal, setModal] = useState(false);
  const [socialMedia, setSocialMedai] = useState();
  
  const fetchSocialLinks = async () => {
    try {
       const data = await socialLinks()
       setSocialMedai(data)
      } catch (error) {
        console.log("Error: ", error);
      }
  };

  useEffect(() => {
    fetchSocialLinks();
  }, []);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div className="v-modal-area">
      <div className="video-btn">
        <ul>
          <li>
            <button className="wrap" onClick={openModal}>
              <i className="fi flaticon-play-button"></i>
            </button>
          </li>
        </ul>
      </div>
      <div className="v-modal-wrap">
        {modal ? (
          <section className="modal__bg">
            <button onClick={openModal} className="close">
              <i className="fa fa-close"></i>
            </button>
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <div className="modal__video-align">
                  {socialMedia?.videolink && (
                    <iframe
                      className="modal__video-style"
                      loading="lazy"
                      src={socialMedia?.videolink}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default VideoModal;
