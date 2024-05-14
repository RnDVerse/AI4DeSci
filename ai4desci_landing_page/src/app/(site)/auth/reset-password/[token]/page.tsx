import React from "react";
import ResetPassword from "@/components/Auth/ResetPassword";

const ResetPasswordPage = ({ params }: { params: { token: string } }) => {
  return <ResetPassword token={params.token} />;
};

export default ResetPasswordPage;
