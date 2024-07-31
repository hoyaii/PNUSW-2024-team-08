import { useRouter } from "next/router";
import PasswordEditUI from "./PasswordEdit.presenter";
import { useCurrentPasswordCheck } from "./hooks/useCurrentPasswordCheck";
import { useNewPasswordCheck } from "./hooks/useNewPasswordCheck";
import { useUpdatePassword } from "./hooks/useUpdateNewPassword";

export default function PasswordEdit() {
  const router = useRouter();

  const {
    currentPassword,
    isCorrectPassword,
    correctMessage,
    handleCurrentPasswordChange,
  } = useCurrentPasswordCheck();

  const {
    newPassword,
    confirmPassword,
    isPasswordValid,
    isPasswordMatching,
    validationMessage,
    confirmMessage,
    handleNewPasswordChange,
    handleConfirmPasswordChange,
  } = useNewPasswordCheck(currentPassword);

  const { updatePasswords } = useUpdatePassword(
    currentPassword,
    newPassword,
    confirmPassword,
    isCorrectPassword,
    isPasswordValid,
    isPasswordMatching
  );

  const navigateBack = () => {
    router.back();
  };

  return (
    <PasswordEditUI
      currentPassword={currentPassword}
      isCorrectPassword={isCorrectPassword}
      correctMessage={correctMessage}
      handleCurrentPasswordChange={handleCurrentPasswordChange}
      newPassword={newPassword}
      confirmPassword={confirmPassword}
      isPasswordValid={isPasswordValid}
      isPasswordMatching={isPasswordMatching}
      validationMessage={validationMessage}
      confirmMessage={confirmMessage}
      handleNewPasswordChange={handleNewPasswordChange}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
      updatePasswords={updatePasswords}
      navigateBack={navigateBack}
    />
  );
}