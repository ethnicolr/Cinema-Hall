interface LoginStatus {
  success: boolean;
  access_token: any;
  email: string;
  id: number;
}

interface RegistrationStatus {
  success: boolean;
  message: string;
}

export { LoginStatus, RegistrationStatus };
