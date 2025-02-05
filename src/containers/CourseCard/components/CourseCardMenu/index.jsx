import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Dropdown, Icon, IconButton } from '@openedx/paragon';
import { MoreVert } from '@openedx/paragon/icons';
import { StrictDict } from '@edx/react-unit-test-utils';

import EmailSettingsModal from 'containers/EmailSettingsModal';
import UnenrollConfirmModal from 'containers/UnenrollConfirmModal';
import { reduxHooks } from 'hooks';
import SocialShareMenu from './SocialShareMenu';
import {
  useEmailSettings,
  useUnenrollData,
  useHandleToggleDropdown,
  useOptionVisibility,
} from './hooks';

import messages from './messages';

export const testIds = StrictDict({
  unenrollModalToggle: 'unenrollModalToggle',
});

export const CourseCardMenu = ({ cardId }) => {
  const { formatMessage } = useIntl();

  const emailSettings = useEmailSettings();
  const unenrollModal = useUnenrollData();
  const handleToggleDropdown = useHandleToggleDropdown(cardId);
  const { shouldShowUnenrollItem, shouldShowDropdown } = useOptionVisibility(cardId);
  const { isMasquerading } = reduxHooks.useMasqueradeData();
  const { isEmailEnabled } = reduxHooks.useCardEnrollmentData(cardId);

  if (!shouldShowDropdown) {
    return null;
  }

  return (
    <>
      
      {isEmailEnabled && (
        <EmailSettingsModal
          show={emailSettings.isVisible}
          closeModal={emailSettings.hide}
          cardId={cardId}
        />
      )}
    </>
  );
};
CourseCardMenu.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCardMenu;
