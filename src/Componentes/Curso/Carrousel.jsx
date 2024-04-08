import { useEffect, useRef } from 'react';
import videoCrucianelli from "../../assets/CRUCIANELLI.mp4";

const VideoComponent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className="container-fluid" style={{ backgroundColor: "#FFCFC4" }}>
            <div className="row">
                <div className="col">
                    <video ref={videoRef} controls className="w-100 h-10" autoPlay loop preload="auto" style={{ maxHeight: "500px" }}>
                        <source src={videoCrucianelli} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default VideoComponent;
