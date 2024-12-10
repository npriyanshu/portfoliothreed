import { create } from 'zustand';
import { Camera } from "three";

interface CameraState {
  camera: Camera | null;
  setCamera: (camera: Camera) => void;
}

const useCameraStore = create<CameraState>((set) => ({
  camera: null,
  setCamera: (camera) => set({ camera }),
}));

export default useCameraStore;
