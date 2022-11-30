import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  progress[value] {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;

const ProgressBar = (props) => {
  const { max, width, height } = props;
  return (
    <Container width={width} height={height}>
      <progress value={props.value} max={max}></progress>
    </Container>
  );
};

ProgressBar.protoTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  width: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  width: "600px",
  height: "40px",
};

export default ProgressBar;
