package com.tentMaster.servelet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Properties;    
import javax.mail.*;    
import javax.mail.internet.*;   
/**
 * Servlet implementation class message
 */
@WebServlet("/message")
public class Message extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public Message() {
        super();
        // TODO Auto-generated constructor stub
    }


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String firstName = request.getParameter("firstname");
		String lastName = request.getParameter("lastname");
		String phone = request.getParameter("phone");
		String message = request.getParameter("message");
		String email = request.getParameter("firstname");
		
		if (firstName == null) {
			firstName = " ";
		}
		
		if (lastName == null) {
			lastName = " ";
		}
		
		StringBuilder sb = new StringBuilder();
		sb.append("from: " + firstName + " " + lastName + "\n");
		sb.append("phone: " + phone == null ? "" : phone + "\n");
		sb.append("message: " + message + "\n");
		sb.append("email: " + email);
		
		
		//boolean status = Mailer.send("colombosl1996@gmail.com", "Prasad@357", "hprasadmaduranga@gmail.com", "messge from tent master", sb.toString());
		
		
		//boolean status = 
				try {
					GoogleMail.Send("colombosl1996", "Prasad@357","tentmaster.lk@gmail.com", "message from tent master", sb.toString());
				} catch (AddressException e) {
					
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (MessagingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		
	}

}

class Mailer{  
    public static boolean send(String from,String password,String to,String sub,String msg){  
          //Get properties object    
          Properties props = new Properties();    
          props.put("mail.smtp.host", "smtp.gmail.com");    
          props.put("mail.smtp.socketFactory.port", "465");    
          props.put("mail.smtp.socketFactory.class",    
                    "javax.net.ssl.SSLSocketFactory");    
          props.put("mail.smtp.auth", "true");    
          props.put("mail.smtp.port", "465");    
          //get Session   
          Session session = Session.getDefaultInstance(props,    
           new javax.mail.Authenticator() {    
           protected PasswordAuthentication getPasswordAuthentication() {    
           return new PasswordAuthentication(from,password);  
           }    
          });    
          //compose message    
          try {    
           MimeMessage message = new MimeMessage(session);    
           message.addRecipient(MimeMessage.RecipientType.TO,new InternetAddress(to));    
           message.setSubject(sub);    
           message.setText(msg);    
           //send message  
           Transport.send(message);    
           System.out.println("message sent successfully");    
           return true;
          } catch (MessagingException e) {
          	System.out.println("Exception: " + e.getLocalizedMessage());
          	return false;
          }    
             
    }  
}  

