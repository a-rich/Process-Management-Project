import smtplib
import email.utils
from email.mime.text import MIMEText
from flask import current_app as app

def send_email(user_email, subject, html):
    """
        Sends an account activation email to the user. Also used to send
        account recovery emails.
    """

    msg = MIMEText(html, 'html')
    msg['To'] = email.utils.formataddr(('Recipient', user_email))
    msg['From'] = email.utils.formataddr(('LikeHome', 'like.home.reg@gmail.com'))

    msg['Subject'] = subject

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()

        server.login('like.home.reg@gmail.com', app.config['EMAIL_AUTH'])

        server.sendmail('like.home.reg@gmail.com', user_email, msg.as_string())
    except Error as e:
        print("Email error:", e)
    finally:
        server.quit()
