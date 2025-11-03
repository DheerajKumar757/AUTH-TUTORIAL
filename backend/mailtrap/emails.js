import { mailtrapClient, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

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