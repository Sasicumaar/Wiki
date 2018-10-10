using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Configuration;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace Email.API.Controllers
{
    public class EmailController : ApiController
    {  
        public HttpResponseMessage Get(string Value)
        {
            string[] lines = Value.Split('~');

            string Type = lines[0];
            string Name = lines[1]; string Email = lines[2]; string Comments = lines[3];
            if (Type == "ContactForm")
            {
                string html = "Name :" + Name + "<br> Email :" + Email + "<br> Comments :" + Comments;

                string SenderEmailAddress = "test@gmail.com";
                string SubjectContent = "Subject";
                string BodyContent = html;
                string CCEmailAddress = "";

                try
                {
                    SmtpSection settings = (SmtpSection)ConfigurationManager.GetSection("system.net/mailSettings/smtp");
                    var fromAddress = new MailAddress(settings.Network.UserName);
                    var fromPassword = settings.Network.Password;
                    var toAddress = new MailAddress(SenderEmailAddress);

                    string subject = SubjectContent;
                    string body = BodyContent;

                    System.Net.Mail.SmtpClient smtp = new System.Net.Mail.SmtpClient
                    {
                        Host = settings.Network.Host,
                        Port = settings.Network.Port,
                        EnableSsl = settings.Network.EnableSsl,
                        DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network,
                        UseDefaultCredentials = settings.Network.DefaultCredentials,
                        Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                        //https://www.google.com/settings/security/lesssecureapps
                    };

                    MailMessage message = null;
                    using (message = new MailMessage(fromAddress, toAddress)
                    {
                        Subject = subject,
                        Body = body,
                        IsBodyHtml = true
                    })
                    {
                        if (!string.IsNullOrEmpty(CCEmailAddress))
                        {
                            var ccAddress = new MailAddress(CCEmailAddress);
                            message.CC.Add(ccAddress);
                        }
                        smtp.Send(message);

                        return Request.CreateResponse(HttpStatusCode.OK, true);
                    }

                }
                catch (Exception ex)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, false);

                }
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, false); 
            }

        }
           
    }
}
