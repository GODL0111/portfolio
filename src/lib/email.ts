// Simple emailjs implementation for sending emails from contact form

// EmailJS service configuration
const EMAILJS_SERVICE_ID = "service_your_id"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_your_id"; // Replace with your EmailJS template ID
const EMAILJS_USER_ID = "user_your_id"; // Replace with your EmailJS user ID

// Function to send email using EmailJS
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  // In a real implementation, you would use the emailjs library
  // Import it at the top of the file:
  // import emailjs from 'emailjs-com';
  
  try {
    // For now, we'll simulate the API call with a timeout
    // In production, uncomment these lines and use actual EmailJS
    /*
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
      EMAILJS_USER_ID
    );
    
    return response;
    */
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Open an email client with prefilled content
    const subject = `Portfolio Contact: ${data.name}`;
    const body = `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `;
    
    // Create a mailto URL
    const mailtoUrl = `mailto:arinkarmakar3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the email client
    window.location.href = mailtoUrl;
    
    return { status: 200, text: "OK" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};