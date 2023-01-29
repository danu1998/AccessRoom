import React, {useCallback, useRef, useState} from "react";
import Webcam from "react-webcam";
import {Container, Modal} from "react-bootstrap";

const ModalCam = ({showCam, handleCloseCam}) => {
  const [img, setImg] = useState(null);
  const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: "user",
  };

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);
  return (
    <Modal show={showCam} onHide={handleCloseCam}>
      <Container>
        <div style={{padding: "20px"}}>
          {img === null ? (
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <Webcam
                  audio={false}
                  mirrored={true}
                  height={200}
                  width={200}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />

                <div class="col-md-6">
                  <button
                    class="btn btn-primary"
                    type="button"
                    onClick={capture}
                  >
                    Foto
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <img src={img} alt="screenshot" />
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => setImg(null)}
                >
                  Retake
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Modal>
  );
};

export default ModalCam;
