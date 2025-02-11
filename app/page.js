"use client";

import EmailTemplate from "@/components/EmailTemplate";

export default function EmailActions() {
  const copyEmailToClipboard = () => {
    const emailHtml = EmailTemplate(); // Assuming this function returns the email HTML as string

    // Step 1: Copy the email HTML content to clipboard
    navigator.clipboard
      .writeText(emailHtml)
      .then(() => {
        // Step 2: Notify user that the HTML has been copied
        alert(
          "HTML content copied to clipboard! You can now paste it into your email editor."
        );
      })
      .catch((err) => {
        console.error("Error copying to clipboard: ", err);
      });
  };

  return (
    <div>
      {/* Button to copy the email HTML */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={copyEmailToClipboard}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          Copy Email HTML
        </button>
      </div>
      {/* Render the email template so users can see it */}
      <div
        dangerouslySetInnerHTML={{ __html: EmailTemplate() }}
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginBottom: "20px",
        }}
      />
    </div>
  );
}
