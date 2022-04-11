import { Offline, Online, Detector } from "react-detect-offline";
import ErrorToast from "./ErrorToast"
function CheckNet(){
    return (
      <Detector
        render={({ online }) => (
          <div
            className={online ? "normal" : "warning"}
            style={{ textAlign: "center", color: "white" }}
          >
            {online ? "" : <ErrorToast msg={"You are currently offline "}/>}
          </div>
        )}
      />
    );

}
export default CheckNet