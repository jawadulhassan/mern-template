import React, { useState, Fragment } from "react";

import Button from "../../widgets/Button";

function Header() {
  const [rightActive, setRightActive] = useState(false);
  const toggleOptions = () => setRightActive(!rightActive);

  return (
    <div>
      {rightActive ? (
        <Fragment>
          <Button label="Seasons" rightActive={true} onClick={toggleOptions} />
          <Button
            label="Movies"
            active={true}
            rightActive={true}
            onClick={toggleOptions}
          />
        </Fragment>
      ) : (
        <Fragment>
          <Button label="Seasons" active={true} onClick={toggleOptions} />
          <Button label="Movies" onClick={toggleOptions} />
        </Fragment>
      )}
    </div>
  );
}

export default Header;
