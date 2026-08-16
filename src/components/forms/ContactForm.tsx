"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useT } from "@/i18n/LanguageProvider";

interface FormData {
   user_name: string;
   user_email: string;
   web: string;
   message: string;
}

const ContactForm = () => {
   const { t } = useT();
   const schema = yup
      .object({
         user_name: yup.string().required().label(t("contact.name")),
         user_email: yup.string().required().email().label(t("contact.emailPh")),
         web: yup.string().required().label(t("contact.websitePh")),
         message: yup.string().required().label(t("contact.comments")),
      })
      .required();

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = () => {
      if (form.current) {
         emailjs.sendForm('themedox', 'template_vvhaqp9', form.current, 'QOBCxT0bzNKEs-CwW')
            .then(() => {
               toast.success(t("contact.sent"), { position: 'top-center' });
               reset();
            })
            .catch(() => {
               toast.error(t("contact.fail"), { position: 'top-center' });
            });
      } else {
         toast.error('Form reference is null.', { position: 'top-center' });
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)} id="contact-form">
         <div className="row">
            <div className="col-lg-6 mb-25">
               <input className="input" type="text" {...register("user_name")} placeholder={t("contact.name")} />
               <p className="form_error">{errors.user_name?.message}</p>
            </div>
            <div className="col-lg-6 mb-25">
               <input className="input" type="email" {...register("user_email")} placeholder={t("contact.emailPh")} />
               <p className="form_error">{errors.user_email?.message}</p>
            </div>
            <div className="col-lg-12 mb-25">
               <input className="input" type="text" {...register("web")} placeholder={t("contact.websitePh")} />
               <p className="form_error">{errors.web?.message}</p>
            </div>
            <div className="col-lg-12">
               <textarea className="textarea mb-5" {...register("message")} placeholder={t("contact.comments")}></textarea>
               <p className="form_error">{errors.message?.message}</p>
               <div className="review-checkbox d-flex align-items-center mb-25">
                  <input name="checkbox" className="tg-checkbox" type="checkbox" id="australia" />
                  <label htmlFor="australia" className="tg-label">
                     {t("contact.save")}
                  </label>
               </div>
               <button type="submit" className="tg-btn" name="message">{t("contact.send")}</button>
               <p className="ajax-response mb-0 pt-10"></p>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
