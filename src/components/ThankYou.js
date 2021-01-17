import React from 'react';
import { withTranslation } from 'react-i18next';

const ThankYou = ({ t }) => {
  return (
    <div className="tks">
      <i>{t('THANK_YOU')}</i>
    </div>
  )
}

export default withTranslation()(ThankYou);