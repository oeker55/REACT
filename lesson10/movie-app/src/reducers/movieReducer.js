const initialState = []

export default function (state = initialState, { type, payload }) {
  switch (type) {

  case "first":
    return {state}

  default:
    return state
  }
}
