import React from "react";
import tinycolor from "tinycolor2";

export default function Monochromater(props) {
    const { color } = props;

    function renderTableCell() {
        const lightColors = [40, 30, 20, 10].map(x => <td style={{backgroundColor: tinycolor(color).lighten(x).toString()}}/>);
        const darkColors = [0, 10, 20, 30, 40].map(x => <td style={{backgroundColor: tinycolor(color).darken(x).toString()}}/>);
        return [...lightColors, ...darkColors];
    }

    return (
      <div>
          <table style={{width: "30%", height: "100px"}}>
              <tr>{renderTableCell()}</tr>
          </table>
      </div>
    );
}

Monochromater.defaultProps = {
    color: "#FF0000"
}


