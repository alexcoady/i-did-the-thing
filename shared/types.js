// @flow

// @flow
// App dependencies

export type FormProps = {
  array: {
    push: (string, any) => void,
  },
  change: (string, any) => void,
  handleSubmit: Function,
  initialValues: Object,
  invalid: boolean,
  pristine: boolean,
  reset: () => void,
};

export type FieldProps = {
  input: {
    name: string,
    onBlur: (any) => void,
    onChange: (any) => void,
    onFocus: (any) => void,
    value: any,
  },
  meta: {
    active: boolean,
    error?: string,
    touched: boolean,
  }
};

export type FieldArrayProps = {
  fields: {
    name: string,
    getAll: () => any[],
    map: Function,
    length: number,
    pop: Function,
    push: Function,
    remove: Function,
  },
  meta: {
    active: boolean,
    touched: boolean,
    error?: string,
    [string]: any,
  }
};

export type NavigatorProps = {
  navigator: {
    dismissAllModals: (?Object) => void,
    dismissModal: (?Object) => void,
    pop: (?Object) => void,
    popToRoot: (?Object) => void,
    push: (Object) => void,
    resetTo: (Object) => void,
    setButtons: (Object) => void,
    setOnNavigatorEvent: Function,
    setStyle: (Object) => void,
    setTitle: (Object) => void,
    showModal: (Object) => void,
  },
};

export type NavigatorEvent = {
  id: string,
  type: string,
};

type LayoutNativeEvent = {
  layout: {
    height: number,
    width: number,
  },
};

type ContentSizeChangeNativeEvent = {
  contentSize: {
    height: number,
    width: number,
  },
};

export type LayoutEvent = {
  nativeEvent: LayoutNativeEvent,
};

export type ContentSizeChangeEvent = {
  nativeEvent: ContentSizeChangeNativeEvent,
};

export type KeyboardEvent = {
  endCoordinates: {
    height: number,
  },
  duration: number,
};

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

type Coordinate = {
  x: number,
  y: number,
};

export type Gradient = {
  colors: string[],
  locations?: number[],
  end: Coordinate,
  start: Coordinate,
};
