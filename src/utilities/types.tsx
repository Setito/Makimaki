type controlLightCallback = () => void;

interface controlLightInput {
  readonly lightID: number;
  readonly callback: controlLightCallback;
}

export type {controlLightInput};
