const secret = {
    email_host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    email_service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
    email_port: process.env.NEXT_PUBLIC_EMAIL_PORT,
    email_user: process.env.NEXT_PUBLIC_EMAIL_USER,
    email_pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    //SRC : https://stackoverflow.com/questions/60701936/error-invalid-login-application-specific-password-required
};

export default secret