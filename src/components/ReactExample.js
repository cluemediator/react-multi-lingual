import React from 'react';
import { Trans, withTranslation } from 'react-i18next';

const ReactExample = () => {
  return (
    <div>
      <Trans count="3">REACT_EXAMPLE</Trans>
    </div>
  )
}

export default withTranslation()(ReactExample);