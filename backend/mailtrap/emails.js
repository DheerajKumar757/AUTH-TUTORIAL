import { mailtrapClient, sender } from "./mailtrap.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            subject: "Verify your email address",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
        console.log("Verification email sent:", response);
    }
    catch (error) {
        console.error(`Error sending verification email to ${email}:`, error);
        throw new Error(`Failed to send verification email: ${error}`);
    }

}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "a8d24208-4b83-4ffd-a2ec-0168056148cc",
            template_variables: {
                company_info_name: "Dheeraj Auth Company",
                name: name,
            },
        });

        console.log("Welcome email sent successfully", response);
    }
    catch (error) {
        console.error(`Error sending welcome email to ${email}:`, error);
        throw new Error(`Failed to send welcome email: ${error}`);
    }
    
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        });
    }
    catch (error) {
        console.error(`Error sending password reset email to ${email}:`, error);
        throw new Error(`Failed to send password reset email: ${error}`);
    }
};

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        });
        console.log(`Password reset success email sent to ${email}:`, response)
    } catch (error) {
        console.error(`Error sending password reset success email to ${email}:`, error);
        throw new Error(`Failed to send password reset success email: ${error}`);
    }
};