import smtplib
import email.utils
from email.mime.text import MIMEText

def send_email(user_email, subject, html):
    """
        Sends an account activation email to the user. Also used to send
        account recovery emails.
    """

    msg = MIMEText(html, 'html')
    msg['To'] = email.utils.formataddr(('Recipient', user_email))

    # Update this by creating a new email address for our app.
    #msg['From'] = email.utils.formataddr(('Liquidemocracy', 'liquidemocracy.app@gmail.com'))

    msg['Subject'] = subject

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()

        # Update this by using login credentials for our app's email.
        #server.login('liquidemocracy.app@gmail.com', "<PASSWORD>")

        # Update this by using the email for our app.
        #server.sendmail('liquidemocracy.app@gmail.com', user_email, msg.as_string())
    except Error as e:
        print("Email error:", e)
    finally:
        server.quit()
