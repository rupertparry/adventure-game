export function parser(props) {
  const words = props.string.split(" ");

  if (words[0] === "move") {
    let newPosition;

    switch (words[1]) {
      case "north":
        newPosition = [props.state.position[0], props.state.position[1] + 1];
        break;
      case "south":
        newPosition = [props.state.position[0], props.state.position[1] - 1];
        break;
      case "west":
        newPosition = [props.state.position[0] - 1, props.state.position[1]];
        break;
      case "east":
        newPosition = [props.state.position[0] + 1, props.state.position[1]];
        break;
      default:
        return;
    }
    props.onPositionChange(newPosition);
  }
}
