import * as React from 'react';
// Components
import VerifyValidate from '../../../auth/verify-validate/verify-validate';


type Props = {
  email: string,
}

// Компонент профиль пользователя ДО подтверждения email
const UserProfileUnverifed: React.FC<Props> = ({ email }) => {

  return (
    <div>
      <VerifyValidate email={email} />
    </div>
  );
}

export default UserProfileUnverifed;
