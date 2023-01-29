import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {BsFillCameraFill} from "react-icons/bs";
import ModalCam from "../../Component/Modal/ModalCam";

const UserForm = () => {
  const [showCam, setShowCam] = useState(false);
  const handleShowCam = () => setShowCam(true);
  const handleCloseCam = () => setShowCam(false);

  return (
    <div>
      <Container>
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="card" style={{width: "20rem", padding: "10px"}}>
            <div className="card-body">
              <div className="mb-5 text-center">
                <h4>Form Akses Ruangan</h4>
              </div>
              <form>
                <div className="mb-2">
                  <label className="form-label">Nama Lengkap</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-2">
                  <label className="form-label">No Telp</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">No KTP</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="d-grid gap-2">
                  <div className="row justify-content-between mb-3">
                    <div className="col-6">
                      <label className="form-label">Masukkan Foto</label>
                    </div>
                    <div className="col-4">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => {
                          handleShowCam();
                        }}
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <BsFillCameraFill />
                        </div>
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="button">
                    Masukkan Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <ModalCam showCam={showCam} handleCloseCam={handleCloseCam} />
    </div>
  );
};
export default UserForm;
