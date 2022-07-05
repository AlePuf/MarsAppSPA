import React, {ReactNode, useState, CSSProperties} from "react";
import CircleLoader from 'react-spinners/CircleLoader';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Button from "@mui/material/Button";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

interface JSONCamera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

interface JSONRovers {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: Array<JSONCamera>;
}

interface JSONRover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

interface JSONPhoto {
    id: number;
    sol: number;
    camera: JSONCamera;
    img_src: string;
    earth_date: string;
    rover: JSONRover;
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
}

export function NASA_API() {
    const [rover, setRover] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [disabledButton, setDisabledButton] = useState(true);
    const [cameras, setCameras] = useState([{id: 0, name: "", rover_id: 0, full_name: ""}]);
    const [camera, setCamera] = useState("");
    const [options, setOptions] = useState([{label: "", value: ""}]);
    const [roverList, setRoverList] = useState<Array<JSONRovers>>([]);
    const [sentRequest, setSentRequest] = useState(false);
    const [showPhotos, setShowPhotos] = useState(false);
    const [photoList, setPhotoList] = useState<Array<ReactNode>>([]);
    const [loading, setLoading] = useState(true);
    const [loadingPhoto, setLoadingPhoto] = useState(false);
    const handleChangeRover = (event: SelectChangeEvent) => {
        setRover(event.target.value);
        setDisabled(false);
        setCameras(roverList.filter((element) => {return element.name.toLowerCase() === event.target.value})[0].cameras);
    }
    const handleChangeCamera = (event: SelectChangeEvent) => {
        setCamera(event.target.value);
        setDisabledButton(false);
    }
    if (!sentRequest) {
        setSentRequest(true);
        axios.get("http://localhost:8000/rovers").then((response) => {
            setRoverList(response.data);
            setLoading(false);
            setOptions(response.data.map((rover: JSONRovers) => {
                return {label: rover.name, value: rover.name.toLowerCase()}
            }));
        }).catch(() => {
            console.log("error");
        });
    }
    return (
        <div>
            <CircleLoader color="#00ff00" loading={loading} cssOverride={override} />
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id ="rover-select-label">Rover</InputLabel>
                <Select
                    labelId="rover-select-label"
                    id="rover-select"
                    value={rover}
                    label="Rover"
                    onChange={handleChangeRover}
                >
                    {options.map((option, index) => {
                        return (
                            <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <FormControl sx={{m: 1, minWidth: 120}} disabled={disabled}>
                <InputLabel id ="camera-select-label">Camera</InputLabel>
                <Select
                    labelId="camera-select-label"
                    id="camera-select"
                    value={camera}
                    label="Camera"
                    onChange={handleChangeCamera}
                >
                    {cameras.map((camera : JSONCamera) => {
                        return (
                            <MenuItem key={camera.id} value={camera.name}>{camera.full_name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <Button variant="contained" color="success" disabled={disabledButton} onClick={() => {
                setLoadingPhoto(true);
                axios.get("http://localhost:8000/rovers/" + rover + "/photos/200?camera=" + camera + "&page=1").then((response) => {
                    setLoadingPhoto(false);
                    setShowPhotos(true);
                    setPhotoList(response.data.slice(0, 5).map((photo: JSONPhoto) => {
                        return <img key={photo.id} src={photo.img_src} alt="Mars rover" />
                    }));
                }).catch(() => {
                    console.log("error");
                });
            }}>
                Get photos
            </Button>
            <PacmanLoader color="#ff00ff" loading={loadingPhoto} cssOverride={override} />
            {showPhotos && <div>{photoList}</div>}
        </div>
    )
}