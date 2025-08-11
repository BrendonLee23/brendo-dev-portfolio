import emailjs from "emailjs-com";

export const EMAILJS_SERVICE_ID = "service_ii83zyh";
export const EMAILJS_TEMPLATE_ID = "template_zs6uvfl";
export const EMAILJS_USER_ID = "86wxH1nGd_RjIQPfl";

export function sendContactEmail(data: any) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    data,
    EMAILJS_USER_ID
  );
}